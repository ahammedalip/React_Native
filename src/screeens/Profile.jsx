import { View, Text, StyleSheet, Button } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

export default function Profile() {
    const Navigation = useNavigation()
    return (
        <View>
            <Text style={styles.normal}>
                This is profile page, if you want to go back to home page,
                <Text style={styles.focusFont}>
                    click below
                </Text>
                {/* <Button title='Go to Home' onPress={()=>Navigation.navigate('Home')} /> */}
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    focusFont: {
        fontWeight: 'bold'
    },
    normal:{
        padding:30
    }
})