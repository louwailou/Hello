//
//  ViewController.m
//  Hello
//
//  Created by Sun on 2017/3/22.
//  Copyright © 2017年 Facebook. All rights reserved.
//

#import "ViewController.h"
#import <React/RCTRootView.h>
#import <React/RCTBundleURLProvider.h>
@interface ViewController ()

@end

@implementation ViewController

- (void)viewDidLoad {
    [super viewDidLoad];
  UIButton * addBtn = [[UIButton alloc] init];
  [self.view addSubview:addBtn];
  [addBtn setFrame:CGRectMake(100, 100, 50, 44)];
  [addBtn setTitle:@"跳转" forState:UIControlStateNormal];
  [addBtn setBackgroundColor:[UIColor redColor]];
  [addBtn addTarget:self action:@selector(skipTo) forControlEvents:UIControlEventTouchUpInside];
    // Do any additional setup after loading the view.
}

- (void)skipTo{
  NSLog(@"High Score Button Pressed");
    NSURL *jsCodeLocation;
  
    jsCodeLocation = [[RCTBundleURLProvider sharedSettings] jsBundleURLForBundleRoot:@"index.ios" fallbackResource:nil];

    RCTRootView *rootView = [[RCTRootView alloc] initWithBundleURL:jsCodeLocation
                                                        moduleName:@"Hello"
                                                 initialProperties:nil
                                                     launchOptions:nil];
  UIViewController *vc = [[UIViewController alloc] init];
  vc.view = rootView;
  [self presentViewController:vc animated:YES completion:nil];
}
- (void)didReceiveMemoryWarning {
    [super didReceiveMemoryWarning];
    // Dispose of any resources that can be recreated.
}

/*
#pragma mark - Navigation

// In a storyboard-based application, you will often want to do a little preparation before navigation
- (void)prepareForSegue:(UIStoryboardSegue *)segue sender:(id)sender {
    // Get the new view controller using [segue destinationViewController].
    // Pass the selected object to the new view controller.
}
*/

@end
