import React, {useState} from 'react';
import {Text, Animated, StatusBar, FlatList, View} from 'react-native';
import {VibrancyView} from '@react-native-community/blur';
import CardEvent from '../../components/CardEvent';
import SortActionSheet from '../../components/SortActionSheet';
import ButtonFilter from '../../components/ButtonFilter';
import styles from './styles';
import {THEME} from '../../config';
import PropTypes from 'prop-types';

const AnimatedFlatList = Animated.createAnimatedComponent(FlatList);

const EventCategory = ({
  eventInfo,
  collapsible,
  navigation,
  onSwitchTheme,
  headerHeight,
}) => {
  const _headerHeight = collapsible.paddingHeight
    ? collapsible.paddingHeight
    : headerHeight;
  const [isAnimated, setAnimated] = useState(false);
  const [headerAnimation, setHeaderAnimation] = useState(
    new Animated.ValueXY({x: 0, y: -_headerHeight}),
  );
  const [showActionSheet, toggleActionSheet] = useState(false);
  const [sortOption, setSortOption] = useState(null);
  const [isRating, setRating] = useState(false);
  const [isDifficulty, setDifficulty] = useState([
    'EASY',
    'MODERATE',
    'DIFFICULT',
  ]);
  let newEventInfo;

  const {paddingHeight, animatedY} = collapsible;

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

  if (sortOption === 'lowToHigh') {
    eventInfo.sort((a, b) => a.price - b.price);
  }
  if (sortOption === 'highToLow') {
    eventInfo.sort((a, b) => b.price - a.price);
  }
  if (sortOption === 'soonestToLatest') {
    eventInfo.sort((a, b) => {
      const dateA = new Date(a.date);
      const dateB = new Date(b.date);
      return dateA - dateB;
    });
  }
  if (sortOption === 'latestToSoonest') {
    eventInfo.sort((a, b) => {
      const dateA = new Date(a.date);
      const dateB = new Date(b.date);
      return dateB - dateA;
    });
  }
  if (isRating) {
    newEventInfo = eventInfo.filter(data => data.reviews.length > 0);
  }
  if (isDifficulty.length < 3) {
    newEventInfo = eventInfo.filter(data =>
      isDifficulty.some(option => option === data.difficulty),
    );
  }

  return (
    <>
      {!paddingHeight && <View style={{height: _headerHeight}} />}

      <AnimatedFlatList
        scrollEventThrottle={32}
        onScroll={Animated.event([{nativeEvent: {contentOffset: {y: 0}}}], {
          useNativeDriver: true,
          listener: onScroll,
        })}
        _mustAddThis={animatedY}
        contentContainerStyle={{paddingTop: paddingHeight}}
        scrollIndicatorInsets={{
          top: paddingHeight / 2,
          bottom: THEME.spacing.default(0.5),
        }}
        ListHeaderComponent={() => (
          <View>
            <View style={styles.filterWrapper}>
              <ButtonFilter title="Sort" onPress={toggleActionSheet} />
              <ButtonFilter title="Date" />
            </View>

            <Text style={styles.eventsNumber}>
              {newEventInfo ? newEventInfo.length : eventInfo.length} Results
            </Text>
          </View>
        )}
        data={newEventInfo ? newEventInfo : eventInfo}
        renderItem={({item}) => {
          return <CardEvent data={item} navigation={navigation} />;
        }}
        style={styles.container}
      />

      <Animated.View
        style={{
          ...styles.dynamicHeader,
          opacity: headerAnimation.x,
          top: headerAnimation.y,
          height: paddingHeight || _headerHeight,
        }}>
        <StatusBar barStyle={isAnimated ? 'light-content' : 'dark-content'} />
        <VibrancyView blurType="dark" blurAmount={2} style={styles.header} />
      </Animated.View>

      {showActionSheet && (
        <SortActionSheet
          toggleActionSheet={toggleActionSheet}
          sortOption={sortOption}
          setSortOption={setSortOption}
          isRating={isRating}
          setRating={setRating}
          isDifficulty={isDifficulty}
          setDifficulty={setDifficulty}
        />
      )}
    </>
  );
};

export default EventCategory;

EventCategory.propTypes = {
  eventInfo: PropTypes.array,
  collapsible: PropTypes.object,
  navigation: PropTypes.object.isRequired,
  onSwitchTheme: PropTypes.func,
  headerHeight: PropTypes.number,
};
