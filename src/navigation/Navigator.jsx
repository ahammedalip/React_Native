import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import HomeScreen from '../screeens/HomeScreen';
import Profile from '../screeens/Profile';
import Signup from '../Signup';

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>

      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name='Home' component={HomeScreen} />
        <Stack.Screen name='Profile' component={Profile} />
        <Stack.Screen name='Signup' component={Signup} />
        

      </Stack.Navigator>
    </NavigationContainer>
  )
}