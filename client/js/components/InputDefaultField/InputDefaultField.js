import React from 'react';
import {View, Text, TextInput} from 'react-native';

const InputDefaultField = props => {
  console.log(props);
  return (
    <View>
      <Text>{props.title}</Text>
      <TextInput
        autoCompleteType={props.autoCompleteType}
        placeholder={props.placeholder}
      />
    </View>
  );
};

export default InputDefaultField;
