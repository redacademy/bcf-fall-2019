import React, {useState} from 'react';
import {Text, Animated, View, ScrollView, Image} from 'react-native';
import {VibrancyView} from '@react-native-community/blur';
import CheckBox from 'react-native-check-box';
import ButtonDefault from '../../components/ButtonDefault';
import CardEvent from '../../components/CardEvent';
import TitleForm from '../../components/TitleForm';
import InputDefaultField from '../../components/InputDefaultField';
import {addEventBooked} from '../../config/models';
import styles from './styles';
import {THEME} from '../../config';
import PropTypes from 'prop-types';

const AnimatedScrollView = Animated.createAnimatedComponent(ScrollView);

const EventBooking = ({
  collapsible,
  navigation,
  onSwitchTheme,
  headerHeight,
  eventInfo,
}) => {
  const {paddingHeight, animatedY} = collapsible;

  const _headerHeight = collapsible.paddingHeight
    ? collapsible.paddingHeight
    : headerHeight;

  const [isAnimated, setAnimated] = useState(false);

  const [headerAnimation, setHeaderAnimation] = useState(
    new Animated.ValueXY({x: 0, y: -_headerHeight}),
  );

  const [numTickets, setNumTickets] = useState(1);

  const [isAccInfo, setAccInfo] = useState(true);

  const [isPayMethod, setPayMethod] = useState(null);

  const [isBillingAddress, setBillingAddress] = useState(null);

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
        <CardEvent data={eventInfo} />

        <InputDefaultField
          title="Number of tickets"
          titleStyle="regular"
          placeholder="1"
          keyboardType="number-pad"
          style={{...styles.firstInput, ...styles.input}}
          textAlign="right"
          onChange={({nativeEvent: {eventCount, target, text}}) => {
            setNumTickets(parseInt(text));
          }}
        />

        <Text style={{...styles.title, ...styles.titleRegular}}>
          Total Price{' '}
          <Text style={{...THEME.typography.size.caption}}>
            (Auto-calculated)
          </Text>
        </Text>

        <View
          style={{
            ...styles.inputDefault,
            ...styles.lastInput,
            ...styles.flexRow,
          }}>
          <Text
            style={{
              ...styles.title,
              ...styles.titleRegular,
              ...styles.currencyText,
            }}>
            CAD
          </Text>
          <Text
            style={{
              ...styles.title,
              ...styles.titleRegular,
              ...styles.priceText,
            }}>
            $
            {numTickets
              ? (eventInfo.price * numTickets)
                  .toFixed(2)
                  .toString()
                  .replace(/\B(?=(\d{3})+(?!\d))/g, ',')
              : `0.00`}
          </Text>
        </View>

        <TitleForm>Contact Information</TitleForm>

        <CheckBox
          rightText="Use account information"
          unCheckedImage={
            <Image
              source={require('../../assets/images/icCheckboxDefault.png')}
            />
          }
          checkedImage={
            <Image
              source={require('../../assets/images/icCheckboxSelected.png')}
            />
          }
          onClick={() => {
            setAccInfo(!isAccInfo);
          }}
          isChecked={isAccInfo}
          rightTextStyle={styles.textCheckbox}
          style={styles.checkBox}
        />

        <InputDefaultField
          title="First Name"
          titleStyle="regular"
          placeholder="_"
          style={styles.input}
        />
        <InputDefaultField
          title="Last Name"
          titleStyle="regular"
          placeholder="_"
          style={styles.input}
        />
        <InputDefaultField
          title="Address"
          titleStyle="regular"
          placeholder="_"
          style={styles.input}
        />
        <View style={styles.flexRow}>
          <InputDefaultField
            title="City"
            titleStyle="regular"
            placeholder="_"
            style={{
              ...styles.input,
              ...styles.columnItem,
              ...styles.firstColumnItem,
            }}
          />
          <InputDefaultField
            title="Province"
            titleStyle="regular"
            placeholder="_"
            style={{...styles.input, ...styles.columnItem}}
          />
        </View>
        <View style={styles.flexRow}>
          <InputDefaultField
            title="Postal Code"
            titleStyle="regular"
            placeholder="_"
            style={{
              ...styles.input,
              ...styles.columnItem,
              ...styles.firstColumnItem,
            }}
          />
          <InputDefaultField
            title="Country"
            titleStyle="regular"
            placeholder="_"
            style={{...styles.input, ...styles.columnItem}}
          />
        </View>
        <InputDefaultField
          title="Phone number"
          titleStyle="regular"
          placeholder="_"
          style={styles.input}
        />
        <InputDefaultField
          title="Email"
          titleStyle="regular"
          placeholder="_"
          style={{...styles.input, ...styles.lastInput}}
        />

        <TitleForm>Donation Method</TitleForm>

        <View style={styles.flexRow}>
          <View style={styles.columnItem}>
            <CheckBox
              rightText="Credit card"
              unCheckedImage={
                <Image
                  source={require('../../assets/images/icRadioDefault.png')}
                />
              }
              checkedImage={
                <Image
                  source={require('../../assets/images/icRadioSelected.png')}
                />
              }
              onClick={() => {
                setPayMethod('Credit card');
              }}
              isChecked={isPayMethod === 'Credit card'}
              rightTextStyle={styles.textCheckbox}
              style={styles.checkBox}
            />
          </View>

          <View style={styles.columnItem}>
            <CheckBox
              rightText="Pay Pal"
              unCheckedImage={
                <Image
                  source={require('../../assets/images/icRadioDefault.png')}
                />
              }
              checkedImage={
                <Image
                  source={require('../../assets/images/icRadioSelected.png')}
                />
              }
              onClick={() => {
                setPayMethod('Pay Pal');
              }}
              isChecked={isPayMethod === 'Pay Pal'}
              rightTextStyle={styles.textCheckbox}
              style={styles.checkBox}
            />
          </View>
        </View>

        <InputDefaultField
          title="Cardholder Name"
          titleStyle="regular"
          placeholder="Fullname"
          style={{...styles.input, ...styles.lastInput}}
        />

        <InputDefaultField
          title="Card Number"
          titleStyle="regular"
          placeholder="xxxx - xxxx - xxxx - xxxx"
          style={{...styles.input, ...styles.lastInput}}
        />

        <View style={{...styles.flexRow, ...styles.lastInput}}>
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

        <TitleForm>Billing Address</TitleForm>

        <CheckBox
          rightText="Same as contact information"
          unCheckedImage={
            <Image source={require('../../assets/images/icRadioDefault.png')} />
          }
          checkedImage={
            <Image
              source={require('../../assets/images/icRadioSelected.png')}
            />
          }
          onClick={() => {
            setBillingAddress('same');
          }}
          isChecked={isBillingAddress === 'same'}
          rightTextStyle={styles.textCheckbox}
          style={styles.checkBox}
        />

        <CheckBox
          rightText="Use a different billing address"
          unCheckedImage={
            <Image source={require('../../assets/images/icRadioDefault.png')} />
          }
          checkedImage={
            <Image
              source={require('../../assets/images/icRadioSelected.png')}
            />
          }
          onClick={() => {
            setBillingAddress('different');
          }}
          isChecked={isBillingAddress === 'different'}
          rightTextStyle={styles.textCheckbox}
          style={{...styles.checkBox, ...styles.lastInput}}
        />

        <ButtonDefault
          isActive={true}
          onPress={async () => {
            try {
              await addEventBooked(eventInfo, numTickets);
              await navigation.navigate('ThankYou');
            } catch (error) {
              console.log(error);
            }
          }}
          title="Pay Now"
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

export default EventBooking;

EventBooking.propTypes = {
  collapsible: PropTypes.object,
  navigation: PropTypes.object.isRequired,
  onSwitchTheme: PropTypes.func,
  headerHeight: PropTypes.number,
  eventInfo: PropTypes.object,
};
