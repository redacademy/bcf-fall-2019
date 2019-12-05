import React from 'react';
import {ActivityIndicator} from 'react-native';
import styles from './styles';

const Loader = () => {
  return <ActivityIndicator style={styles.loader} size="large" />;
};

export default Loader;
