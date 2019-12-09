import React, {Component} from 'react';
import About from './About';
import Loader from '../../components/Loader';
//import query from apollo/queries.js

class AboutContainer extends Component {
  static navigationOptions = {
    title: 'About',
    render() {
      return (
        <Query query={QUERY_INFO}>
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
    },
  };
}

export default AboutContainer;
