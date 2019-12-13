import React from 'react';
import {View, Image, Text} from 'react-native';
import InputDefaultField from '../InputDefaultField';
import styles from './styles';
import PropTypes from 'prop-types';

const CardForm = ({style}) => {
  return (
    <View style={{...style}}>
      <InputDefaultField
        title="Cardholder Name"
        titleStyle="regular"
        placeholder="Fullname"
        style={styles.input}
      />
      <InputDefaultField
        title="Card Number"
        titleStyle="regular"
        placeholder="xxxx - xxxx - xxxx - xxxx"
        style={styles.input}
      />

      <View style={styles.flexRow}>
        <InputDefaultField
          title="Exp. date"
          titleStyle="regular"
          placeholder="mm/yy"
          style={{...styles.input, ...styles.flexField}}
        />
        <InputDefaultField
          title="CVV"
          titleStyle="regular"
          placeholder="xxx"
          style={{...styles.input, ...styles.flexField}}
        />
        <View style={{...styles.whatIs, ...styles.flexRow}}>
          <Image
            source={require('../../assets/images/icCvvCard.png')}
            style={styles.imgCvv}
          />
          <Text style={styles.textCvv}>*What is this?</Text>
        </View>
      </View>

      <InputDefaultField
        title="Billing Address"
        titleStyle="regular"
        placeholder="Address"
        style={{...styles.input}}
      />

      <View style={styles.flexRow}>
        <View style={{...styles.input, ...styles.cols2, ...styles.firstChild}}>
          <InputDefaultField
            title="City"
            titleStyle="regular"
            placeholder="City"
          />
        </View>
        <View style={{...styles.input, ...styles.cols2}}>
          <InputDefaultField
            title="Province"
            titleStyle="regular"
            placeholder="Province"
          />
        </View>
      </View>

      <View style={styles.flexRow}>
        <View style={{...styles.input, ...styles.cols2, ...styles.firstChild}}>
          <InputDefaultField
            title="Postal Code"
            titleStyle="regular"
            placeholder="Postal Code"
          />
        </View>
        <View style={{...styles.input, ...styles.cols2}}>
          <InputDefaultField
            title="Country"
            titleStyle="regular"
            placeholder="Country"
          />
        </View>
      </View>
    </View>
  );
};

export default CardForm;

CardForm.propTypes = {
  style: PropTypes.object,
};
