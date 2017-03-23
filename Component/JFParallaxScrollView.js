import React, { Component } from 'react';
import { View, Text } from 'react-native';
import ParallaxScrollView from 'react-native-parallax-scroll-view';
//npm install react-native-parallax-scroll-view --save
export default class JFParallaxScrollView extends Component {
  render() {
    return (
      <ParallaxScrollView
        backgroundColor ='blue'
        contentBackgroundColor ='pink'
        parallaxHeaderHeight={300}
        renderForeground={() => (
          <View style={{ height: 300, flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text> Hello World!</Text>
          </View>
        )}
      >
        <View style={{ height: 100 }}>
          <Text>Scroll me</Text>
        </View>
        <View style={{ height: 100 }}>
          <Text>Scroll me</Text>
        </View>
        <View style={{ height: 100 }}>
          <Text>Scroll me</Text>
        </View>
        <View style={{ height: 100 }}>
          <Text>Scroll me</Text>
        </View>
        <View style={{ height: 100 }}>
          <Text>Scroll me</Text>
        </View>
        <View style={{ height: 100 }}>
          <Text>Scroll me</Text>
        </View>
        <View style={{ height: 100 }}>
          <Text>Scroll me</Text>
        </View>
        <View style={{ height: 100 }}>
          <Text>Scroll me</Text>
        </View>
        <View style={{ height: 100 }}>
          <Text>Scroll me</Text>
        </View>
        <View style={{ height: 100 }}>
          <Text>Scroll me</Text>
        </View>
        <View style={{ height: 100 }}>
          <Text>Scroll me</Text>
        </View>
        <View style={{ height: 100 }}>
          <Text>Scroll me</Text>
        </View>
      </ParallaxScrollView>
    );
  }
}