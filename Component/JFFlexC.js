import React, { Component } from 'react';
import { StyleSheet, View, Text } from "react-native";
// 针对布局的一些用法
export default class FlexC extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.item}> 1 </Text>
        <Text style={styles.item}> 2 </Text>
        <Text style={styles.item}> 3 </Text>
        <Text style={styles.item}> 4 </Text>
        <Text style={styles.item}> 5 </Text>
        <Text style={styles.item_end}> end </Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container:{
    backgroundColor:'#0ff',
    flexDirection:'row',
    flex:1
  },
  item: {
    backgroundColor:'#f0f',
    margin:2,
    height:100,

  },
  item_end:{
    backgroundColor:"#f0f",
    flexGrow:1,
    margin:4,
    height:100,
    alignSelf:'flex-end'
  }
})