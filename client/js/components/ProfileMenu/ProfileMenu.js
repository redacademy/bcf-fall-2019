import React from 'react';
import {Text, TouchableOpacity, Image, View} from 'react-native';
import styles from './styles';
import PropTypes from 'prop-types';

const ProfileMenu = props => {
  return (
    <View style={styles.container}>
      <View style={styles.separator} />
      <TouchableOpacity style={styles.flexRow}>
        <Text style={styles.title}>{props.title}</Text>
        <Image
          style={styles.icon}
          source={require('../../assets/images/icArrRightSmallDefault.png')}
        />
      </TouchableOpacity>
    </View>
  );
};

export default ProfileMenu;

ProfileMenu.propTypes = {
  title: PropTypes.string,
};
