# Hello 将RN  嵌入现有原生组件中
### 在根目录中添加package.json 文件，该文件指定了RN依赖包
```
{
	"name": "Hello",
	"version": "0.0.1",
	"private": true,
	"scripts": {
		"start": "node node_modules/react-native/local-cli/cli.js start",
		"test": "jest"
	},
	"dependencies": {
		"react": "~15.4.1",
		"react-native": "0.42.3"
	},
	"devDependencies": {
		"babel-jest": "19.0.0",
		"babel-preset-react-native": "1.9.1",
		"jest": "19.0.2",
		"react-test-renderer": "~15.4.1"
	},
	"jest": {
		"preset": "react-native"
	}
}
```
编辑完后，安装该依赖包，在包含package.json 文件的目录中运行`npm install ` 依赖包会安装到  ` node_modules/`目录中
###  编辑Podfile 文件，告诉工程，你想整合RN 的哪些部分，这是`subspec` 的工作
```
 # 'node_modules'目录一般位于根目录中
  # 但是如果你的结构不同，那你就要根据实际路径修改下面的`:path`
  pod 'React', :path => '../node_modules/react-native', :subspecs => [
    'Core',
    'RCTText',
    'RCTNetwork',
    'RCTWebSocket', # 这个模块是用于调试功能的
    'RCTImage',
    # 在这里继续添加你所需要的模块
  ]
  # 如果你的RN版本 >= 0.42.0，请加入下面这行
  pod "Yoga", :path => "../node_modules/react-native/ReactCommon/yoga"

```

在在iOS原生代码所在的目录中（也就是`.xcodeproj`文件所在的目录）构建 Podfile文件 
`pod init` 然后 `pod install` 安装依赖文件包

### 嵌入原生 


1. 编写JS 文件，并注册我们的`modules` 
 
```
// 整体js模块的名称
AppRegistry.registerComponent('RNHighScores', () => RNHighScores);
```
2. 原生调用JS 模块


```
NSURL *jsCodeLocation;
  
    jsCodeLocation = [[RCTBundleURLProvider sharedSettings] jsBundleURLForBundleRoot:@"index.ios" fallbackResource:nil];

    RCTRootView *rootView = [[RCTRootView alloc] initWithBundleURL:jsCodeLocation
                                                        moduleName:@"Hello"
                                                 initialProperties:nil
                                                     launchOptions:nil];
  UIViewController *vc = [[UIViewController alloc] init];
  vc.view = rootView;
  [self presentViewController:vc animated:YES completion:nil];
```

### 注意

Note that RCTRootView initWithURL starts up a new JSC VM. To save resources and simplify the communication between RN views in different parts of your native app, you can have multiple views powered by React Native that are associated with a single JS runtime. To do that, instead of using [RCTRootView alloc] initWithURL, use RCTBridge initWithBundleURL to create a bridge and then use RCTRootView initWithBridge.

When moving your app to production, the NSURL can point to a pre-bundled file on disk via something like [[NSBundle mainBundle] URLForResource:@"main" withExtension:@"jsbundle"];. You can use the react-native-xcode.sh script in node_modules/react-native/packager/ to generate that pre-bundled file.
