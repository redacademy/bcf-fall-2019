import React, {Component} from 'react';
import {Query} from 'react-apollo';
import gql from 'graphql-tag';
import {
  StatusBar,
  Text,
  View,
  LayoutAnimation,
  Platform,
  UIManager,
} from 'react-native';
import {VibrancyView} from '@react-native-community/blur';

import Home from './Home';
import {getViewer} from '../../config/models';
import PropTypes from 'prop-types';

const QUERY = gql`
  query user($id: ID!) {
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

if (Platform.OS === 'android') {
  if (UIManager.setLayoutAnimationEnabledExperimental) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }
}

class HomeContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userID: null,
    };
  }

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

  async componentDidMount() {
    const userID = await this.getUserID();
    this.setState({userID});
  }

  detectOffsetTop = offsetTop => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    this.props.navigation.setParams({offsetTop});
  };

  getUserID = async () => {
    try {
      const userID = JSON.parse(await getViewer());
      return userID.id;
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    const {navigation} = this.props;

    return (
      <>
        {this.state.userID ? (
          <>
            <Query query={QUERY} variables={{id: this.state.userID}}>
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
          </>
        ) : (
          <Home
            navigation={navigation}
            detectOffsetTop={this.detectOffsetTop}
          />
        )}
      </>
    );
  }
}

export default HomeContainer;

HomeContainer.propTypes = {
  navigation: PropTypes.object.isRequired,
};
