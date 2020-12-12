import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import Main from './src/components/Main';
import { NativeRouter } from 'react-router-native';

import { ApolloProvider } from '@apollo/react-hooks';
import createApolloClient from './src/utils/apolloClient';

const apolloClient = createApolloClient();

export default function App() {
  return (
    <View style={styles.container}>
      <NativeRouter>
        <ApolloProvider client={apolloClient}>
        <Main />
        </ApolloProvider>
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
