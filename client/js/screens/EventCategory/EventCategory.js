import React from 'react';
import {Text} from 'react-native';
import PropTypes from 'prop-types';

const EventCategory = ({eventInfo}) => {
  console.log(eventInfo);
  return <Text>EventCategory</Text>;
};

export default EventCategory;

EventCategory.propTypes = {
  eventInfo: PropTypes.array,
};
