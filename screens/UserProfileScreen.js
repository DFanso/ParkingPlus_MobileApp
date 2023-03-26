import { View, Text, StyleSheet, Pressable, ScrollView, TouchableOpacity, Image } from 'react-native'
import React, { useEffect, useLayoutEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { UserCircleIcon, WalletIcon, ClockIcon } from 'react-native-heroicons/outline';
import UserItem from '../components/UserItem';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import api from '../api';

const UserProfileScreen = () => {
  const navigation = useNavigation();

  const [userDetails, setUserData] = useState({
      username: '',
      email: '',
      phone: '',
      plate: '',
    });

    useEffect(() => {
      const fetchProfile = async () => {
        try {
          const token = await AsyncStorage.getItem('token');
          console.log('Token from AsyncStorage:', token);
          
          const response = await fetch(`http://20.2.80.190:3000/api/user/profile`, {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${token}`,
            },
          });
    
          const data = await response.json();
          setUserData(data);
        } catch (error) {
          console.error('Error fetching profile data:', error);
        }
      };
    
      fetchProfile();
    }, []);

    const handlePress = () => {
      navigation.navigate('ParkingList')
    }
    const QRPress = () => {
      navigation.navigate('QR')
    }
    const UserProfilePress = () => {
      navigation.navigate('UserProfile')
    }
  
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);
  const { username, email, phone, plate } = userDetails;
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="light" />
      <View style={styles.MenuContainer}>
        <View style={styles.menuItems}>
          <TouchableOpacity onPress={QRPress}>
            <WalletIcon color='#E3D33C' size={30}/>
          </TouchableOpacity>
          <TouchableOpacity onPress={UserProfilePress}>
            <UserCircleIcon color='#E3D33C' size={30}/>
          </TouchableOpacity>
          <TouchableOpacity onPress={handlePress}>
            <ClockIcon color='#E3D33C' size={30}/>
          </TouchableOpacity>
        </View>
        <Text style={styles.logo}>Parking+</Text>
      </View>
      <View>
        <Image source={require('../assets/UserProfileSreen.png')} style={styles.HomeImageCar} />
      </View>
      <View style={styles.YellowContainer}>
        <ScrollView style={{ height: '80%' }}
          contentContainerStyle={{
            flexGrow: 1,
            paddingVertical: 15,
            alignItems: 'center'
          }}
          vertical
          showsVerticalScrollIndicator={false}
        >
          <UserItem title="Name" sampleName={username || "N/A"} />
          <UserItem title="Email" sampleName={email || "N/A"} />
          <UserItem title="Phone No" sampleName={phone || "N/A"} />
          <UserItem title="Vehicle No" sampleName={plate || "N/A"} />
        </ScrollView>
      </View>
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
    
    container: {
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.85)',
    },
    logo: {
        color: 'white',
        textAlign: 'right',
        fontWeight: 700,
        fontSize: 30,
    },
    MenuContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignContent: 'center',
        marginTop: 30,
        paddingRight: 30,
    },
    menuItems: {
        flex: 1,
        flexDirection:'row',
        justifyContent: 'space-evenly'
    },
    YellowContainer: {
        backgroundColor: '#E3D33C',
        width: '100%',
        height: '100%',
        borderRadius: 27,
        padding:30,
    },
})

export default UserProfileScreen