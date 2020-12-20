import { useContext } from 'react';
import { useApolloClient } from '@apollo/react-hooks';
import AuthStorageContext from '../contexts/AuthStorageContext';

const useSignOut = () => {
  const authStorage = useContext(AuthStorageContext);
  const apolloClient = useApolloClient();

  const signOut = async () => {
    await authStorage.removeAccessToken();
    apolloClient.resetStore();
  };
  return [signOut];
};
export default useSignOut;
