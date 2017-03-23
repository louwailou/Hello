/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import JFFlex from  './Component/JFFlex';
import JFScrollView from './Component/JFScrollView';
import JFList from './Component/JFList';
import JFBounce from './Component/JFBounce';
import JFFlexC from './Component/JFFlexC';
import JFFlexB from './Component/JFFlexB';
import JFFetch from './Component/JFFetch';
import JFParallaxScrollView from './Component/JFParallaxScrollView';
import JFStorage from './Component/JFStore';
import JFMainPage from './MainTab/MainPage';
export default class Hello extends Component {
  render() {
    return (
      /*
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.ios.js
        </Text>
        <Text style={styles.instructions}>
          Press Cmd+R to reload,{'\n'}
          Cmd+D or shake for dev menu
        </Text>
      </View>
      */

      <JFMainPage />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('Hello', () => Hello);
