import React from 'react';
import { View, Text, Button } from 'react-native';

const CustomFallback = props => (
  <View>
    <Text>Something happened!</Text>
    <Text>{props.error.toString()}</Text>
    <Button onPress={props.resetError} title={'Try again'} />
  </View>
);

export default CustomFallback;
