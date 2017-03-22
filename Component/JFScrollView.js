import React, { Component } from 'react';
import{ AppRegistry, ScrollView, Image, Text, View } from 'react-native'

export default class JFScrollView extends Component {
  render() {
      return(
        <ScrollView>
          <Text style={{fontSize:23}}>Scroll me plz</Text>
          <Image source={require('../img/favicon.png')} />
          <Image source={require('../img/favicon.png')} />
          <Image source={require('../img/favicon.png')} />
          <Image source={require('../img/favicon.png')} />
          <Image source={require('../img/favicon.png')} />
          <Text style={{fontSize:96}}>If you like</Text>
          <Image source={require('../img/favicon.png')} />
          <Image source={require('../img/favicon.png')} />
          <Image source={require('../img/favicon.png')} />
          <Image source={require('../img/favicon.png')} />
          <Image source={require('../img/favicon.png')} />
          <Text style={{fontSize:96}}>Scrolling down</Text>

          <Text style={{fontSize:96}}>What's the best</Text>
          <Image source={require('../img/favicon.png')} />
          <Image source={require('../img/favicon.png')} />
          <Image source={require('../img/favicon.png')} />
          <Image source={require('../img/favicon.png')} />
          <Image source={require('../img/favicon.png')} />
          <Text style={{fontSize:96}}>Framework around?</Text>
          <Image source={require('../img/favicon.png')} />
          <Image source={require('../img/favicon.png')} />
          <Image source={require('../img/favicon.png')} />
          <Image source={require('../img/favicon.png')} />
          <Image source={require('../img/favicon.png')} />
          <Text style={{fontSize:80}}>React Native</Text>
        </ScrollView>
    );
  }
}