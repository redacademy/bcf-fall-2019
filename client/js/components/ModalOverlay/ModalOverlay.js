import React from 'react';
import {TouchableOpacity} from 'react-native';
import styles from './styles';
import PropTypes from 'prop-types';

const ModalOverlay = ({onPress}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={1}
      style={styles.modalDefault}
    />
  );
};

export default ModalOverlay;

ModalOverlay.propTypes = {
  onPress: PropTypes.func,
};
