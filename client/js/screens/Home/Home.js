import React, {Component} from 'react';
import {Query} from 'react-apollo';
import gql from 'graphql-tag';
import {ScrollView as NavScrollView} from 'react-navigation';
import {
  Image,
  ImageBackground,
  Text,
  TouchableOpacity,
  ScrollView,
  FlatList,
  Button,
  View,
} from 'react-native';
import CategoryList from '../../components/CategoryList';
import CityPicker from '../../components/CityPicker';
import {CATEGORY_LIST} from '../../lib/categoryList';
import {CITY_LIST} from '../../lib/cityList';
import {removeViewer} from '../../config/models';
import styles from './styles';
import PropTypes from 'prop-types';

const QUERY = gql`
  query getAllEvents($startFilterDate: DateTime, $endFilterDate: DateTime) {
    events(
      where: {AND: [{date_gte: $startFilterDate}, {date_lt: $endFilterDate}]}
      orderBy: date_DESC
    ) {
      id
      title
      date
      startAt
      endAt
      category
      price
      locationTitle
      address
      image
      difficulty
      language
      details
      host {
        id
        email
        name
        image
        bio
      }
      reviews {
        id
        user {
          id
          email
          firstName
          lastName
          image
        }
        score
        comment
        date
      }
    }
  }
`;

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showPicker: false,
      citySelected: null,
    };
  }

  componentDidMount() {
    const {data} = this.props;
    if (data) {
      this.setState({citySelected: data.location});
    }
  }

  selectCity = newCity => {
    this.setState({citySelected: newCity});
  };
  hidePicker = () => {
    this.setState({showPicker: false});
  };

  render() {
    const {navigation, detectOffsetTop, data} = this.props;
    const cityImage = CITY_LIST.filter(
      city => city.name === this.state.citySelected,
    )[0];

    const date = new Date();
    const dateAfterWeek = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000);

    return (
      <>
        <NavScrollView
          scrollEventThrottle={16}
          onScroll={event => {
            detectOffsetTop(event.nativeEvent.contentOffset.y);
          }}>
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
            <TouchableOpacity style={styles.section}>
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

              <Query
                query={QUERY}
                variables={{
                  startFilterDate: date,
                  endFilterDate: dateAfterWeek,
                }}>
                {({loading, error, data}) => {
                  if (loading) return <Text>Loading</Text>;
                  if (error) return <Text>Error</Text>;
                  if (data) {
                    console.log(data);
                    return <View></View>;
                  }
                }}
              </Query>
            </View>
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Popular now</Text>
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
  detectOffsetTop: PropTypes.func.isRequired,
  data: PropTypes.object,
};
