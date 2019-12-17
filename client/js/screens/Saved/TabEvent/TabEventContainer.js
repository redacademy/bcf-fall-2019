import React, {Component} from 'react';
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
          <TabEvent
            savedIds={savedIds}
            addSaveId={addSaveId}
            removeSaveId={removeSaveId}
            navigation={navigation}
          />
        )}
      </SaveContext.Consumer>
    );
  }
}

export default withCollapsibleForTabChild(TabEventContainer);
