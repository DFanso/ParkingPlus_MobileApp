import { SafeAreaView,View, Text,StyleSheet,Image, TextInput, Button, Pressable } from 'react-native'
import React, { useLayoutEffect, useState } from 'react'
import { StatusBar } from 'expo-status-bar';
import { useNavigation } from '@react-navigation/native';
import superagent from 'superagent';


const RegisterScreen = () => {
    const navigation = useNavigation();

    const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [numberplate, setNumberplate] = useState('');
  const [phone, setPhone] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handlePress = async () => {
    if (password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }

    try {
      const response = await superagent
        .post('http://localhost:3000/api/user')
        .send({ username, password, email, numberplate, phone });

      if (response.status === 201) {
        alert('User registered successfully');
        navigation.navigate('Login');
      }
    } catch (error) {
      alert(error.response.body.message);
    }
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
        <Text style={styles.textLogin}>Register</Text>
      </View>
      <View style={styles.textInputContainer}>
        <Text style={styles.textInputLoginLabel}>Username</Text>
        <TextInput 
            style={styles.textInput}
            placeholder='UserName'
            onChangeText={(text) => setUsername(text)}
        />
        <Text style={styles.textInputLoginLabelPassword}>Email</Text>
        <TextInput
            style={styles.textInput}
            placeholder='Email'
            onChangeText={(text) => setEmail(text)}
        />
        <Text style={styles.textInputLoginLabel}>Number-Plate</Text>
        <TextInput 
            style={styles.textInput}
            placeholder='Number-Plate'
            onChangeText={(text) => setNumberplate(text)}
        />
        <Text style={styles.textInputLoginLabelPassword}>Phone No</Text>
        <TextInput 
            style={styles.textInput}
            placeholder='Phone No'
            onChangeText={(text) => setPhone(text)}
        />
        <Text style={styles.textInputLoginLabelPassword}>Password</Text>
        <TextInput 
            style={styles.textInput}
            placeholder='Password'
            onChangeText={(text) => setPassword(text)}
            secureTextEntry
        />
        <Text style={styles.textInputLoginLabelPassword}>Confirm Password</Text>
        <TextInput 
            style={styles.textInput}
            placeholder='Confirm-Password'
            onChangeText={(text) => setConfirmPassword(text)}
            secureTextEntry
        />
        <View style={styles.buttonContainer}>
            <Pressable style={styles.buttonStyle} onPress={handlePress}>
                <Text style={styles.signinBtnTxt}>Signup</Text>
            </Pressable>
        </View>
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
    textLogin: {
     color: 'white',
     fontSize: 60,
     fontWeight: 500,
     textAlign: 'center',
     marginTop: 20,
     marginBottom: 30,
    },
    textInputContainer: {
        flex: 1,
        alignContent: 'left',
    },
    textInputLoginLabel: {
        color: 'white',
        fontSize: 25,
        marginLeft: 40,
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

export default RegisterScreen