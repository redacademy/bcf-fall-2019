import React, {Component} from 'react';
import {Text} from 'react-native';
import {Query} from 'react-apollo';
import {QUERY_ALL_EVENTS} from '../../../apollo/queries';
import SaveContext from '../../../context/SaveContext';
import {withCollapsibleForTabChild} from 'react-navigation-collapsible';
import TabEvent from './TabEvent';

class TabEventContainer extends Component {
  static navigationOptions = ({navigation}) => {
    return {
      title: 'Events',
    };
  };

  render() {
    const {navigation} = this.props;
    return (
      <SaveContext.Consumer>
        {({savedIds, addSaveId, removeSaveId}) => (
          <Query query={QUERY_ALL_EVENTS}>
            {({loading, error, data}) => {
              if (loading) return <Text>Loading</Text>;
              if (error) return <Text>Error</Text>;
              if (data)
                return (
                  <TabEvent
                    savedIds={savedIds}
                    addSaveId={addSaveId}
                    removeSaveId={removeSaveId}
                    navigation={navigation}
                    eventInfo={data.events.filter(event =>
                      savedIds.includes(event.id),
                    )}
                  />
                );
            }}
          </Query>
        )}
      </SaveContext.Consumer>
    );
  }
}

export default withCollapsibleForTabChild(TabEventContainer);
