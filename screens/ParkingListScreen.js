import { SafeAreaView,View, Text, StyleSheet,Image, TouchableOpacity } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { StatusBar } from 'expo-status-bar'
import { useNavigation } from '@react-navigation/native';
import { UserCircleIcon, MapPinIcon,Bars3Icon} from 'react-native-heroicons/outline';
import ParkingListComponent from '../components/ParkingListComponent';


const ParkingListScreen = () => {
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
      <View>
        <Image source={require('../assets/ParkingListCar.png')} style={styles.HomeImageCar} />
      </View>
      <View style={styles.locationCityContainer}>
            <MapPinIcon color='#E3D33C' size={30} marginRight={10}/>
            <Text style={styles.textCity}>Colombo, Sri Lanka</Text>
        </View>
      <View style={styles.ParkingListComponentStyle}>
        <ParkingListComponent/>
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
    ParkingListComponentStyle: {
        height: '100%',
    },
    locationCityContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 10,
    },
    textCity: {
        color: 'white',
        fontSize: 25,
        fontWeight: 700,
    }
})
export default ParkingListScreen