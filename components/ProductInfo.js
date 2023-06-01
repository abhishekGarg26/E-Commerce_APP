import React, { useContext } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
  ScrollView,
} from 'react-native';
import { Card } from 'react-native-elements';
import { AppContext } from '../App';
import Icon from 'react-native-vector-icons/FontAwesome';
const ProductInfo = ({ route }) => {
  const store = useContext(AppContext);
  console.log(store.state);
  const isAddedToCart =
    store?.state?.cart.filter((item) => item.id === route?.params?.id).length >
    0;
  return (
    <ScrollView style={styles.productInfo}>
      <Card containerStyle={{ height: 340, margin: 0 }}>
        <Card.Title style={{ fontSize: 16 }}>{route?.params?.name}</Card.Title>
        <Card.Divider />
        <View style={styles.imgContainer}>
          <Image
            style={styles.image}
            resizeMode="cover"
            source={{ uri: route?.params?.img }}
          />
        </View>
        <Text style={styles.price}>Rs. {route?.params?.price}</Text>
      </Card>
      <Pressable
        onPress={() => {
          store.dispatch({
            type: 'ADD_TO_CART',
            payload: route.params,
          });
        }}>
        <Text
          style={isAddedToCart ? styles.addedToCartBtn : styles.addToCartBtn}>
          {isAddedToCart ? 'Added' : 'Add to cart'}{' '}
          <Icon name={isAddedToCart ? 'check' : 'shopping-cart'} size={30} />
        </Text>
      </Pressable>

      <Text>
        Model Name OnePlus Nord CE Wireless Carrier Unlocked for All Carriers
        Brand OnePlus Form factor Smartphone Memory Storage Capacity 256 GB
      </Text>

      <View style={styles.aboutContainer}>
        <Text style={styles.infoheader}>About the product</Text>
        <Text style={styles.infoText}>
          64MP+8MP+2MP triple rear camera with 1080p video at 30/60 fps, 4k 30
          fps | 16MP front camera with 1080p video at 30/60 fps.
        </Text>
        <Text style={styles.infoText}>
          6.43-inch, 90Hz fluid AMOLED display with 2400 x 1080 pixels
          resolution | 410ppi Memory, Storage & SIM: 12GB RAM | 256GB internal
          memory on UFS 2.1 storage system.
        </Text>
        <Text style={styles.infoText}>
          Dual SIM (nano + nano) | OnePlus Nord CE currently supports dual 4G
          SIM Cards or a single 5G SIM + 4G SIM. Chipset: Qualcomm Snapdragon
          750G 5G mobile platform with an octa-core processor, Kryo 570 CPU (20%
          from predecessor), and an Adreno 619 GPU (10% improved graphics
          performance from predecessor).
        </Text>
        <Text style={styles.infoText}>
          Alexa Hands-Free capable: Download the Alexa app to use Alexa
          hands-free. Play music, make calls, hear news, openapps, navigate, and
          more, all using just your voice, while on-the-go.
        </Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  productInfo: {
    //backgroundColor:'red',
    flex: 1,
    padding: 15,
  },
  image: {
    height: '100%',
    widht: '100%',
  },
  imgContainer: {
    height: 220,
  },
  addToCartBtn: {
    backgroundColor: '#007bff',
    padding: 10,
    color: 'white',
    fontSize: 24,
    marginTop: 16,
    marginBottom: 16,
    textAlign: 'center',
    borderRadius: 10,
    fontWeight: 'bold',
  },
  addedToCartBtn: {
    backgroundColor: 'green',
    padding: 10,
    color: 'white',
    fontSize: 24,
    marginTop: 16,
    marginBottom: 16,
    textAlign: 'center',
    borderRadius: 10,
    fontWeight: 'bold',
  },
  infoheader: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  infoText: {
    marginTop: 10,
  },
  aboutContainer: {
    borderColor: 'lightgray',
    borderWidth: 1,
    padding: 10,
    marginTop: 10,
  },
  price: {
    fontSize: 20,
    color: '#007bff',
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 10,
  },
});

export default ProductInfo;
