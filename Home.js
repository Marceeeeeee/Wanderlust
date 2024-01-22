import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { RentedProperties } from './RentedProperties';
import { PropertyListHome } from './PropertyListHome';
import { HomePage } from './HomePage';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';


const Tab = createMaterialBottomTabNavigator();
export function Home() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomePage} options={{
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="home" color={color} size={26} />
        ),
      }} />
      <Tab.Screen name="Houses" component={PropertyListHome} options={{
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="map-marker-multiple" color={color} size={26} />
        ),
      }} />
      <Tab.Screen name="Rented" component={RentedProperties} options={{
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="wallet-travel" color={color} size={26} />
        ),
      }} />
    </Tab.Navigator>
  );
}
