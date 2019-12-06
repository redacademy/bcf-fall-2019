import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import {THEME} from '../../config';
import styles from './styles';

const ButtonDefault = props => {
  return (
    <TouchableOpacity
      onPress={props.onPress}
      style={{
        ...THEME.button.default,
        ...props.buttonStyle,
      }}>
      <Text style={{...THEME.typography.button.default, ...props.textStyle}}>
        {props.title}
      </Text>
    </TouchableOpacity>
  );
};

export default ButtonDefault;
