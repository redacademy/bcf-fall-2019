import React, {Component} from 'react';
import CheckBox from 'react-native-check-box';
import {Image} from 'react-native';
import {Field} from 'react-final-form';
import styles from './styles';
import PropTypes from 'prop-types';

class InputDefaultCheckBox extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isChecked: false,
    };
  }

  render() {
    const {name, type, rightText, rightTextStyle, containerStyles} = this.props;

    return (
      <Field name={name} type={type} defaultValue={this.state.isChecked}>
        {({input, meta}) => {
          return (
            <CheckBox
              {...input}
              style={{...styles.container, ...containerStyles}}
              rightText={rightText}
              rightTextStyle={{...styles.text, ...rightTextStyle}}
              checkedImage={
                <Image
                  source={require('../../assets/images/icCheckboxSelected.png')}
                />
              }
              unCheckedImage={
                <Image
                  source={require('../../assets/images/icCheckboxDefault.png')}
                />
              }
              onClick={() => {
                this.setState({
                  isChecked: !this.state.isChecked,
                });
              }}
              isChecked={this.state.isChecked}
              value={input.value}
            />
          );
        }}
      </Field>
    );
  }
}

export default InputDefaultCheckBox;

InputDefaultCheckBox.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
  rightText: PropTypes.string,
  rightTextStyle: PropTypes.object,
  containerStyles: PropTypes.object,
};
