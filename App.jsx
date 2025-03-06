import { View, Text, StyleSheet, Image, ImageBackground, ScrollView, Button, Pressable, Modal, StatusBar, ActivityIndicator, Alert } from 'react-native'
import React, { useState } from 'react'
import AppNavigator from './src/navigation/Navigator'

const App = () => {

  return (
    <View style={{flex:1, }}>
      <AppNavigator />
      {/* <Text>hello</Text> */}
    </View>
  )
}

const style = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor: '#713156'
  }
})

export default App