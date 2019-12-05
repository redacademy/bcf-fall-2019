import React, {Component} from 'react';
import {View, Text, TextInput} from 'react-native';
import styles from './styles';

class InputDefaultField extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selected: false,
      styles: {
        default: {...this.props.style, ...styles.default},
        selected: {...this.props.style, ...styles.default, ...styles.selected},
      },
    };
  }

  render() {
    const {title} = this.props;

    return (
      <View>
        <Text style={styles.title}>{title}</Text>
        <TextInput
          {...this.props}
          style={
            this.state.selected
              ? this.state.styles.selected
              : this.state.styles.default
          }
          onFocus={event => {
            this.setState({selected: true});
          }}
          onBlur={event => {
            this.setState({selected: false});
          }}
        />
      </View>
    );
  }
}

export default InputDefaultField;
