import React from 'react';
import {ImageBackground, View, Text} from 'react-native';
import styles from './styles';
import PropTypes from 'prop-types';

const CategoryList = ({image, name, lastChild}) => {
  return (
    <ImageBackground
      source={image}
      style={lastChild ? styles.lastWrapper : styles.wrapper}>
      <View style={styles.overlay}>
        <Text style={styles.title}>{name}</Text>
      </View>
    </ImageBackground>
  );
};

export default CategoryList;

CategoryList.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.node.isRequired,
  lastChild: PropTypes.bool.isRequired,
};
