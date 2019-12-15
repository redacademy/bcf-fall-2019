import React, {useState} from 'react';
import {Text, Animated, StatusBar, FlatList, View} from 'react-native';
import {VibrancyView} from '@react-native-community/blur';
import CardEvent from '../../components/CardEvent';
import styles from './styles';
import PropTypes from 'prop-types';
import {THEME} from '../../config';

const AnimatedFlatList = Animated.createAnimatedComponent(FlatList);

const EventCategory = ({eventInfo, collapsible, navigation, onSwitchTheme}) => {
  const [isAnimated, setAnimated] = useState(false);
  const [headerAnimation, setHeaderAnimation] = useState(
    new Animated.ValueXY({x: 0, y: -88}),
  );

  const {paddingHeight, animatedY} = collapsible;

  const onScroll = e => {
    const offset = e.nativeEvent.contentOffset;
    if (offset.y > 88 && !isAnimated) {
      setAnimated(true);
      animateHeader();
      onSwitchTheme(isAnimated);
    } else if (offset.y <= 88 && isAnimated) {
      setAnimated(false);
      animateHeader();
      onSwitchTheme(isAnimated);
    }
  };

  const animateHeader = () => {
    Animated.timing(headerAnimation, {
      duration: 500,
      toValue: isAnimated ? {x: 0, y: -88} : {x: 1, y: 0},
    }).start();
  };

  return (
    <>
      {!paddingHeight && <View style={{height: 88}} />}

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
            <Text style={styles.eventsNumber}>{eventInfo.length} Results</Text>
          </View>
        )}
        data={eventInfo}
        renderItem={({item}) => {
          return <CardEvent data={item} />;
        }}
        style={styles.container}
      />

      <Animated.View
        style={{
          ...styles.dynamicHeader,
          opacity: headerAnimation.x,
          top: headerAnimation.y,
          height: paddingHeight || 88,
        }}>
        <StatusBar barStyle={isAnimated ? 'light-content' : 'dark-content'} />
        <VibrancyView blurType="dark" blurAmount={2} style={styles.header} />
      </Animated.View>
    </>
  );
};

export default EventCategory;

EventCategory.propTypes = {
  eventInfo: PropTypes.array,
  collapsible: PropTypes.object,
  navigation: PropTypes.object.isRequired,
  onSwitchTheme: PropTypes.func,
};
