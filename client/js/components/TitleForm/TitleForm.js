import React from 'react';
import {Text} from 'react-native';
import styles from './styles';
import PropTypes from 'prop-types';

const TitleForm = ({style, children}) => {
  return <Text style={{...style, ...styles.text}}>{children}</Text>;
};

export default TitleForm;

TitleForm.propTypes = {
  style: PropTypes.object,
  children: PropTypes.string,
};
