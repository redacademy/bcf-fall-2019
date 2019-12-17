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
  isDifficulty,
  setDifficulty,
}) => {
  return (
    <ModalOverlay
      onPress={e => {
        toggleActionSheet(false);
      }}>
      <TouchableOpacity activeOpacity={1} style={styles.actionSheetWrapper}>
        <View style={styles.header}>
          <TouchableOpacity
            onPress={e => {
              setSortOption(null),
                setRating(false),
                setDifficulty(['EASY', 'MODERATE', 'DIFFICULT']);
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

            <Text style={styles.label}>Difficulty:</Text>

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
                if (isDifficulty.some(option => option === 'EASY')) {
                  const newValue = isDifficulty.filter(
                    option => option !== 'EASY',
                  );
                  setDifficulty(newValue);
                } else {
                  setDifficulty([...isDifficulty, 'EASY']);
                }
              }}
              isChecked={isDifficulty.some(option => option === 'EASY')}
              rightText="Easy"
              rightTextStyle={styles.rightText}
              style={styles.option}
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
                if (isDifficulty.some(option => option === 'MODERATE')) {
                  const newValue = isDifficulty.filter(
                    option => option !== 'MODERATE',
                  );
                  setDifficulty(newValue);
                } else {
                  setDifficulty([...isDifficulty, 'MODERATE']);
                }
              }}
              isChecked={isDifficulty.some(option => option === 'MODERATE')}
              rightText="Moderate"
              rightTextStyle={styles.rightText}
              style={styles.option}
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
                if (isDifficulty.some(option => option === 'DIFFICULT')) {
                  const newValue = isDifficulty.filter(
                    option => option !== 'DIFFICULT',
                  );
                  setDifficulty(newValue);
                } else {
                  setDifficulty([...isDifficulty, 'DIFFICULT']);
                }
              }}
              isChecked={isDifficulty.some(option => option === 'DIFFICULT')}
              rightText="Difficult"
              rightTextStyle={styles.rightText}
            />
          </View>
        </View>
      </TouchableOpacity>
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
  isDifficulty: PropTypes.array,
  setDifficulty: PropTypes.func,
};
