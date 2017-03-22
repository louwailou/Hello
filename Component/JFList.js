import React, { Component } from 'react';
import { AppRegistry, ListView, Text, View } from 'react-native';

export default class JFList extends Component {
  // 初始化模拟数据
  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows([
        'John', 'Joel', 'James', 'Jimmy', 'Jackson', 'Jillian', 'Julie', 'Devin'
      ])
    };
  }
  render() {
    return (
      <View style={{flex: 1, paddingTop: 22}}>
        <ListView
          dataSource={this.state.dataSource}
         // renderRow={(rowData,sectionID,rowID) => <Text>{rowData}=={sectionID}=={rowID}</Text>}
         renderRow = {(rowData,sectionID,rowID,hightLight) => {
           return (
      <View style = {{flex:1}}>
     <Text style = {{backgroundColor:'red',height:44 }}>内容为:{rowData},section = {sectionID},row = {rowID},hightLight = {hightLight} </Text>
      </View>
    )
         }}
        />
      </View>
    );
  }
  renderRowData (rowData,sectionID,rowID,hightLight) {
    return (
      <View style = {{flex:1}}>
     <Text style = {{backgroundColor:'red',height:44 }}>内容为:{rowData},section = {sectionID},row = {rowID},hightLight = {hightLight} </Text>
      </View>
    )
  }
}