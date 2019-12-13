import React, {Component} from 'react';
import SafeAreaView from 'react-native-safe-area-view';
import {
  View,
  Picker,
  Text,
  TouchableOpacity,
  LayoutAnimation,
} from 'react-native';
import ModalOverlay from '../ModalOverlay';
import styles from './styles';
import PropTypes from 'prop-types';

class CityPicker extends Component {
  componentDidMount() {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
  }

  render() {
    const {hidePicker, selectCity, citySelected} = this.props;
    return (
      <>
        <ModalOverlay onPress={hidePicker} />
        <SafeAreaView style={styles.container}>
          <View style={styles.wrapper}>
            <View style={styles.inputAccessoryView}>
              <TouchableOpacity
                onPress={() => {
                  hidePicker();
                }}>
                <Text style={styles.inputAccessoryText}>Cancel</Text>
              </TouchableOpacity>
            </View>
            <Picker
              selectedValue={citySelected}
              onValueChange={(newCity, itemIndex) => {
                selectCity(newCity);
                setTimeout(() => {
                  hidePicker();
                }, 500);
              }}>
              <Picker.Item label="Vancouver" value="Vancouver" />
              <Picker.Item label="Victoria" value="Victoria" />
              <Picker.Item label="Kelowna" value="Kelowna" />
              <Picker.Item label="Abbotsford" value="Abbotsford" />
              <Picker.Item label="White Rock" value="White Rock" />
              <Picker.Item label="Nanaimo" value="Nanaimo" />
              <Picker.Item label="Kamloops" value="Kamloops" />
              <Picker.Item label="Chilliwack" value="Chilliwack" />
              <Picker.Item label="Prince George" value="Prince George" />
              <Picker.Item label="Vernon" value="Vernon" />
            </Picker>
          </View>
        </SafeAreaView>
      </>
    );
  }
}

export default CityPicker;

CityPicker.propTypes = {
  selectCity: PropTypes.func.isRequired,
  citySelected: PropTypes.string,
};
