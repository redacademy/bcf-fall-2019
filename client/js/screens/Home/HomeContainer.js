import React, {Component} from 'react';
import {compose} from 'recompose';
import {graphql} from 'react-apollo';
import {QUERY_USER} from '../../apollo/queries';
import {StatusBar, Text, View, LayoutAnimation} from 'react-native';
import {VibrancyView} from '@react-native-community/blur';
import Home from './Home';
import {getParamFromParent} from '../../lib/paramFromParent';
import PropTypes from 'prop-types';

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

  render() {
    const {navigation, userInfo} = this.props;
    // console.log(userInfo);
    return (
      <Home
        navigation={navigation}
        detectOffsetTop={this.detectOffsetTop}
        userInfo={!userInfo.loading ? userInfo.user : null}
      />
    );
  }
}

export default compose(
  graphql(QUERY_USER, {
    name: 'userInfo',
    options: ({navigation}) => {
      const userToken = getParamFromParent(navigation, 'userToken');
      return {
        variables: {
          id: userToken.id,
        },
      };
    },
  }),
)(HomeContainer);

HomeContainer.propTypes = {
  navigation: PropTypes.object.isRequired,
};
