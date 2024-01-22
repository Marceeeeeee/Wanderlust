import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button } from 'react-native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home } from './Home';
import { PropertyListHome } from './PropertyListHome';
import { PropertyDetail } from './PropertyDetail';
import { RentedProperties } from './RentedProperties';


export const Tab = createMaterialBottomTabNavigator();
const Stack = createNativeStackNavigator();
export const datas = [
  { label: 'Sunset Villa', value: '1' },
  { label: 'Blue Sky Bungalow', value: '2' },
  { label: 'Cherry Blossom Cottage', value: '3' },
  { label: 'Enchanted Echoes Home', value: '4' },
  { label: 'Hearthstone Have', value: '5' },
  { label: 'Orchid Oasis', value: '6' },
  { label: 'Seaside Serenity Cottage', value: '7' },
];

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="HomePage" component={Home} options={{ headerShown: false }} />
        <Stack.Screen name="Property List Home" component={PropertyListHome} options={{ headerShown: false }} />
        <Stack.Screen name="Property detail" component={PropertyDetail} options={{ headerShown: false }} />
        <Stack.Screen name="Rented" component={RentedProperties} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>

  )
}