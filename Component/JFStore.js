import React, { Component } from 'react';
import { View, Text, TextInput, StyleSheet, Navigator } from 'react-native';
import { Container, Header, Title, Content, Icon, Button, Left, Body } from 'native-base';
import storage from '../util/Storage';
export default class JFStorage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      account: '',
      password: '',
      verifyString: '',
      isCounting: false
    };

  }

  render() {
    return (
      <Container>
        <Header style={{ backgroundColor: 'red', height: 48 }}>
          <Left>
            <Button transparent onPress={() => this._onCloseClick()}>

              <Icon name='arrow-back' style={{ color: "#333" }} />
            </Button>
          </Left>
          <Body>
            <Title style={{ color: '#333' }}>登录</Title>
          </Body>
        </Header>
<Content style={{backgroundColor: 'white'}}>
                    <View style={{marginTop: 60}}>
                        <View style={TextInputStyle.view_account_input_container}>
                            <Icon name="ios-person" style={TextInputStyle.icon_account}/>
                            <TextInput
                                style={TextInputStyle.input_account}
                                placeholder={'手机号'}
                                placeholderTextColor={'#b2b2b2'}
                                keyboardType={'numeric'}
                                maxLength={11}
                                returnKeyType={'next'}
                                underlineColorAndroid={'transparent'}
                                onChangeText={(input)=> {
                                    this.setState({account: input})
                                }}
                            />
                        </View>
                        <View style={TextInputStyle.view_password_input_container}>
                            <TextInput
                                style={TextInputStyle.input_password}
                                placeholder={'验证码'}
                                placeholderTextColor={'#b2b2b2'}
                                keyboardType={'numeric'}
                                maxLength={6}
                                returnKeyType={'next'}
                                clearTextOnFocus={true}
                                underlineColorAndroid={'transparent'}
                                onChangeText={(input)=> {
                                    this.setState({password: input})
                                }}
                            />

                            <Text
                                onPress={()=>this._fetchVerifyCode()}
                                style={TextInputStyle.tv_verify_code}>{this.state.verifyString}</Text>

                        </View>
                        <Button block
                                onPress={()=>this._onLoginButtonClick()}
                                style={TextInputStyle.btn_commit}>
                            <Text style={{fontSize: 18, color: 'white'}}>登录</Text>
                        </Button>
                    </View>

                </Content>
      </Container>
    )
  }

  _onCloseClick() {
    const {navigator} = this.props;
    if(navigator) {
      navigator.pop();
    }
  }
  _onLoginButtonClick() {
    if(!this.state.account) {
      console.log("no mobile num");
      return;
    } else if(this.state.account.length < 11){
      console.log("手机号格式有错误");
      return;
    } else if(!this.state.password){
      console.log("少验证码");
      return "";
    } else if(!this.state.password.length < 6) {
      console.log("验证码必须为6 wei ");
      return ;
    }
 this._login();
  }
_login() {
  Console.log("登录成功");
  storage.save({
    key: 'loginState',  // 注意:请不要在key中使用_下划线符号!
            rawData: {
                from: 'some other site',
                userid: 'some userid',
                token: 'some token'
            },

            // 如果不指定过期时间，则会使用defaultExpires参数
            // 如果设为null，则永不过期
            expires: 1000 * 3600
  });
  if( this.props.getIsLogin) {
    this.props.getIsLogin(true);
  }
  this._onCloseClick();
}

_fetchVerifyCode() {
  if(this.state.isCounting) {
    return;
  }else {
    this._startCounting();
  }
}

_startCounting() {
  var total = 60;
  this.interval = setInterval(()=> {
   this.setState({
     verifyString:total -- + 's 后重新获取',
     isCounting:true
   })
   if(total <= 0){
     this.interval && clearInterval(this.interval);
     this.setState({verifyString:"重新获取",isCounting:false});
   }
  });
}

componentWillUnMount () {
  this.interval && clearInterval(this.interval);
}
}

const TextInputStyle = StyleSheet.create({
    view_account_input_container: {
        borderBottomWidth: 0.5,
        borderBottomColor: '#E9E9E9',
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: 14,
        marginBottom: 8,

    },
    view_password_input_container: {
        borderBottomWidth: 0.5,
        borderBottomColor: '#E9E9E9',
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: 14,

    },
    input_account: {
        flex: 1,
        fontSize: 14,
        paddingVertical: 8,
    },
    input_password: {
        flexGrow: 4,
        fontSize: 14,
        paddingVertical: 8,
    },
    icon_account: {
        fontSize: 26,
        marginRight: 16,
        marginLeft: 8,
        color: '#b2b2b2'
    },
    tv_verify_code: {
        color: '#333',
        flexGrow: 1,
        textAlign: 'center'
    },
    btn_commit: {
        height: 88,
        backgroundColor: '#333',
        marginTop: 68,
        marginHorizontal: 14,
    }
})