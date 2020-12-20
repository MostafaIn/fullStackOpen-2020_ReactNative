import React from 'react';
import { Link } from 'react-router-native';
import {
  StyleSheet,
  ScrollView,
  SafeAreaView,
  TouchableWithoutFeedback,
} from 'react-native';
import Constants from 'expo-constants';
import AppBarTab from './AppBarTab';
import theme from '../theme';
import { useQuery } from '@apollo/react-hooks';
import { AUTHORIZED_USER } from '../graphql/queries';
import useSignOut from '../hooks/useSignOut';

const AppBar = () => {
  const { data } = useQuery(AUTHORIZED_USER);
  const [signOut] = useSignOut();

  console.log('data', data);
  const handleSignOut = async () => {
    await signOut();
  };
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView horizontal style={styles.scrollView}>
        <Link to="/">
          <TouchableWithoutFeedback>
            <AppBarTab tabName="Repositories" />
          </TouchableWithoutFeedback>
        </Link>
        {data?.authorizedUser ? (
          <Link to="/signin" onPress={handleSignOut}>
            <TouchableWithoutFeedback>
              <AppBarTab tabName="Sign out" />
            </TouchableWithoutFeedback>
          </Link>
        ) : (
          <Link to="/signin">
            <TouchableWithoutFeedback>
              <AppBarTab tabName="Sign in" />
            </TouchableWithoutFeedback>
          </Link>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

export default AppBar;

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight + 20,
    backgroundColor: theme.colors.backgroundSecondary,
    display: 'flex',
    flexDirection: 'row',
  },
  scrollView: {
    marginHorizontal: 10,
  },
  // ...
});
