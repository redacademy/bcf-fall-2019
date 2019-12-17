import React, {useState} from 'react';
import {Text, Image, TouchableHighlight} from 'react-native';
import styles from './styles';
import {THEME} from '../../config';
import PropTypes from 'prop-types';

const ButtonFilter = ({title, onPress}) => {
  const [isActive, setActive] = useState(false);

  return (
    <TouchableHighlight
      onPress={() => {
        onPress(true);
      }}
      style={
        isActive
          ? {...styles.filterBtn, ...styles.activeBtn}
          : {...styles.filterBtn}
      }
      underlayColor={THEME.colors.astronautBlue}
      onHideUnderlay={() => {
        setActive(false);
      }}
      onShowUnderlay={() => {
        setActive(true);
      }}>
      <>
        <Text
          selectable={false}
          style={
            isActive
              ? {...styles.buttonText, ...styles.activeBtnText}
              : {...styles.buttonText}
          }
          numberOfLines={1}
          ellipsizeMode="tail">
          {title}
        </Text>
        <Image
          source={
            isActive
              ? require('../../assets/images/icChevronDownWhite.png')
              : require('../../assets/images/icChevronDownDefault.png')
          }
        />
      </>
    </TouchableHighlight>
  );
};
export default ButtonFilter;

ButtonFilter.propTypes = {
  title: PropTypes.string,
  onPress: PropTypes.func,
};
