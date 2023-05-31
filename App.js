import React, { useReducer, useState } from 'react';
import { Text, View, StyleSheet, StatusBar } from 'react-native';
import Constants from 'expo-constants';

// You can import from local files

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();

import { SearchBar } from 'react-native-elements';
import Home from './components/Home';
import Cart from './components/Cart';
import ProductInfo from './components/ProductInfo';
import Orders from './components/Orders';

export const AppContext = React.createContext();

import { reducer, initialState } from './store';

export default function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [search, setSearch] = useState('');
  return (
    <AppContext.Provider value={{ state, dispatch }}>
      <StatusBar barStyle="light-content" backgroundColor="#007bff" />
      <SearchBar
        placeholder="Type Here..."
        onChangeText={(value) => setSearch(value)}
        value={search}
        onClear={() => setSearch('')}
        containerStyle={{
          backgroundColor: '#007bff',
          borderRadius: 0,
        }}
        inputContainerStyle={{
          backgroundColor: 'white',
          color: 'white',
        }}
      />
      <View style={styles.container}>
        <NavigationContainer>
          <Drawer.Navigator
            initialRouteName="Home"
            screenOptions={{ headerShown: true }}>
            <Drawer.Screen name="Home" component={Home} />
            <Drawer.Screen name="ProductInfo" component={ProductInfo} />
            <Drawer.Screen name="Cart" component={Cart} />
            <Drawer.Screen name="Orders" component={Orders} />
          </Drawer.Navigator>
        </NavigationContainer>
      </View>
    </AppContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: 'blue',
  },
});
