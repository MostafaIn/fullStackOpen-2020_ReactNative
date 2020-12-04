import React from 'react';
import { View } from 'react-native';
import RepositoryList from './RepositoryList';
import AppBar from './AppBar';

const Main = () => {
  return (
    <View>
      <AppBar />
      <RepositoryList />
    </View>
  );
};

export default Main;

