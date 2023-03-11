import { SafeAreaView,View, Text,StyleSheet,Image, TextInput, Button, Pressable } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { StatusBar } from 'expo-status-bar';
import { useNavigation } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import HomeScreen from './HomeScreen';


const LoginScreen = () => {
    
    const navigation = useNavigation();

    const handlePress = () => {
        navigation.navigate('Home');
      };

    useLayoutEffect(()=> {
        navigation.setOptions({
            headerShown: false,
        })
    }, [])
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="light" />
      <View style={styles.loginImage}>
        <Image source={require('../assets/LoginCar.png')} />
        <Text style={styles.textLogin}>Login</Text>
      </View>
      <View style={styles.textInputContainer}>
        <Text style={styles.textInputLoginLabel}>Username</Text>
        <TextInput 
            style={styles.textInput}
            placeholder='Username'
        />
        <Text style={styles.textInputLoginLabelPassword}>Password</Text>
        <TextInput 
            style={styles.textInput}
            placeholder='Password'
        />
        <View style={styles.buttonContainer}>
            <Pressable style={styles.buttonStyle} onPress={handlePress}>
                <Text style={styles.signinBtnTxt}>Signin</Text>
            </Pressable>
        </View>
      </View>
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
    
    container: {
      flex: 1,
      backgroundColor: 'rgba(0, 0, 0, 0.85)',
    },
    loginImage: {
        flex: 1,
        alignItems: 'center',
        marginTop: 50,
    },
    textLogin: {
     color: 'white',
     fontSize: 60,
     fontWeight: 500,
     textAlign: 'center',
     marginTop: 50,
    },
    textInputContainer: {
        flex: 1,
        alignContent: 'left',
    },
    textInputLoginLabel: {
        color: 'white',
        fontSize: 25,
        marginLeft: 40,
        marginTop: -100,
    },
    textInputLoginLabelPassword: {
        color: 'white',
        fontSize: 25,
        marginLeft: 40,
        marginTop: 10,
    },
    textInput: {
        color: 'white',
        padding: 20,
        width: 350,
        height:50,
        backgroundColor: 'rgba(217,217,217,0.4)',
        borderRadius: 10,
        marginTop: 10,
        marginLeft: 40,
    },
    buttonStyle: {
        width: 200,
        height: 60,
        backgroundColor: '#E3D33C',
        borderRadius: 30,
        color: 'white',
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        elevation: 3,
    },
    buttonContainer: {
        flex: 1,
        alignItems: 'center',
        marginTop: 30,
    },
    signinBtnTxt: {
        fontSize: 20,
        lineHeight: 21,
        fontWeight: '700',
        letterSpacing: 0.25,
        color: 'black',
    }

   });
   
export default LoginScreen