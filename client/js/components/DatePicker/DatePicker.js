import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import ModalOverlay from '../ModalOverlay';
import DateTimePicker from '@react-native-community/datetimepicker';
import styles from './styles';
import PropTypes from 'prop-types';

const DatePicker = ({onPress, value, setDate, setDateFiltered}) => {
  const [isNewDate, setNewDate] = useState(value);
  return (
    <ModalOverlay
      onPress={e => {
        onPress(false);
      }}>
      <TouchableOpacity activeOpacity={1} style={styles.pickerWrapper}>
        <View style={styles.header}>
          <TouchableOpacity
            onPress={e => {
              onPress(false);
            }}>
            <Text style={styles.actionBtn}>Cancel</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={e => {
              setDate(isNewDate);
              setDateFiltered(true);
              onPress(false);
            }}>
            <Text style={styles.actionBtn}>Done</Text>
          </TouchableOpacity>
        </View>

        <DateTimePicker
          value={isNewDate}
          minimumDate={new Date()}
          onChange={(e, date) => {
            setNewDate(date);
          }}
        />
      </TouchableOpacity>
    </ModalOverlay>
  );
};

export default DatePicker;

DatePicker.propTypes = {
  onPress: PropTypes.func,
  value: PropTypes.object.isRequired,
  setDate: PropTypes.func,
  setDateFiltered: PropTypes.func,
};
