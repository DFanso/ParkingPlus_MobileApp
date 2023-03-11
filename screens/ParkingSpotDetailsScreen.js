import { SafeAreaView,View, Text, StyleSheet,Image,TouchableOpacity } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { StatusBar } from 'expo-status-bar'
import { useNavigation } from '@react-navigation/native';
import { UserCircleIcon, MapPinIcon,Bars3Icon} from 'react-native-heroicons/outline';
import ParkingSpotDetails from '../components/ParkingSpotDetails';

const ParkingSpotDetailsScreen = () => {
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
      <View style={styles.HomeImageCar}>
        <Image source={require('../assets/ParkingSpotCar.png')}/>
      </View>
      <View style={styles.locationCityContainer}>
        <MapPinIcon color='#E3D33C' size={30} marginRight={10}/>
        <Text style={styles.textCity}>Colombo, Sri Lanka</Text>
      </View>
      <View style={styles.ParkingSpotDetailContainer}>
        <View style={styles.SpotDetailsCard}>
          <ParkingSpotDetails/>
        </View>
        <View style={styles.SpotDetailsCard}>
          <Image source={{uri: 'https://bmkltsly13vb.compat.objectstorage.ap-mumbai-1.oraclecloud.com/cdn.ft.lk/assets/uploads/image_79fb177b04.jpg'}} style={styles.SpotImage}/>
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
    HomeImageCar:{
        flexDirection: 'row',
        justifyContent: 'center',
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
    },
    ParkingSpotDetailContainer: {
      height: '100%',
      paddingTop: 20,
      backgroundColor: '#E3D33C',
      borderTopLeftRadius: 45,
      borderTopRightRadius: 45,
  },
  SpotDetailsCard: {
    flexDirection: 'row',
    justifyContent: 'center',
    height: '100%',
  },
  SpotImage: {
    width: '80%',
    height: '20%',
    borderRadius: 20,
    marginTop: -510,
  }
    
})
export default ParkingSpotDetailsScreen