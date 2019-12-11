import React from 'react';
import {Text, View, ScrollView} from 'react-native';
import FaqForum from '../../components/FaqForum/FaqForum';
import styles from './styles';

const Faq = ({faqs}) => {
  return (
    <ScrollView>
      <View style={styles.faqPage}>
        <Text style={styles.faqTitle}>FAQ</Text>
      </View>
      <View>
        {faqs &&
          faqs.map(element => (
            <View style={styles.faqForums} key={element.id}>
              <FaqForum question={element.question} answer={element.answer} />
            </View>
          ))}
      </View>
      <View style={styles.faqGreyBar} />
    </ScrollView>
  );
};

export default Faq;
