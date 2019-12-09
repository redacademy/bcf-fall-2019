import React, {Component} from 'react';
import About from './About';
// import {prisma} from './generated/prisma-client';

class AboutContainer extends Component {
  render() {
    return (
      <Query query={QUERY_}>
        {({loading, error, data}) => {
          if (loading) {
            return <Loader />;
          }

          if (error) {
            return <Text>{error.message}</Text>;
          }

          if (data) {
            return <About data={data} />;
          }
        }}
      </Query>
    );
  }
}

export default AboutContainer;
