import React, {Component} from 'react';
import About from './About';
import Loader from '../../components/Loader';
import {Query} from 'react-apollo';
import {QUERY_INFOES} from '../../apollo/queries';

class AboutContainer extends Component {
  render() {
    return (
      <Query query={QUERY_INFOES}>
        {({loading, error, data}) => {
          if (loading) {
            return <Loader />;
          }

          if (error) {
            return <Text>{error.message}</Text>;
          }

          if (data) {
            return <About />;
          }
        }}
      </Query>
    );
  }
}

export default AboutContainer;
