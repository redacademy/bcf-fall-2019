import React, {Component} from 'react';
import {TouchableOpacity, Text, View, Animated} from 'react-native';
import {THEME} from '../../config';
import PropTypes from 'prop-types';

class ButtonDefault extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isReady: true,
      btnBG: new Animated.Value(0),
    };
  }

  componentDidUpdate() {
    const {isActive} = this.props;

    if (this.state.isReady !== isActive) {
      this.setState({isReady: isActive});
      this.changeBtnBG();
    }
  }

  changeBtnBG = () => {
    Animated.timing(this.state.btnBG, {
      duration: 500,
      toValue: 1,
    }).start(animation => {
      animation.finished && this.setState({btnBG: new Animated.Value(0)});
    });
  };

  render() {
    const {onPress, buttonStyle, textStyle, title} = this.props;

    const btnBGinterpolate = this.state.btnBG.interpolate({
      inputRange: [0, 1],
      outputRange: this.state.isReady
        ? [THEME.colors.white, THEME.colors.burntSienna]
        : [THEME.colors.burntSienna, THEME.colors.white],
    });
    const textColorInterporate = this.state.btnBG.interpolate({
      inputRange: [0, 1],
      outputRange: this.state.isReady
        ? [THEME.colors.burntSienna, THEME.colors.white]
        : [THEME.colors.white, THEME.colors.burntSienna],
    });

    return (
      <TouchableOpacity onPress={onPress}>
        <Animated.View
          style={{
            ...THEME.button,
            ...buttonStyle,
            backgroundColor: btnBGinterpolate,
          }}>
          <Animated.Text
            style={{
              ...THEME.typography.button,
              ...textStyle,
              color: textColorInterporate,
            }}>
            {title}
          </Animated.Text>
        </Animated.View>
      </TouchableOpacity>
    );
  }
}

export default ButtonDefault;

ButtonDefault.propTypes = {
  isActive: PropTypes.bool.isRequired,
  onPress: PropTypes.func.isRequired,
  buttonStyle: PropTypes.object,
  textStyle: PropTypes.object,
  title: PropTypes.string.isRequired,
};
