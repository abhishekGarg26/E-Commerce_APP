import React, { useContext } from 'react';
import {
  StyleSheet,
  Text,
  ScrollView,
  View,
  Image,
  Pressable,
} from 'react-native';
import { Rating, AirbnbRating } from 'react-native-elements';
import { products } from '../constants';

const Home = ({ navigation }) => {
  return (
    <View style={styles.homeComponent}>
      <ScrollView style={styles.scrollView}>
        {products.map((p) => (
          <Pressable
            style={styles.product}
            android_ripple={{ color: 'rgba(0,123,255, .1)' }}
            onPress={() => {
              navigation.navigate('ProductInfo', p);
            }}>
            <View style={styles.left}>
              <Image
                source={{ uri: p.img }}
                style={{ width: '100%', height: '100%', borderRadius: 10 }}
              />
            </View>
            <View style={styles.right}>
              <Text style={styles.name}>{p.name}</Text>
              <Text style={styles.price}>Rs. {p.price}</Text>
              <Rating showRating imageSize={20} />
            </View>
          </Pressable>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  homeComponent: {
    flex: 1,
    //backgroundColor:'gray'
  },
  product: {
    borderColor: '#007bff',
    shadowColor: '#007bff',
    shadowOpacity: 0.5,
    shadowOffset: { width: 10, height: 5 },
    shadowRadius: 10,
    borderWidth: 1,
    height: 200,
    borderRadius: 10,
    flexDirection: 'row',
    marginBottom: 15,
  },
  scrollView: {
    flex: 1,
    padding: 10,
  },
  left: {
    flex: 4,
    //backgroundColor:'green',
    borderRadius: 10,
    padding: 2,
    borderRightWidth: 0,
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
  },
  right: {
    flex: 6,
    padding: 10,
    //backgroundColor:'red',
    borderRadius: 10,
    borderLeftWidth: 0,
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0,
  },
  name: {
    fontSize: 20,
    marginBottom: 10,
  },
  price: {
    fontSize: 16,
    marginTop: 10,
    color: '#007bff',
    fontWeight: 'bold',
  },
});

export default Home;
