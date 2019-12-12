import React from 'react';
import {TouchableOpacity, Text, View} from 'react-native';
import styles from './styles';
import PropTypes from 'prop-types';

const ButtonSeeAll = ({title, buttonStyle, textStyle}) => {
  return (
    <TouchableOpacity>
      <View
        style={{
          ...styles.button,
          ...buttonStyle,
        }}>
        <Text
          style={{
            ...styles.title,
            ...textStyle,
          }}>
          {title}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default ButtonSeeAll;

ButtonSeeAll.propTypes = {
  title: PropTypes.string.isRequired,
  buttonStyle: PropTypes.object,
  textStyle: PropTypes.object,
};
