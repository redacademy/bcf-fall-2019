import React from 'react';
import {Text, View, ScrollView} from 'react-native';
import FaqForum from '../../components/FaqForum/FaqForum';

const Faq = ({faqs}) => {
  return (
    <ScrollView>
      <View>
        <Text>FAQ</Text>
      </View>
      <View>
        {faqs &&
          faqs.map(element => (
            <View key={element.id}>
              <FaqForum question={element.question} answer={element.answer} />
            </View>
          ))}
      </View>
    </ScrollView>
  );
};

export default Faq;
