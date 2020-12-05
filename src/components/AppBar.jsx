import React from 'react';
import { Link } from 'react-router-native';
import { StyleSheet, View, TouchableWithoutFeedback } from 'react-native';
import Constants from 'expo-constants';
import AppBarTab from './AppBarTab';
import theme from '../theme';

const AppBar = () => {
  return (
    <View style={styles.container}>
      <Link to="/">
      <TouchableWithoutFeedback>
        <AppBarTab tabName="Repositories" />
      </TouchableWithoutFeedback>
      </Link>
      <Link to="/signin">
       <TouchableWithoutFeedback>
        <AppBarTab tabName="Sign in" />
       </TouchableWithoutFeedback>
      </Link>
    </View>
  );
};

export default AppBar;

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight + 20,
    backgroundColor: theme.colors.backgroundSecondary,
    display:'flex',
    flexDirection:'row'
  },
  // ...
});
