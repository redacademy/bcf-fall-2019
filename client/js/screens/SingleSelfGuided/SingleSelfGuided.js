import React, {useState} from 'react';
import ApolloClient from 'apollo-boost';
import {Mutation} from 'react-apollo';
import {MUTATION_LOG_IN} from '../../apollo/mutations';

import {Text, TouchableOpacity, Image} from 'react-native';
import {THEME} from '../../config';
import styles from './styles';
import PropTypes from 'prop-types';

const SingleSelfGuided = ({navigation, tour}) => {
  const [isErrors, setErrors] = useState(null);

  return (
    <>
      <Image
        source={{uri: tour.image}}
        style={{
          width: '100%',
          height: '30%',
        }}
      />
      <Text>ID: {tour.id}</Text>
      <Text>Title: {tour.title}</Text>
      <Text>Location: {tour.location}</Text>
      <Text>Duration: {tour.duration}</Text>
      <Text>Level: {tour.difficulty}</Text>
      <Text>Distance: {tour.distance}</Text>
      <Text>Distance: {tour.description}</Text>
      <Text>Pet: {`${tour.petFriendly}`}</Text>
    </>
  );
};

export default SingleSelfGuided;
