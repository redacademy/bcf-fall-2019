import React from 'react';
import {
  Text,
  View,
  Image,
  LayoutAnimation,
  TouchableOpacity,
  Animated,
  Easing,
} from 'react-native';
import styles from './styles';

class FaqForum extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapse: true,
      spinValue: new Animated.Value(0),
    };
    this.icons = {
      collapse: '../../assets/images/icPlusDefault.png',
      show: '../../assets/images/icMinusDefault.png',
    };
  }

  animate = () => {
    Animated.timing(this.state.spinValue, {
      toValue: 1,
      easing: Easing.linear,
    }).start(animation => {
      if (animation.finished) {
        this.setState({spin: new Animated.Value(0)});
      }
    });

    if (!this.state.collapse) {
      this.setState({
        collapse: true,
      });
    } else {
      this.setState({
        collapse: false,
      });
    }
  };

  render() {
    const spin = this.state.spinValue.interpolate({
      inputRange: [0, 1],
      outputRange: ['0deg', '360deg'],
    });

    return (
      <View style={{overflow: 'hidden'}}>
        <TouchableOpacity
          onPress={() => {
            LayoutAnimation.configureNext(
              LayoutAnimation.Presets.easeInEaseOut,
            );
            this.setState({collapse: !this.state.collapse});
          }}>
          <View style={{flexDirection: 'row'}}>
            <Animated.Text
              style={{
                color: '#000000',
                fontSize: 20,
                paddingRight: 10,
                transform: [{rotate: spin}],
              }}>
              {this.state.collapse ? (
                <Image
                  source={require('../../assets/images/icPlusDefault.png')}
                />
              ) : (
                <Image
                  source={require('../../assets/images/icMinusDefault.png')}
                />
              )}
            </Animated.Text>
            <Text style={styles.faqQuestion}>{this.props.question}</Text>
          </View>
        </TouchableOpacity>
        {!this.state.collapse && (
          <Text style={styles.faqAnswer}>{this.props.answer}</Text>
        )}
      </View>
    );
  }
}

export default FaqForum;
