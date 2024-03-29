import { SafeAreaView,View, Text,StyleSheet,Image, TextInput, Button, Pressable, TouchableOpacity} from 'react-native'
import React, { useLayoutEffect, useState } from 'react'
import { StatusBar } from 'expo-status-bar';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import superagent from 'superagent';


const LoginScreen = () => {
    
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();

    const navigation = useNavigation();

    const handlePress = async () => {
        try {
          const response = await superagent
            .post('http://20.2.80.190:3000/api/user/login')
            .send({ username, password });
      
          if (response.status === 200) {
            await AsyncStorage.setItem('token', response.body.token);
            // Save the plate number in AsyncStorage when user logs in or registers
            await AsyncStorage.setItem('plate', response.body.plate);
            // Save the user data (and token, if applicable) to local storage or state management
            // localStorage.setItem('userInfo', JSON.stringify(response.body.user));
            // Navigate to the 'Home' screen
            navigation.navigate('Home');
          } else {
            // Display error message
            console.error('Error during authentication:', response.body.message);
          }
        } catch (error) {
          console.error('Error during authentication:', error.message);
        }
      };
      

      const RegisterationPress = () => {
        navigation.navigate('Registeration');
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
            onChangeText={text => setUsername(text)}
            value={username}
        />
        <Text style={styles.textInputLoginLabelPassword}>Password</Text>
        <TextInput 
            style={styles.textInput}
            placeholder='Password'
            onChangeText={text => setPassword(text)}
            value={password}
            secureTextEntry={true}
        />
        <View style={styles.buttonContainer}>
            <Pressable style={styles.buttonStyle} onPress={handlePress}>
                <Text style={styles.signinBtnTxt}>Signin</Text>
            </Pressable>
        </View>
        <TouchableOpacity style={{marginBottom: 170}} onPress={RegisterationPress}>
            <Text style={{textAlign:'center', color:'white',}}>Don't have an account? Create account</Text>
        </TouchableOpacity>
      </View>
      
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
    
    container: {
      width:'100%',
      height:'100%',
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

