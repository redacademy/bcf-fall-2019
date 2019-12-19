import React, {useState} from 'react';

import {
  Animated,
  ScrollView,
  Image,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import {VibrancyView} from '@react-native-community/blur';
import {THEME} from '../../config';
import styles from './styles';
import PropTypes from 'prop-types';
import SelfGuidedItem from '../../components/SelfGuidedItem';

const AnimatedScrollView = Animated.createAnimatedComponent(ScrollView);

const SelfGuidedTour = ({
  navigation,
  selfguidedtours,
  sortDisplayOn,
  needAudio,
  sortType,
  near,
  reviews,
  pet,
  toggleSortDisplay,
  toggleNeedAudio,
  toggleNear,
  togglePet,
  toggleReviews,
  setSortType,
  resetValues,
  collapsible,
  headerHeight,
  onSwitchTheme,
}) => {
  const {paddingHeight, animatedY} = collapsible;

  const _headerHeight = collapsible.paddingHeight
    ? collapsible.paddingHeight
    : headerHeight;
  const [isAnimated, setAnimated] = useState(false);
  const [headerAnimation, setHeaderAnimation] = useState(
    new Animated.ValueXY({x: 0, y: -_headerHeight}),
  );

  const onScroll = e => {
    const offset = e.nativeEvent.contentOffset;
    if (offset.y > _headerHeight && !isAnimated) {
      setAnimated(true);
      animateHeader();
      onSwitchTheme(isAnimated);
    } else if (offset.y <= _headerHeight && isAnimated) {
      setAnimated(false);
      animateHeader();
      onSwitchTheme(isAnimated);
    }
  };

  const animateHeader = () => {
    Animated.timing(headerAnimation, {
      duration: 500,
      toValue: isAnimated ? {x: 0, y: -_headerHeight} : {x: 1, y: 0},
    }).start();
  };

  return (
    <>
      {!paddingHeight && <View style={{height: _headerHeight}} />}
      <AnimatedScrollView
        scrollEventThrottle={32}
        onScroll={Animated.event([{nativeEvent: {contentOffset: {y: 0}}}], {
          useNativeDriver: true,
          listener: onScroll,
        })}
        _mustAddThis={animatedY}
        contentContainerStyle={{
          paddingTop: paddingHeight,
          paddingBottom: THEME.spacing.default(3),
        }}
        scrollIndicatorInsets={{
          top: paddingHeight / 2,
          bottom: THEME.spacing.default(0.5),
        }}>
        <View style={styles.buttonsContainer}>
          <TouchableOpacity
            onPress={() => {
              toggleSortDisplay();
            }}
            style={styles.button}>
            <Text style={styles.buttonText}>Sort</Text>
            <Image
              style={styles.buttonIcon}
              source={require('../../assets/images/icChevronDownDefault.png')}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              toggleNeedAudio();
            }}
            style={needAudio ? styles.audionButtonOn : styles.button}>
            <Text style={needAudio ? styles.buttonTextON : styles.buttonText}>
              Audio
            </Text>
            <Image
              style={needAudio ? styles.buttonIconON : styles.buttonIcon}
              source={
                needAudio
                  ? require('../../assets/images/icHeadsetActive.png')
                  : require('../../assets/images/icHeadsetDefault.png')
              }
            />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              setSortType(null);
            }}
            style={sortType ? styles.audionButtonOn : styles.sortOff}>
            <Text style={styles.buttonTextON}>
              {sortType && sortType.charAt(0).toUpperCase() + sortType.slice(1)}
            </Text>
            <Image
              style={styles.buttonIconON}
              source={require('../../assets/images/icFilterRemoveWhite.png')}
            />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              togglePet();
            }}
            style={pet ? styles.audionButtonOn : styles.sortOff}>
            <Text style={styles.buttonTextON}>Pet</Text>
            <Image
              style={styles.buttonIconON}
              source={require('../../assets/images/icFilterRemoveWhite.png')}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              toggleNear();
            }}
            style={near ? styles.audionButtonOn : styles.sortOff}>
            <Text style={styles.buttonTextON}>Near</Text>
            <Image
              style={styles.buttonIconON}
              source={require('../../assets/images/icFilterRemoveWhite.png')}
            />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              toggleReviews();
            }}
            style={reviews ? styles.audionButtonOn : styles.sortOff}>
            <Text style={styles.buttonTextON}>Reviews</Text>
            <Image
              style={styles.buttonIconON}
              source={require('../../assets/images/icFilterRemoveWhite.png')}
            />
          </TouchableOpacity>
        </View>
        <Text style={styles.tourNumbers}>
          {selfguidedtours && selfguidedtours.length === 1
            ? '1 Tour'
            : `${selfguidedtours.length} Tours`}
        </Text>
        {selfguidedtours &&
          selfguidedtours.map(each => {
            return (
              <SelfGuidedItem
                key={each.id}
                selfGuidedItem={each}
                navigation={navigation}
              />
            );
          })}
      </AnimatedScrollView>

      <Animated.View
        style={{
          ...styles.dynamicHeader,
          opacity: headerAnimation.x,
          top: headerAnimation.y,
          height: paddingHeight || _headerHeight,
        }}>
        <VibrancyView blurType="dark" blurAmount={2} style={styles.header} />
      </Animated.View>

      <View style={sortDisplayOn ? styles.sortOn : styles.sortOff}>
        <View style={styles.topPart}></View>
        <View style={styles.bottomPart}>
          <View style={styles.sortHeader}>
            <TouchableOpacity
              onPress={() => {
                resetValues();
              }}>
              <Text style={styles.resetDoneSort}>Reset</Text>
            </TouchableOpacity>
            <Text style={styles.sortTitle}>Sort by</Text>
            <TouchableOpacity
              onPress={() => {
                toggleSortDisplay();
              }}>
              <Text style={styles.resetDoneSort}>Done</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.separator} />
          <View style={styles.radioContainer}>
            <Text style={styles.subTitle}>Activity Level:</Text>
            <TouchableOpacity
              onPress={() => {
                setSortType('easy');
              }}
              style={styles.flexRow}>
              <Image
                style={
                  sortType === 'easy' ? styles.buttonIcon : styles.buttonIconON
                }
                source={
                  sortType === 'easy'
                    ? require('../../assets/images/icRadioSelected.png')
                    : require('../../assets/images/icRadioDefault.png')
                }
              />
              <Text style={styles.singleSelection}>Easy to Difficult</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                setSortType('difficult');
              }}
              style={styles.flexRow}>
              <Image
                style={
                  sortType === 'difficult'
                    ? styles.buttonIcon
                    : styles.buttonIconON
                }
                source={
                  sortType === 'difficult'
                    ? require('../../assets/images/icRadioSelected.png')
                    : require('../../assets/images/icRadioDefault.png')
                }
              />
              <Text style={styles.singleSelection}>Difficult to Easy</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.radioContainer}>
            <Text style={styles.subTitle}>Duration:</Text>
            <TouchableOpacity
              onPress={() => {
                setSortType('short');
              }}
              style={styles.flexRow}>
              <Image
                style={
                  sortType === 'short' ? styles.buttonIcon : styles.buttonIconON
                }
                source={
                  sortType === 'short'
                    ? require('../../assets/images/icRadioSelected.png')
                    : require('../../assets/images/icRadioDefault.png')
                }
              />
              <Text style={styles.singleSelection}>Short to Long</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                setSortType('long');
              }}
              style={styles.flexRow}>
              <Image
                style={
                  sortType === 'long' ? styles.buttonIcon : styles.buttonIconON
                }
                source={
                  sortType === 'long'
                    ? require('../../assets/images/icRadioSelected.png')
                    : require('../../assets/images/icRadioDefault.png')
                }
              />
              <Text style={styles.singleSelection}>Long to Short</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.separatorTwo} />
          <View>
            <TouchableOpacity
              onPress={() => {
                toggleNear();
              }}
              style={styles.flexRow}>
              <Image
                style={near ? styles.buttonIcon : styles.buttonIconON}
                source={
                  near
                    ? require('../../assets/images/icCheckboxSelected.png')
                    : require('../../assets/images/icCheckboxDefault.png')
                }
              />
              <Text style={styles.singleSelection}>Near to you</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                toggleReviews();
              }}
              style={styles.flexRow}>
              <Image
                style={reviews ? styles.buttonIcon : styles.buttonIconON}
                source={
                  reviews
                    ? require('../../assets/images/icCheckboxSelected.png')
                    : require('../../assets/images/icCheckboxDefault.png')
                }
              />
              <Text style={styles.singleSelection}>Reviews</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                togglePet();
              }}
              style={styles.flexRow}>
              <Image
                style={pet ? styles.buttonIcon : styles.buttonIconON}
                source={
                  pet
                    ? require('../../assets/images/icCheckboxSelected.png')
                    : require('../../assets/images/icCheckboxDefault.png')
                }
              />
              <Text style={styles.singleSelection}>Pet Friendly</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </>
  );
};

export default SelfGuidedTour;

SelfGuidedTour.propTypes = {
  navigation: PropTypes.object.isRequired,
  collapsible: PropTypes.object,
  onSwitchTheme: PropTypes.func,
  headerHeight: PropTypes.number,
};
