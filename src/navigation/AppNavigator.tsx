import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { MainStack } from './StackNavigators';

const AppNavigator: React.FC = () => {
  return (
    <NavigationContainer>
      <MainStack />
    </NavigationContainer>
  );
};

export default AppNavigator;
