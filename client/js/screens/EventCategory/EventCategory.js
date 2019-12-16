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
  const [isAnimated, setAnimated] = useState(false);
  const [headerAnimation, setHeaderAnimation] = useState(
    new Animated.ValueXY({x: 0, y: -headerHeight}),
  );
  const [showActionSheet, toggleActionSheet] = useState(false);
  const [sortOption, setSortOption] = useState(null);
  const [isRating, setRating] = useState(false);
  const [isPetFriendly, setPetFriendly] = useState(false);

  const {paddingHeight, animatedY} = collapsible;

  const onScroll = e => {
    const offset = e.nativeEvent.contentOffset;
    if (offset.y > headerHeight && !isAnimated) {
      setAnimated(true);
      animateHeader();
      onSwitchTheme(isAnimated);
    } else if (offset.y <= headerHeight && isAnimated) {
      setAnimated(false);
      animateHeader();
      onSwitchTheme(isAnimated);
    }
  };

  const animateHeader = () => {
    Animated.timing(headerAnimation, {
      duration: 500,
      toValue: isAnimated ? {x: 0, y: -headerHeight} : {x: 1, y: 0},
    }).start();
  };
  return (
    <>
      {!paddingHeight && <View style={{height: headerHeight}} />}

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

            <Text style={styles.eventsNumber}>{eventInfo.length} Results</Text>
          </View>
        )}
        data={eventInfo}
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
          height: paddingHeight || headerHeight,
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
          isPetFriendly={isPetFriendly}
          setPetFriendly={setPetFriendly}
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
