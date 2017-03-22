import React,{Component} from 'react';
import {Image,Text,StyleSheet,ListView,Animated,View} from 'react-native';
export default class JFBounce extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bounceValue: new Animated.Value(0.7),
    }
  }

  render () {
    return (
      <Animated.Image source = {require('../img/favicon.png')}
      shouldRasterizeIOS
      style = {{flex:1,transform:[
        {scale:this.state.bounceValue},
      ]}}
      />
    );
  }

  componentDidMount() {
    requestAnimationFrame(() => {
      this._animateIn();
    });
  }
  _animateIn() {
    Animated.spring(this.state.bounceValue,{
      toValue:0.4,
      friction:1,
    }).start(this._animateOut);
  }
  _animateOut() {
    Animated.spring(this.state.bounceValue,{
      toValue:0.7,
      friction:1,
    }).start(this._animateIn);
  }
}