import React, { Component } from 'react';
import { AppRegistry, View ,TouchableHighlight,Text} from 'react-native';

export default class JFFlex extends Component {
  constructor(props){
    super(props);

    this.state = {
      "name":"点我",
      "age":100,
      "sex":"男"
    }
  }
  render() {
    return (
      // 试试去掉父View中的`flex: 1`。
      // 则父View不再具有尺寸，因此子组件也无法再撑开。
      // 然后再用`height: 300`来代替父View的`flex: 1`试试看？
      <View style={{flex: 1}}>
        <View style={{flex: 1, backgroundColor: 'powderblue'}} />
        <View style={{flex: 2, backgroundColor: 'skyblue'}} />
        <View style={{flex: 3, backgroundColor: 'steelblue'}} />
        <TouchableHighlight style = {{backgroundColor:'red',height:90}}
          onPress = {this.changeState.bind(this)}// 这里需要进行bind 不然setState 报错
        >
          <Text> {this.state.name}</Text>
          </TouchableHighlight>
      </View>
    );
  }
  changeState () {
    console.log(this.state);
  this.setState({
    "name":"点你"
  });
  console.log("after");
  console.log(this.state);
  }
};