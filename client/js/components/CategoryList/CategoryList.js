import React from 'react';
import {ImageBackground, View, Text} from 'react-native';
import styles from './styles';
import PropTypes from 'prop-types';

const CategoryList = ({image, name, firstChild, lastChild}) => {
  return (
    <ImageBackground
      source={image}
      style={
        firstChild
          ? {...styles.wrapper, ...styles.firstWrapper}
          : lastChild
          ? {...styles.wrapper, ...styles.lastWrapper}
          : {...styles.wrapper}
      }>
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
  firstChild: PropTypes.bool.isRequired,
  lastChild: PropTypes.bool.isRequired,
};
