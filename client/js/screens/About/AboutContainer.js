import React, {Component} from 'react';
import About from './About';
import Loader from '../../components/Loader';
import {Query} from 'react-apollo';
import {QUERY_INFO} from '../../apollo/queries';
import {Text} from 'react-native';

class AboutContainer extends Component {
  render() {
    return (
      <Query query={QUERY_INFO}>
        {({loading, error, data}) => {
          if (loading) return <Loader />;
          if (error) return <Text>{error.message}</Text>;
          if (data) return <About info={data.infoes[0]} />;
        }}
      </Query>
    );
  }
}

export default AboutContainer;
