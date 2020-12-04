import React from 'react';
import { TouchableWithoutFeedback } from 'react-native';
import Text from './Text';

const AppBarTab = () => {
  return (
    <TouchableWithoutFeedback>
      <Text color="textSecondary" fontWeight="bold">Repositories</Text>
    </TouchableWithoutFeedback>
  );
};

export default AppBarTab;

