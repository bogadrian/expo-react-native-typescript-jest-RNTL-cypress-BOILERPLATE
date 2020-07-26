import React from 'react';
import { StyleSheet, View } from 'react-native';

import AppNavigator from './src/navigation/AppNavigator';

const App: React.FC = () => {
  return (
    <View style={styles.container}>
      <AppNavigator />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: 'blue'
  }
});

export default App;
