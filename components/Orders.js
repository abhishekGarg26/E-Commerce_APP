import React, { useContext } from 'react';
import { StyleSheet, Text, View, ScrollView, Image } from 'react-native';
import { AppContext } from '../App';
const Orders = () => {
  const store = useContext(AppContext);
  const orders = store.state.orders;
  return (
    <View style={styles.orderComponent}>
      <ScrollView style={styles.scrollView}>
        {orders.map((order) => (
          <View style={styles.order}>
            {Object.keys(order).map((productId) => {
              return (
                <View style={styles.orderItem}>
                  <View style={styles.left}>
                    <Image
                      source={{ uri: order[productId].img }}
                      style={{
                        width: '100%',
                        height: '100%',
                        borderRadius: 10,
                      }}
                    />
                  </View>
                  <View style={styles.right}>
                    <Text style={styles.name}>{order[productId].name}</Text>
                    <Text style={styles.price}>
                      Rs. {order[productId].price}{'        '}
                      <Text style={{ color: 'green' }}>Ordered</Text>
                    </Text>
                  </View>
                </View>
              );
            })}
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  orderComponent: {
    flex: 1,
  },
  order: {
    borderWidth: 1,
    borderColor: 'black',
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
  orderItem: {
    //height:100,
    flexDirection: 'row',
    borderBottomWidth: 1,
  },
  name: {
    fontSize: 20,
    marginBottom: 6,
  },
  price: {
    fontSize: 16,
    marginTop: 5,
    color: '#007bff',
    fontWeight: 'bold',
    marginBottom: 6,
  },
});

export default Orders;
