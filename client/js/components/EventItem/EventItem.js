import React from 'react';
import {TouchableOpacity, ImageBackground, Text, Image} from 'react-native';

const EventItem = () => {
  return (
    <TouchableOpacity
      style={
        index % 2 === 0
          ? {flex: 1, marginBottom: 24, marginRight: 16}
          : {flex: 1, marginBottom: 24}
      }>
      <ImageBackground
        source={{uri: item.image}}
        style={{
          height: 120,
          borderRadius: 4,
          overflow: 'hidden',
        }}>
        <TouchableOpacity
          style={{
            width: '100%',
            height: '100%',
          }}>
          <Image
            style={{
              position: 'absolute',
              bottom: 8,
              right: 8,
              width: 20,
              height: 20,
            }}
            source={require('../../assets/images/icFaveCircleDefault.png')}
          />
        </TouchableOpacity>
      </ImageBackground>
      <Text>{item.category}</Text>
      <Text>{item.title}</Text>
      <Text>{item.price}</Text>
    </TouchableOpacity>
  );
};

export default EventItem;
