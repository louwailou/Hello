import React, { Component } from 'react';
import { AppRegistry, ListView, Text, View } from 'react-native';

export default class JFList extends Component {
  // 初始化模拟数据
  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    this.state = {
      dataSource: ds.cloneWithRows([
        'John', 'Joel', 'James', 'Jimmy', 'Jackson', 'Jillian', 'Julie', 'Devin', 'John', 'Joel', 'James', 'Jimmy', 'Jackson', 'Jillian', 'Julie', 'Devin', 'John', 'Joel', 'James', 'Jimmy', 'Jackson', 'Jillian', 'Julie', 'Devin'
      ])
    };
  }
  renderRowData(rowData, sectionID, rowID, hightLight) {
    return (
      <View style={{ flex: 1 }}>
        <Text style={{ backgroundColor: 'red', height: 50 }}>内容为:{rowData},section = {sectionID},row = {rowID},hightLight = {hightLight} </Text>
      </View>
    );
  }

  render() {
    return (
      <View style={{ flex: 1, paddingTop: 22 }}>
        <ListView
          dataSource={this.state.dataSource}
          // renderRow={(rowData,sectionID,rowID) => <Text>{rowData}=={sectionID}=={rowID}</Text>}
          renderRow={this.renderRowData.bind(this)}
          initialListSize={10}
          onChangeVisibleRows={(visibleRows, changeRows) => {
            console.log('vis' + visibleRows);
            console.log(changeRows);
          }}
          renderHeader={() => {
            return (
              <Text style={{ flex: 1, backgroundColor: 'green' }}> 这是header</Text>
            )
          }}
          renderSectionHeader={(sectionData, sectionID) => {
            //  这里的sectionData 就是该section 对应的所有数据
            return (
              <Text style={{ backgroundColor: 'yellow' }}> 这是sectionHeader {sectionData} </Text>
            )
          }}
        />
      </View>
    );
  }

}