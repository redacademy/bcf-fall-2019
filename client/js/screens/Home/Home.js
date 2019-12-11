import React from 'react';
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
import {CATEGORY_LIST} from '../../lib/categoryList';
import {removeViewer} from '../../config/models';
import styles from './styles';
import PropTypes from 'prop-types';

const Home = ({navigation, detectOffsetTop, data}) => {
  return (
    <NavScrollView
      scrollEventThrottle={16}
      onScroll={event => {
        detectOffsetTop(event.nativeEvent.contentOffset.y);
      }}>
      <ImageBackground
        source={require('../../assets/images/cities/imgCityVancouver.jpg')}
        style={styles.imgCity}>
        <View style={styles.overlay}>
          <View style={styles.wrapperMain}>
            <TouchableOpacity style={styles.wrapperLocation}>
              <Text style={styles.title}>{data && data.location}</Text>
              <Text style={styles.textChangeLocation}>Change the location</Text>
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
            <View style={{...styles.overlay, ...styles.centerOverlayContents}}>
              <Text style={styles.textSelfGuidedTour}>Self Guided Tours</Text>
            </View>
          </ImageBackground>
        </TouchableOpacity>

        <View style={styles.sectionCategory}>
          <Text
            style={{...styles.sectionTitle, ...styles.sectionCategoryTitle}}>
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
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Popular now</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Recently viewed</Text>
        </View>
      </View>
    </NavScrollView>
  );
};

export default Home;

Home.propTypes = {
  navigation: PropTypes.object.isRequired,
  detectOffsetTop: PropTypes.func.isRequired,
  data: PropTypes.object,
};

{
  /* <Button
  onPress={async e => {
    try {
      await removeViewer();
      await navigation.navigate('AuthLoading');
    } catch (error) {
      console.log(error);
    }
  }}
  title="Log out"
/>; */
}
