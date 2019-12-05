import React from 'react';
import {Text} from 'react-native';
import styles from './styles';

const TitleText = props => {
  console.log(props);
  return <Text style={{...styles.text, ...props.style}}>{props.children}</Text>;
};

export default TitleText;
