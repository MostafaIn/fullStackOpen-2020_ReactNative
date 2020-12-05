import React from 'react';
import Text from './Text';

const AppBarTab = ({ tabName }) => {
  return (
    <Text color="textSecondary" fontWeight="bold">
      {tabName}
    </Text>
  );
};

export default AppBarTab;
