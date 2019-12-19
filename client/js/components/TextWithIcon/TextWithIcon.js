import React from 'react';
import {Image, Text, View} from 'react-native';
import styles from './styles';
import PropTypes from 'prop-types';

const TextWithIcon = ({style, iconSource, text, label}) => {
  return (
    <View style={{...style}}>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.wrapper}>
        <Image styles={styles.icon} source={iconSource} resizeMode="contain" />
        <Text style={styles.text}>{text}</Text>
      </View>
    </View>
  );
};

export default TextWithIcon;

TextWithIcon.propTypes = {
  label: PropTypes.string,
  text: PropTypes.string,
  iconSource: PropTypes.node,
  style: PropTypes.object,
};
