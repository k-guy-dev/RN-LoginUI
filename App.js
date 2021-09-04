import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Login  from './components/Login';
import VerifyNumber from './components/VerifyNumber';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Login/> */}
      <VerifyNumber/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
     flex: 1,
    // backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
