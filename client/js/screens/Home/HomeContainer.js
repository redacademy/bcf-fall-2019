import React, {Component} from 'react';
import {Query} from 'react-apollo';
import gql from 'graphql-tag';
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

class HomeContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      offsetTop: 0,
      userID: null,
    };
  }

  static navigationOptions = ({navigation}) => {
    return {
      headerTransparent: true,
    };
  };

  async componentDidMount() {
    const userID = await this.getUserID();
    this.setState({userID});
  }

  detectOffsetTop = offsetTop => {
    // console.log(offsetTop);
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
          <Query query={QUERY} variables={{id: this.state.userID}}>
            {({loading, error, data}) => {
              return (
                <Home
                  navigation={navigation}
                  detectOffsetTop={this.detectOffsetTop}
                  data={data.user}
                />
              );
            }}
          </Query>
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
