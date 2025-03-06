
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const landingImg = require('../../assets/images/landing-img.png')

export default function HomeScreen() {

  const Navigate = useNavigation()

  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Welcome to the world of
        <Text style={styles.focusText}> Unlimited </Text> messages!
      </Text>

      <View style={{ backgroundColor: 'gray' }}>
        <Image style={styles.image} source={landingImg} />
      </View>

      {/* Button Container */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.signupButton]} onPress={() => { Navigate.navigate('Signup') }}>
          <Text style={styles.buttonText}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#713156',
    flex: 1,
    padding: 60,
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    color: '#FBF4F8',
    fontSize: 40,
    textAlign: 'center',
    fontFamily: 'arial'
  },
  focusText: {
    fontWeight: '800'
  },
  image: {
    width: 300,
    height: 300,
    objectFit: 'contain',
    backgroundColor: '#713156'
  },
  buttonContainer: {
    flexDirection: 'row',

  },
  button: {
    backgroundColor: '#4E2556',
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 25,
    alignItems: 'center',

  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold'
  }
})
