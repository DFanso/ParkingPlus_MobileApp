import { View, Text, StyleSheet, Pressable,ScrollView, TouchableOpacity } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { UserCircleIcon, MapPinIcon,Bars3Icon} from 'react-native-heroicons/outline';
import PaymentDetailsComponent from '../components/PaymentDetailsComponent';

const PaymentPage = () => {
    const navigation = useNavigation();

    const handlePress = () => {
      navigation.navigate('ParkingList')
    }
    useLayoutEffect(()=> {
        navigation.setOptions({
            headerShown: false,
        })
    }, [])
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="light" />
      <View style={styles.MenuContainer}>
      <View style={styles.menuItems}>
          <TouchableOpacity>
            <Bars3Icon color='#E3D33C' size={30}/>
          </TouchableOpacity>
          <TouchableOpacity>
            <UserCircleIcon color='#E3D33C' size={30}/>
          </TouchableOpacity>
          <TouchableOpacity onPress={handlePress}>
            <MapPinIcon color='#E3D33C' size={30}/>
          </TouchableOpacity>
        </View>
        <Text style={styles.logo}>Parking+</Text>
      </View>
      <View style={styles.SelectedParkingSpot}>
        <MapPinIcon color='yellow' size={30} marginRight={20}/>
        <Text style={styles.ParkingTitle}>Keells Supermarket</Text>
      </View>
      <View style={styles.YellowContainer}>
        <PaymentDetailsComponent/>
      </View>
      <View style={styles.PaymentBtnContainer}>
        <Pressable style={styles.paymentBtn}>
            <Text style={styles.btnText}>Card</Text>
        </Pressable>
        <Pressable style={styles.paymentBtnCost}>
          <Text style={styles.btnText}>Cash</Text>
        </Pressable>
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
        marginTop: 20,
    },
    ParkingTitle: {
        fontSize: 30,
        fontWeight: 700,
        color: 'white',
    },
    YellowContainer: {
        backgroundColor: '#E3D33C',
        width: '100%',
        height: '42%',
        marginTop: 30,
        borderRadius: 27,
        padding:30,
    },
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
export default PaymentPage