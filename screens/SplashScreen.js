import { View, Text, StyleSheet,SafeAreaView, Image } from 'react-native'
import React, { useEffect, useLayoutEffect } from 'react'

const SplashScreen = ({navigation}) => {
    useEffect(() => {
        setTimeout(() => {
          navigation.replace('Login');
        }, 3000); // Delay splash screen for 3 seconds
      }, [navigation]);

    useLayoutEffect(()=> {
        navigation.setOptions({
            headerShown: false,
        })
    }, [])
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.logo}>Park+</Text>
        <Image source={require('../assets/SplashScreen.png')}/>
        <Text style={styles.slogan}>The way to an easy stress-free life</Text>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    
    container: {
      height: '100%',
      backgroundColor: 'rgba(0, 0, 0, 0.85)',
      flexDirection: 'column',
      justifyContent: 'center'
    },
    logo: {
        color: 'white',
        textAlign: 'center',
        fontWeight: 700,
        fontSize: 60,
    },
    slogan:{
        fontSize: 35,
        color: 'white',
        fontWeight:600,
        padding: 50,
        textAlign: 'center'
    }
})

export default SplashScreen