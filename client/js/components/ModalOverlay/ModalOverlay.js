import React from 'react';
import {TouchableOpacity} from 'react-native';
import styles from './styles';
import PropTypes from 'prop-types';

const ModalOverlay = ({onPress, children}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={1}
      style={styles.modalDefault}>
      {children}
    </TouchableOpacity>
  );
};

export default ModalOverlay;

ModalOverlay.propTypes = {
  onPress: PropTypes.func,
};
