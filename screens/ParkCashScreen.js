import { View, Text, StyleSheet, Pressable,ScrollView, TouchableOpacity } from 'react-native'
import React, { useLayoutEffect, useState, useEffect } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { UserCircleIcon,ClockIcon, WalletIcon} from 'react-native-heroicons/outline';
import AsyncStorage from '@react-native-async-storage/async-storage';
const ParkCashScreen = () => {

    const navigation = useNavigation();

    const [paymentUrl, setPaymentUrl] = useState(null);
    const [userDetails, setUserData] = useState({
      username: '',
      email: '',
      phone: '',
      plate: '',
      cash: '',
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
    useEffect(() => {
        createPayment();
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
    
    const createPayment = async () => {
      try {
        const response = await fetch('http://20.2.80.190:3000/create-payment');
        const data = await response.json();
        console.log(data); // <-- add this line to log the data
        const { approvalLink } = data;
        setPaymentUrl(approvalLink);
      } catch (error) {
        console.error('Failed to create payment:', error);
      }
    };
    

    const [selectedOption, setSelectedOption] = useState('');
    const [showPayment, setShowPayment] = useState(false);

    useLayoutEffect(()=> {
        navigation.setOptions({
            headerShown: false,
        })
    }, [])

    const handleSelectOption = (option) => {
      setSelectedOption(option);
      setShowPayment(true);
    };
    
    const PaypalScreen = () =>{
      navigation.navigate('PayPal');
    }
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
      <View style={styles.SelectedParkingSpot}>
        <WalletIcon color='yellow' size={30} marginRight={20}/>
        <Text style={styles.ParkingTitle}>Park+ Card</Text>
      </View>
      <View style={styles.YellowContainer}>
        <View style={{backgroundColor: 'rgba(0,0,0,0.8)', width: '100%', height: '60%', borderRadius: 20, padding: 20,}}>
            <Text style={{color: 'white', fontSize: 25, fontWeight: 700,}}> Full Name</Text>
            <Text style={{color: 'white', fontSize: 25, fontWeight: 500, marginTop: 35,}}> Parking Cash Card</Text>
            <Text style={{color: 'white', fontSize: 25, fontWeight: 700,textAlign: 'right', marginTop: 25,}}> Rs.{userDetails.cash}</Text>
        </View>
        <View style={{width:'100%', height:'30%',flexDirection:'row', alignItems: 'center', justifyContent:'center'}}>
            <Pressable style={{backgroundColor:'rgba(0,0,0,0.8)', width: '70%', height: '70%', borderRadius: 20,marginTop:20, flexDirection:'row', alignItems:'center', justifyContent:'center'}} onPress={PaypalScreen}>
                <Text style={{color: 'white', fontSize:25, fontWeight: 700,}}>Top Up Card</Text>
            </Pressable>
        </View>
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
    SelectedParkingSpot: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 60,
    },
    ParkingTitle: {
        fontSize: 30,
        fontWeight: 700,
        color: 'white',
    },
    YellowContainer: {
        backgroundColor: '#E3D33C',
        width: '100%',
        height: '52%',
        marginTop: 30,
        borderRadius: 27,
        padding:30,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
,    },
    PaymentBtnContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 20,
      },
      paymentBtn: {
            width: 150,
            height: 50,
            marginLeft: 100,
            backgroundColor: 'white',
            borderRadius: 30,
            color: 'black',
            padding: 10,
            alignItems: 'center',
            justifyContent: 'center',
            paddingVertical: 12,
            paddingHorizontal: 32,
            elevation: 3,
            marginLeft: -5,
      },
      paymentBtnCost: {
        width: 150,
            height: 50,
            marginLeft: 100,
            backgroundColor: 'white',
            borderRadius: 30,
            color: 'black',
            padding: 10,
            alignItems: 'center',
            justifyContent: 'center',
            paddingVertical: 12,
            paddingHorizontal: 32,
            elevation: 3,
            marginLeft: 20,
      },
      btnText: {
        fontWeight: 700,
        fontSize: 20,
      },
})
export default ParkCashScreen