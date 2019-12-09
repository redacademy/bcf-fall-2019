import React from 'react';
import {Text} from 'react-native';
import styles from './styles';
import PropTypes from 'prop-types';

const TitleForm = props => {
  return <Text>{props.children}</Text>;
};

export default TitleForm;
