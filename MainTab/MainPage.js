import React, { Component } from "react";
import { StyleSheet, Image } from "react-native";
import TabNavigator from "react-native-tab-navigator";
import FirstPage from '../Component/JFFlex';
import SecondPage from '../Component/JFFlexB';
import ThirdPage from '../Component/JFFlexC';
import ForthPage from '../Component/JFList';


const SELECTED_TAG = 'selected';
const SELECTED_TITLE = '精选';
const SELECTED_NORMAL = require('../img/ic_tab_strip_icon_feed.png');
const SELECTED_FOCUS = require('../img/ic_tab_strip_icon_feed_selected.png');

const EXPLORE_TAG = 'explore';
const EXPLORE_TITLE = '发现';
const EXPLORE_NORMAL = require('../img/ic_tab_strip_icon_category.png');
const EXPLORE_FOCUS = require('../img/ic_tab_strip_icon_category_selected.png');

const FOLLOW_TAG = 'follow';
const FOLLOW_TITLE = '关注';
const FOLLOW_NORMAL = require('../img/ic_tab_strip_icon_follow.png');
const FOLLOW_FOCUS = require('../img/ic_tab_strip_icon_follow_selected.png');

const PROFILE_TAG = 'profile';
const PROFILE_TITLE = '我的';
const PROFILE_NORMAL = require('../img/ic_tab_strip_icon_profile.png');
const PROFILE_FOCUS = require('../img/ic_tab_strip_icon_profile_selected.png');


export default class JFMainPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: SELECTED_TAG
    };
  }

  render() {
    return (
      <TabNavigator tabbarStyle={styles.tab_container}
        tabbarShadowStyle={{ height: 10 }}
      >
        {this._renderTabItem(SELECTED_TAG, SELECTED_TITLE, SELECTED_NORMAL, SELECTED_FOCUS)}
        {this._renderTabItem(EXPLORE_TAG, EXPLORE_TITLE, EXPLORE_NORMAL, EXPLORE_FOCUS)}
        {this._renderTabItem(FOLLOW_TAG, FOLLOW_TITLE, FOLLOW_NORMAL, FOLLOW_FOCUS)}
        {this._renderTabItem(PROFILE_TAG, PROFILE_TITLE, PROFILE_NORMAL, PROFILE_FOCUS)}
      </TabNavigator>
    );
  }

  _renderTabItem(tag, title, iconNormal, iconFocus) {
    return (
      <TabNavigator.Item
        selected={this.state.selectedTab === tag}
        title={title}
        titleStyle={styles.tab_title}
        selectedTitle={styles.tab_title_selected}
        renderIcon={() => <Image source={iconNormal} style={styles.tab_icon} />}
        renderSelectedIcon={() => <Image source={iconFocus} style={styles.tab_icon} />}
        onPress={() => this.setState({ selectedTab: tag })}
      >
        {this._createCountentPage(tag)}
      </TabNavigator.Item>
    );
  }


  _createCountentPage (tag) {
    switch(tag) {
      case SELECTED_TAG :
      return (<FirstPage {...this.props}/>);
      case EXPLORE_TAG :
      return (<SecondPage {...this.props}/>);
      case FOLLOW_TAG :
      return (<ThirdPage {...this.props}/>);
      case PROFILE_TAG :
      return (<ForthPage {...this.props}/>)
    }
  }
}

const styles = StyleSheet.create({
tab_container:{
  height:42
},
tab_icon:{
  width:35,
  height:35,
  resizeMode:'contain'
},
tab_title:{
  color:'#929292',
  fontSize:8
},
tab_title_selected:{
  color:'#333333',
  fontSize:8
}

})