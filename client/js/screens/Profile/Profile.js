import React, {useState} from 'react';
import {ScrollView} from 'react-navigation';
import {Text, Animated, View, Image} from 'react-native';
import TitleText from '../../components/TitleText';
import TitleForm from '../../components/TitleForm';
import ProfileMenu from '../../components/ProfileMenu';
import ButtonDefault from '../../components/ButtonDefault';
import {VibrancyView} from '@react-native-community/blur';
import {removeViewer} from '../../config/models';
import styles from './styles';
import {THEME} from '../../config';
import PropTypes from 'prop-types';

const AnimatedScrollView = Animated.createAnimatedComponent(ScrollView);

const Profile = ({
  collapsible,
  onSwitchTheme,
  headerHeight,
  navigation,
  userInfo,
}) => {
  const _headerHeight = collapsible.paddingHeight
    ? collapsible.paddingHeight
    : headerHeight;
  const [isAnimated, setAnimated] = useState(false);
  const [headerAnimation, setHeaderAnimation] = useState(
    new Animated.ValueXY({x: 0, y: -_headerHeight}),
  );
  const {paddingHeight, animatedY} = collapsible;

  const {email, firstName, lastName, location, date, image} = userInfo;

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
        }}
        style={styles.container}>
        {image ? (
          <Image
            source={{uri: image}}
            style={styles.imageProfile}
            resizeMode="cover"
          />
        ) : (
          <View style={{...styles.imageProfile, ...styles.noImage}}>
            <Text style={styles.initial}>
              {firstName.slice(0, 1).toUpperCase()}
              {lastName.slice(0, 1).toUpperCase()}
            </Text>
          </View>
        )}

        <TitleText style={styles.name}>{`${firstName} ${lastName}`}</TitleText>
        <Text style={styles.email}>{email}</Text>

        <View style={styles.flexRow}>
          <View style={styles.flexChildren}>
            <Image source={require('../../assets/images/icPrizeDefault.png')} />
          </View>

          <View style={{...styles.flexChildren, ...styles.flexMiddle}}>
            <Text style={styles.label}>Since</Text>
            <Text style={styles.content}>{date.slice(0, 4)}</Text>
          </View>

          <View style={styles.flexChildren}>
            <Text style={styles.label}>Events</Text>
            <Text style={styles.content}>0</Text>
          </View>
        </View>

        <TitleForm style={styles.sectionHeader}>Settings</TitleForm>
        <View style={styles.section}>
          <ProfileMenu title="Change Location" />
          <ProfileMenu title="Payment / Billing Information" />
          <ProfileMenu title="Notifications" />
        </View>

        <TitleForm style={styles.sectionHeader}>About</TitleForm>
        <View style={styles.section}>
          <ProfileMenu title="Privacy" />
          <ProfileMenu title="Terms of service" />
        </View>

        <TitleForm style={styles.sectionHeader}>Become a host</TitleForm>
        <View style={{...styles.section, ...styles.lastSection}}>
          <ProfileMenu title="Learn how to host an event" />
        </View>

        <ButtonDefault
          isActive={true}
          onPress={async e => {
            try {
              await removeViewer();
              await navigation.navigate('AuthLoading');
            } catch (error) {
              console.log(error);
            }
          }}
          title="Log Out"
        />
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
    </>
  );
};

export default Profile;

Profile.propTypes = {
  collapsible: PropTypes.object,
  onSwitchTheme: PropTypes.func,
  headerHeight: PropTypes.number,
  navigation: PropTypes.object,
  userInfo: PropTypes.object,
};
