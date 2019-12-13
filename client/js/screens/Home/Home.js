import React, {Component} from 'react';
import {ScrollView as NavScrollView} from 'react-navigation';
import {
  Image,
  ImageBackground,
  Text,
  TouchableOpacity,
  ScrollView,
  Button,
  View,
} from 'react-native';
import CategoryList from '../../components/CategoryList';
import CityPicker from '../../components/CityPicker';
import CardEventSmall from '../../components/CardEventSmall';
import ButtonSeeAll from '../../components/ButtonSeeAll';
import {CATEGORY_LIST} from '../../lib/categoryList';
import {CITY_LIST} from '../../lib/cityList';
import {removeViewer} from '../../config/models';
import styles from './styles';
import PropTypes from 'prop-types';

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showPicker: false,
      citySelected: null,
    };
  }

  componentDidMount() {
    const {userInfo} = this.props;
    this.updateCityImage(userInfo);
  }

  componentDidUpdate() {
    const {userInfo} = this.props;
    this.updateCityImage(userInfo);
  }

  updateCityImage = userInfo => {
    if (!this.state.citySelected && userInfo) {
      this.setState({citySelected: userInfo.location});
    }
  };

  selectCity = newCity => {
    this.setState({citySelected: newCity});
  };

  hidePicker = () => {
    this.setState({showPicker: false});
  };

  render() {
    const {navigation, detectOffsetTop, eventInfo} = this.props;

    const cityImage = CITY_LIST.filter(
      city => city.name === this.state.citySelected,
    )[0];

    return (
      <>
        <NavScrollView>
          <ImageBackground
            source={cityImage && cityImage.image}
            style={styles.imgCity}>
            <View style={styles.overlay}>
              <View style={styles.wrapperMain}>
                <TouchableOpacity
                  style={styles.wrapperLocation}
                  onPress={() => {
                    this.setState({showPicker: true});
                  }}>
                  <Text style={styles.title}>{this.state.citySelected}</Text>
                  <Text style={styles.textChangeLocation}>
                    Change the location
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.searchBar}>
                  <Image
                    style={styles.icSearch}
                    source={require('../../assets/images/icSearch.png')}
                  />
                  <Text style={styles.placeholder}>Search</Text>
                </TouchableOpacity>
              </View>
            </View>
          </ImageBackground>

          <View style={styles.contents}>
            <TouchableOpacity
              style={styles.section}
              onPress={() => {
                navigation.navigate('SelfGuidedTour');
              }}>
              <ImageBackground
                style={styles.wrapperSelfGuidedTour}
                source={require('../../assets/images/imgHomeSelfguidedTours.jpg')}>
                <View
                  style={{...styles.overlay, ...styles.centerOverlayContents}}>
                  <Text style={styles.textSelfGuidedTour}>
                    Self Guided Tours
                  </Text>
                </View>
              </ImageBackground>
            </TouchableOpacity>
            <View style={styles.sectionCategory}>
              <Text
                style={{
                  ...styles.sectionTitle,
                  ...styles.sectionCategoryTitle,
                }}>
                Discover
              </Text>
              <ScrollView style={styles.categoryList} horizontal={true}>
                {CATEGORY_LIST.map((category, index, array) => (
                  <TouchableOpacity key={index}>
                    <CategoryList
                      image={category.image}
                      name={category.name}
                      firstChild={index === 0}
                      lastChild={index + 1 === array.length}
                    />
                  </TouchableOpacity>
                ))}
              </ScrollView>
            </View>
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>This week</Text>

              {eventInfo &&
              eventInfo.thisWeek &&
              eventInfo.thisWeek.length > 0 ? (
                <>
                  <View style={styles.wrapperCol2}>
                    {eventInfo.thisWeek.map((weeklyEvent, index) => {
                      return (
                        <CardEventSmall
                          key={weeklyEvent.id}
                          index={index}
                          eventInfo={weeklyEvent}
                        />
                      );
                    })}
                  </View>
                  <ButtonSeeAll title="See all" />
                </>
              ) : (
                <Text style={styles.noData}>
                  - There is no event in this week
                </Text>
              )}
            </View>
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Popular now</Text>

              {eventInfo &&
              eventInfo.popular &&
              eventInfo.popular.length > 0 ? (
                <>
                  <View style={styles.wrapperCol2}>
                    {eventInfo.popular.map((popularEvent, index) => {
                      return (
                        <CardEventSmall
                          key={popularEvent.id}
                          index={index}
                          eventInfo={popularEvent}
                        />
                      );
                    })}
                  </View>
                  <ButtonSeeAll title="See all" />
                </>
              ) : (
                <Text style={styles.noData}>- There is no event</Text>
              )}
            </View>
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Recently viewed</Text>
            </View>
            <Button
              onPress={async e => {
                try {
                  await removeViewer();
                  await navigation.navigate('AuthLoading');
                } catch (error) {
                  console.log(error);
                }
              }}
              title="Log out"
            />
          </View>
        </NavScrollView>
        {this.state.showPicker && (
          <CityPicker
            hidePicker={this.hidePicker}
            selectCity={this.selectCity}
            citySelected={this.state.citySelected}
          />
        )}
      </>
    );
  }
}

export default Home;

Home.propTypes = {
  navigation: PropTypes.object.isRequired,
  userInfo: PropTypes.object,
  eventInfo: PropTypes.object,
};
