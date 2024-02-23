import * as React from 'react';
import { StyleSheet,View } from 'react-native';
import { WebView } from 'react-native-webview';
import { useLocalSearchParams } from 'expo-router';
import Header from '../../components/Header';



export default function WebPage() {
    const item= useLocalSearchParams();
    console.log(item.url);
  return (
   <View style={styles.container}>
    {/* <Header/> */}
    <WebView
      style={styles.webview}
      originWhitelist={['*']}
      source={{ uri: item.url}}
    />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    width: '100%',
    height: '100%',
  },   
  webview: {
    flex: 1,
    width: '100%',
    height: '100%',
  } 

})