import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from '../screens/HomeScreen/HomeScreen';
import InfoScreen from '../screens/Info/InfoScreen';

const HomeStackNavigator = createStackNavigator();

const HomeStack: React.FC = () => {
  return (
    <HomeStackNavigator.Navigator>
      <HomeStackNavigator.Screen name="Home" component={HomeScreen} />
    </HomeStackNavigator.Navigator>
  );
};

const InfoStackNavigator = createStackNavigator();

const InfoStack: React.FC = () => {
  return (
    <InfoStackNavigator.Navigator>
      <HomeStackNavigator.Screen name="Info" component={InfoScreen} />
    </InfoStackNavigator.Navigator>
  );
};

const MainStackNavigator = createStackNavigator();

export const MainStack: React.FC = props => {
  return (
    <MainStackNavigator.Navigator>
      {false && (
        <MainStackNavigator.Screen name="Home Stack" component={HomeStack} />
      )}
      {true && (
        <MainStackNavigator.Screen name="Info Stack" component={InfoStack} />
      )}
    </MainStackNavigator.Navigator>
  );
};
