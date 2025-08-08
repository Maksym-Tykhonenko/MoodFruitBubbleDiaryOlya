import React from 'react';
import {View, StyleSheet, Dimensions} from 'react-native';
import {WebView} from 'react-native-webview';

const {width, height} = Dimensions.get('window');

const htmlLoader = `
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<style>
  body {
    background: transparent;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    margin: 0;
  }
  .relative {
    position: relative;
    margin: 10px;
  }
  .circle {
    border: 8px solid #899cefff; /* lime-200 */
    border-radius: 50%;
  }
  .spin {
    border: 2px solid transparent;
    border-top: 8px solid #dbe9e9ff; /* lime-700 */
    border-radius: 50%;
    animation: spin 1s linear infinite;
    position: absolute;
    left: 0;
    top: 0;
  }
  @keyframes spin {
    to { transform: rotate(360deg); }
  }
</style>
</head>
<body>
  <div style="display:flex;flex-direction:column;align-items:center;">
    <div class="relative">
      <div class="circle" style="width:80px;height:80px;"></div>
      <div class="spin" style="width:80px;height:80px;"></div>
    </div>
    <div class="relative">
      <div class="circle" style="width:40px;height:40px;"></div>
      <div class="spin" style="width:40px;height:40px;"></div>
    </div>
    <div class="relative">
      <div class="circle" style="width:20px;height:20px;"></div>
      <div class="spin" style="width:20px;height:20px;"></div>
    </div>
  </div>
</body>
</html>
`;

const LoaderWebView = () => {
  return (
    <View style={styles.container}>
      <WebView
        originWhitelist={['*']}
        source={{html: htmlLoader}}
        style={styles.webview}
        scrollEnabled={false}
        overScrollMode="never"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width,
    height,
    backgroundColor: 'transparent',
  },
  webview: {
    backgroundColor: 'transparent',
  },
});

export default LoaderWebView;
