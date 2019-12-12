import React, {Component} from 'react';
import {Query} from 'react-apollo';
import gql from 'graphql-tag';
import {StatusBar, Text, View, LayoutAnimation} from 'react-native';
import {VibrancyView} from '@react-native-community/blur';

import Home from './Home';
import PropTypes from 'prop-types';

const QUERY = gql`
  query getUser($id: ID!) {
    user(where: {id: $id}) {
      id
      email
      firstName
      lastName
      location
      image
      date
    }
  }
`;

class HomeContainer extends Component {
  static navigationOptions = ({navigation}) => {
    let offsetTop = navigation.getParam('offsetTop');

    return {
      headerTransparent: true,
      headerBackground: () =>
        offsetTop > 0 && (
          <View>
            <StatusBar barStyle="light-content" />
            <VibrancyView
              blurType="dark"
              blurAmount={2}
              style={{width: '100%', height: '100%'}}
            />
          </View>
        ),
    };
  };

  detectOffsetTop = offsetTop => {
    if (offsetTop < 0 && offsetTop < 16) {
      LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    }
    this.props.navigation.setParams({offsetTop});
  };

  getParamFromParent = (navigation, paramName) => {
    const {getParam, dangerouslyGetParent} = navigation;
    let parent = dangerouslyGetParent();
    let val = getParam(paramName);
    while (val === undefined && parent && parent.getParam) {
      val = parent.getParam(paramName);
      parent = parent.dangerouslyGetParent();
    }
    return val;
  };

  render() {
    const {navigation} = this.props;
    const userToken = this.getParamFromParent(navigation, 'userToken');

    return (
      <Query query={QUERY} variables={{id: userToken.id}}>
        {({loading, error, data}) => {
          if (loading) {
            return <Text>loading</Text>;
          }
          if (error) {
            return <Text>error</Text>;
          }
          if (data) {
            return (
              <Home
                navigation={navigation}
                detectOffsetTop={this.detectOffsetTop}
                data={data.user}
              />
            );
          }
        }}
      </Query>
    );
  }
}

export default HomeContainer;

HomeContainer.propTypes = {
  navigation: PropTypes.object.isRequired,
};
