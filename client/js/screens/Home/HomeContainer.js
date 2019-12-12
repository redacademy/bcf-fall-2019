import React, {Component} from 'react';
import {compose} from 'recompose';
import {graphql, Query} from 'react-apollo';
import {QUERY_USER, QUERY_EVENT_THIS_WEEK} from '../../apollo/queries';
import {StatusBar, Text, View, LayoutAnimation} from 'react-native';
import {VibrancyView} from '@react-native-community/blur';
import Home from './Home';
import {getParamFromParent} from '../../lib/paramFromParent';
import PropTypes from 'prop-types';

class HomeContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      offsetTop: 0,
    };
  }

  static navigationOptions = props => {
    // let offsetTop = navigation.getParam('offsetTop');
    console.log(this.state);
    return {
      headerTransparent: true,
      // headerBackground: () =>
      //   this.state.offsetTop > 0 && (
      //     <View>
      //       <StatusBar barStyle="light-content" />
      //       <VibrancyView
      //         blurType="dark"
      //         blurAmount={2}
      //         style={{width: '100%', height: '100%'}}
      //       />
      //     </View>
      // ),
    };
  };

  detectOffsetTop = offsetTop => {
    if (offsetTop < 0 && offsetTop < 16) {
      LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    }
    // this.props.navigation.setParams({offsetTop});
    this.setState({offsetTop});
  };

  render() {
    const {navigation, userInfo, eventThisWeek} = this.props;

    return (
      <Home
        navigation={navigation}
        detectOffsetTop={this.detectOffsetTop}
        userInfo={userInfo.user}
        eventsInfo={{
          thisWeek: eventThisWeek.events,
        }}
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
        fetchPolicy: 'cache-and-network',
        variables: {
          id: userToken.id,
        },
      };
    },
  }),
  graphql(QUERY_EVENT_THIS_WEEK, {
    name: 'eventThisWeek',
    options: props => {
      const date = new Date();
      const dateAfterWeek = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000);

      return {
        fetchPolicy: 'cache-and-network',
        variables: {
          startFilterDate: date,
          endFilterDate: dateAfterWeek,
        },
      };
    },
  }),
)(HomeContainer);

HomeContainer.propTypes = {
  navigation: PropTypes.object.isRequired,
};
