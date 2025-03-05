import { View, Text, StyleSheet, Image, ImageBackground, ScrollView, Button, Pressable, Modal, StatusBar, ActivityIndicator, Alert } from 'react-native'
import React, { useState } from 'react'
import Greet from './components/Greet'
const img = require('./assets/images/img1.png')


const App = () => {

const [bgColor, setBgColor] = useState('plum')

  return (
    <View style={[styles.container,{backgroundColor: bgColor}]}>

    <Greet name="Bruce" />
    <Greet name="Clark" />
 
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'plum',
    padding: 10,

  },
  button: {
    alignItems: 'center'
  }
})

export default App