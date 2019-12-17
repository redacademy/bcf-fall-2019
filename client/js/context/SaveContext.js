import React, {Component} from 'react';
import {addSave, removeSave, getAllSaves} from '../config/models';

const SaveContext = React.createContext();
export default SaveContext;

export class SaveProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      saveIds: [],
    };
  }
  componentDidMount() {
    this.getSavedIds();
  }

  getSavedIds = async () => {
    try {
      const saves = await getAllSaves();
      const ids = saves.map(save => save[0]);
      this.setState({saveIds: ids});
    } catch (e) {
      console.log(e);
    }
  };

  addSaveId = async saveId => {
    try {
      const newSave = await addSave(saveId);
      if (newSave) {
        this.setState({saveIds: [...this.state.saveIds, newSave.id]});
      }
      this.getSavedIds();
    } catch (e) {
      console.log(e);
    }
  };

  removeSaveIds = async saveId => {
    try {
      await removeSave(saveId);
      this.getSavedIds();
    } catch (e) {
      console.log(e);
    }
  };

  render() {
    return (
      <SaveContext.Provider
        value={{
          saveIds: this.state.saveIds,
          addSaveId: this.addSaveId,
          removeSaveIds: this.removeSaveIds,
        }}>
        {this.props.children}
      </SaveContext.Provider>
    );
  }
}
