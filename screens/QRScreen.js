import { View, Text, SafeAreaView, StyleSheet, TouchableOpacity, Button} from 'react-native'
import { UserCircleIcon, MapPinIcon,Bars3Icon, QrCodeIcon} from 'react-native-heroicons/outline';
import React, { useEffect, useLayoutEffect, useState } from 'react'
import { StatusBar } from 'expo-status-bar'
import { useNavigation } from '@react-navigation/native';
import { Camera, CameraType } from 'expo-camera';
import { BarCodeScanner } from 'expo-barcode-scanner';


const QRScreen = () => {
  const navigation = useNavigation();
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const [scannedData, setScannedData] = useState(null);
  
  useEffect(() => {
  (async () => {
  const { status } = await BarCodeScanner.requestPermissionsAsync();
  setHasPermission(status === 'granted');
  })();
  }, []);
  
  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    setScannedData(data);
  };
  
  const handlePress = () => {
  navigation.navigate('ParkingList');
  };
  
  useLayoutEffect(() => {
  navigation.setOptions({
  headerShown: false,
  });
  }, []);
  
  if (hasPermission === null) {
  return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
  return <Text>No access to camera</Text>;
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="light" />
      <View style={styles.MenuContainer}>
        <View style={styles.menuItems}>
          <TouchableOpacity>
            <Bars3Icon color='#E3D33C' size={30} />
          </TouchableOpacity>
          <TouchableOpacity>
            <UserCircleIcon color='#E3D33C' size={30} />
          </TouchableOpacity>
          <TouchableOpacity onPress={handlePress}>
            <MapPinIcon color='#E3D33C' size={30} />
          </TouchableOpacity>
        </View>
        <Text style={styles.logo}>Parking+</Text>
      </View>
      <View style={styles.SelectedParkingSpot}>
        <QrCodeIcon color='yellow' size={30} marginRight={20} />
        <Text style={styles.ParkingTitle}>Scan The QR Code</Text>
      </View>
      <View style={styles.YellowContainer}>
      <View style={styles.QRContainer}>
        <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
          style={StyleSheet.absoluteFillObject}
        />
      </View>
      {scanned && (
          <Button
            title={'Tap to Scan Again'}
            onPress={() => setScanned(false)}
          />
        )}
        <View style={styles.Details}>
          <Text style={styles.DetailsText}>Entry Time: {scannedData}</Text>
        </View>
    </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container: {
        height: "100%",
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
        marginBottom: 30,
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
        height: '100%',
        marginTop: 30,
        borderRadius: 27,
        padding:30,
    },
    QRContainer: {
        backgroundColor: 'white',
        width: '100%',
        height: '45%',
        borderRadius: 15,
    },
    Details: {
      width: '100%',
      height: '20%',
      backgroundColor: 'rgba(0, 0, 0, 0.8)',
      borderRadius: 15,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
    },
    DetailsText: {
      color: 'white',
      fontSize: 20,
      fontWeight:500,
    }
})
export default QRScreen