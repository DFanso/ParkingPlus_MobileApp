import { SafeAreaView,View, Text, StyleSheet,Image, TouchableOpacity, TextInput} from 'react-native'
import React, { useLayoutEffect } from 'react'
import { StatusBar } from 'expo-status-bar'
import { useNavigation } from '@react-navigation/native';
import { UserCircleIcon, MapPinIcon,Bars3Icon, QrCodeIcon} from 'react-native-heroicons/outline';
import MapView from 'react-native-maps';

const HomeScreen = () => {
    const navigation = useNavigation();

    const handlePress = () => {
      navigation.navigate('ParkingList')
    }
    const QRPress = () => {
      navigation.navigate('QR')
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
          <TouchableOpacity onPress={QRPress}>
            <QrCodeIcon color='#E3D33C' size={30}/>
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
        <Image source={require('../assets/HomeCar.png')} style={styles.HomeImageCar} />
      </View>
      <View style={styles.destinationContainer}>
        <MapPinIcon color='#E3D33C' size={30}/>
        <Text style={styles.destinationTextStyle}>Colombo, Sri Lanka</Text>
        <TextInput 
        style={styles.txtInputContainer} 
        placeholder='Search' 
        color='white' 
        placeholderTextColor='white'
        />
      </View>
      <View style={styles.MapViewContainer}>
        <MapView
          style={{flex: 1,borderRadius: 15,
          }}
          initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
          }}
        />
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
    HomeImageCar: {
      marginLeft: 100,
    },
    MapViewContainer: {
      width: "100%",
      height: "100%",
      borderColor: "white",
      borderWidth: 20,
      borderTopLeftRadius:35,
      borderTopRightRadius: 35,
    },
    destinationContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-around',
      margin: 10,
    },
    txtInputContainer: {
        color: 'white',
        padding: 20,
        width: 150,
        height:20,
        backgroundColor: 'rgba(217,217,217,0.4)',
        borderRadius: 10,
    },
    destinationTextStyle:{
      fontSize: 20,
      fontWeight: 700,
      color: 'white',
    }
})

export default HomeScreen