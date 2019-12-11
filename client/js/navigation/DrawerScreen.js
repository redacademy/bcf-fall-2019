import React, {Component} from 'react';
import {withNavigation} from 'react-navigation';
import {SafeAreaView, Text, TouchableOpacity} from 'react-native';

class DrawerScreen extends Component {
  navigateToScreen = route => {
    this.props.navigation.navigate(route);
    this.props.navigation.closeDrawer();
  };

  render() {
    return (
      <SafeAreaView
        style={{
          backgroundColor: '#013859',
          height: '100%',
          width: '100%',
          marginLeft: 0,
        }}>
        <TouchableOpacity
          onPress={() => this.navigateToScreen('About')}
          style={{
            marginTop: 80,
            borderBottomColor: 'white',
            borderBottomWidth: 1,
          }}>
          <Text
            style={{
              fontSize: 20,
              padding: 25,
              color: 'white',
            }}>
            About Us
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => this.navigateToScreen('Contact')}
          style={{borderBottomColor: 'white', borderBottomWidth: 1}}>
          <Text
            style={{
              fontSize: 20,
              padding: 25,
              color: 'white',
            }}>
            Contact Us
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => this.navigateToScreen('Faq')}
          style={{borderBottomColor: 'white', borderBottomWidth: 1}}>
          <Text style={{fontSize: 20, padding: 25, color: 'white'}}>FAQ</Text>
        </TouchableOpacity>
      </SafeAreaView>
    );
  }
}

export default withNavigation(DrawerScreen);
