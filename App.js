import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import Main from './src/components/Main';
import { NativeRouter } from 'react-router-native';

export default function App() {
  return (
    <View style={styles.container}>
      <NativeRouter>
        <Main />
      </NativeRouter>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eee',
  },
});
