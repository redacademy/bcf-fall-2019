import React, {Component} from 'react';
export const ViewerContext = React.createContext();
import {addViewer, getViewer, removeViewer} from '../../config/models';

class ViewerProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
    };
  }
  componentDidMount() {
    this.getViewer();
  }

  getUser = async () => {
    try {
      const value = await getViewer();
      this.setState({user: value.viewer});
    } catch (e) {
      console.log(e);
    }
  };

  addUser = async user => {
    try {
      const newUser = await addViewer(user);
      if (newUser) {
        this.setState({user: user});
      }
    } catch (e) {
      console.log(e);
    }
  };

  removeUser = async userId => {
    try {
      await removeViewer(userId);
    } catch (e) {
      console.log(e);
    }
  };

  render() {
    return (
      <ViewerContext.Provider
        value={{
          ...this.state,
          addUser: this.addUser,
          removeUser: this.removeUser,
          getUser: this.getUser,
        }}>
        {this.props.children}
      </ViewerContext.Provider>
    );
  }
}

export default ViewerProvider;
