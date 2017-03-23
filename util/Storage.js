import React, {Component} from 'react';
import {AsyncStorage} from 'react-native';
import Storage from 'react-native-storage';

var storage = new Storage ({
  size:1000,
  storageBackend:AsyncStorage,//存储引擎
  defaultExpires: 1000 *3600 * 24 * 30, // 存储引擎：对于RN使用AsyncStorage，对于web使用window.localStorage
    // 如果不指定则数据只会保存在内存中，重启后即丢失
  enableCache:true,// 读写时在内存中缓存数据。默认启用。

})
global.storage = storage;