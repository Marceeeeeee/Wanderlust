import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home } from './Home';
import { PropertyListHome } from './PropertyListHome';
import { PropertyDetail } from './PropertyDetail';
import { RentedProperties } from './RentedProperties';

const Stack = createNativeStackNavigator();

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