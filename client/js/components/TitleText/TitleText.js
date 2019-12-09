import React from 'react';
import {Text} from 'react-native';
import styles from './styles';
import PropTypes from 'prop-types';

const TitleText = props => {
  return <Text style={{...styles.text, ...props.style}}>{props.children}</Text>;
};

export default TitleText;

TitleText.propTypes = {
  style: PropTypes.object,
};
