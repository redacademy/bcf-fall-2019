import * as React from 'react';
import {TextInput} from 'react-native';

export default class ReviewInput extends Component {
  state = {
    text: '',
  };

  render() {
    return (
      <TextInput
        label="Email"
        value={this.state.text}
        onChangeText={text => this.setState({text})}
      />
    );
  }
}
