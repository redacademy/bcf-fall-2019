import React, {Component} from 'react';
import TabSelfGuidedTour from './TabSelfGuidedTour';
import {Query} from 'react-apollo';
import {QUERY_SELFGUIDED_TOUR} from '../../../apollo/queries';
import SaveEventContext from '../../../context/SaveEventContext';
import Loader from '../../../components/Loader';

class TabSelfGuidedTourContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  static navigationOptions = ({navigation}) => {
    return {
      title: 'Self-guided Tours',

      headerBackground: () => {
        return <StatusBar barStyle="dark-content" />;
      },
    };
  };

  render() {
    const {navigation} = this.props;
    return (
      <SaveEventContext.Consumer>
        {({savedIds, addSaveId, removeSaveId}) => (
          <Query query={QUERY_SELFGUIDED_TOUR}>
            {({loading, error, data}) => {
              if (loading) return <Loader />;
              if (error) return <Text>Something Wrong, please try again</Text>;
              if (data)
                return (
                  <TabSelfGuidedTour
                    savedIds={savedIds}
                    addSaveId={addSaveId}
                    removeSaveId={removeSaveId}
                    navigation={navigation}
                    eventInfo={data.selfGuidedTours.filter(event =>
                      savedIds.includes(event.id),
                    )}
                  />
                );
            }}
          </Query>
        )}
      </SaveEventContext.Consumer>
    );
  }
}

export default TabSelfGuidedTourContainer;
