import React from 'react';
import {View, Image, Text, TouchableOpacity} from 'react-native';
import ModalOverlay from '../ModalOverlay';
import CheckBox from 'react-native-check-box';
import styles from './styles';
import PropTypes from 'prop-types';

const SortActionSheet = ({
  toggleActionSheet,
  sortOption,
  setSortOption,
  isRating,
  setRating,
  isPetFriendly,
  setPetFriendly,
}) => {
  return (
    <ModalOverlay
      style={styles.container}
      onPress={e => {
        toggleActionSheet(false);
      }}>
      <View style={styles.actionSheetWrapper}>
        <View style={styles.header}>
          <TouchableOpacity
            onPress={e => {
              setSortOption(null), setRating(false), setPetFriendly(false);
              toggleActionSheet(false);
            }}>
            <Text style={styles.actionBtn}>Reset</Text>
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Sort By</Text>
          <TouchableOpacity
            onPress={e => {
              toggleActionSheet(false);
            }}>
            <Text style={styles.actionBtn}>Done</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.filterOptionsWrapper}>
          <View style={styles.optionWrapper}>
            <Text style={styles.label}>Price:</Text>

            <CheckBox
              checkedImage={
                <Image
                  source={require('../../assets/images/icRadioSelected.png')}
                />
              }
              unCheckedImage={
                <Image
                  source={require('../../assets/images/icRadioDefault.png')}
                />
              }
              onClick={e => {
                setSortOption('lowToHigh');
              }}
              isChecked={sortOption === 'lowToHigh'}
              rightText="Low to High"
              rightTextStyle={styles.rightText}
              style={styles.option}
            />

            <CheckBox
              checkedImage={
                <Image
                  source={require('../../assets/images/icRadioSelected.png')}
                />
              }
              unCheckedImage={
                <Image
                  source={require('../../assets/images/icRadioDefault.png')}
                />
              }
              onClick={e => {
                setSortOption('highToLow');
              }}
              isChecked={sortOption === 'highToLow'}
              rightText="High to Low"
              rightTextStyle={styles.rightText}
              style={styles.lastOption}
            />

            <Text style={styles.label}>Time:</Text>

            <CheckBox
              checkedImage={
                <Image
                  source={require('../../assets/images/icRadioSelected.png')}
                />
              }
              unCheckedImage={
                <Image
                  source={require('../../assets/images/icRadioDefault.png')}
                />
              }
              onClick={e => {
                setSortOption('soonestToLatest');
              }}
              isChecked={sortOption === 'soonestToLatest'}
              rightText="Soonest to Latest"
              rightTextStyle={styles.rightText}
              style={styles.option}
            />

            <CheckBox
              checkedImage={
                <Image
                  source={require('../../assets/images/icRadioSelected.png')}
                />
              }
              unCheckedImage={
                <Image
                  source={require('../../assets/images/icRadioDefault.png')}
                />
              }
              onClick={e => {
                setSortOption('latestToSoonest');
              }}
              isChecked={sortOption === 'latestToSoonest'}
              value={'latestToSoonest'}
              rightText="Latest to Soonest"
              rightTextStyle={styles.rightText}
              style={styles.lastOption}
            />
          </View>

          <View style={styles.separator} />

          <View style={styles.optionWrapper}>
            <CheckBox
              checkedImage={
                <Image
                  source={require('../../assets/images/icCheckboxSelected.png')}
                />
              }
              unCheckedImage={
                <Image
                  source={require('../../assets/images/icCheckboxDefault.png')}
                />
              }
              onClick={e => {
                setRating(!isRating);
              }}
              isChecked={isRating}
              rightText="Rating"
              rightTextStyle={styles.rightText}
              style={{...styles.option, ...styles.firstOption}}
            />

            <CheckBox
              checkedImage={
                <Image
                  source={require('../../assets/images/icCheckboxSelected.png')}
                />
              }
              unCheckedImage={
                <Image
                  source={require('../../assets/images/icCheckboxDefault.png')}
                />
              }
              onClick={e => {
                setPetFriendly(!isPetFriendly);
              }}
              isChecked={isPetFriendly}
              rightText="Pet friendly"
              rightTextStyle={styles.rightText}
            />
          </View>
        </View>
      </View>
    </ModalOverlay>
  );
};

export default SortActionSheet;

SortActionSheet.propTypes = {
  toggleActionSheet: PropTypes.func.isRequired,
  sortOption: PropTypes.string,
  setSortOption: PropTypes.func,
  isRating: PropTypes.bool,
  setRating: PropTypes.func,
  isPetFriendly: PropTypes.bool,
  setPetFriendly: PropTypes.func,
};
