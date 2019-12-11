import React from 'react';
import {ImageBackground, View, Text} from 'react-native';
import styles from './styles';
import PropTypes from 'prop-types';

const CategoryList = ({image, name}) => {
  return (
    <ImageBackground source={image} style={styles.wrapper}>
      <View style={styles.overlay}>
        <Text style={styles.title}>{name}</Text>
      </View>
    </ImageBackground>
  );
};

export default CategoryList;
