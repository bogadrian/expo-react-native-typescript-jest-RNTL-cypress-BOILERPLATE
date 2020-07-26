import React, { PureComponent } from 'react';
import { Text, Dimensions, Image, StyleSheet, View } from 'react-native';

import SwiperFlatList from 'react-native-swiper-flatlist';

const WalkThrough: React.FC = () => {
 
    return (
      <View style={styles.container}>
        <SwiperFlatList
          showPagination
          paginationActiveColor="red"
          paginationDefaultColor="blue"
        >
          <View style={[styles.child, { backgroundColor: 'tomato' }]}>
            <Text style={styles.text}>1</Text>
          </View>
          <View style={[styles.child, { backgroundColor: 'thistle' }]}>
            <Text style={styles.text}>2</Text>
          </View>
          <View style={[styles.child, { backgroundColor: 'skyblue' }]}>
            <Text style={styles.text}>3</Text>
          </View>
          <View style={[styles.child, { backgroundColor: 'teal' }]}>
            <Text style={styles.text}>4</Text>
          </View>
        </SwiperFlatList>
      </View>
    );
  }


export const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  child: {
    height: height * 0.91,
    width,
    justifyContent: 'center'
  },
  text: {
    fontSize: width * 0.5,
    textAlign: 'center'
  }
});
export default WalkThrough;
