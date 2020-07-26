import React from 'react';
import { StyleSheet, View } from 'react-native';

import CustomText from '../../custom/CustomText';

interface Props {
  type: string;
}

const HomeScreen: React.FC<Props> = () => {
  return (
    <View style={styles.layout}>
      <CustomText type="bold" >
        Salutari la toata lumea
      </CustomText>
    </View>
  );
};

const styles = StyleSheet.create({
  layout: { flex: 1, justifyContent: 'center', alignItems: 'center' }
});

export default HomeScreen;
