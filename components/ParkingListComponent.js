import { View, Text, StyleSheet, ScrollView} from 'react-native'
import React from 'react'
import ParkingCardComponent from './ParkingCardComponent';

const ParkingListComponent = () => {
  
  return (
    <View style={styles.ParkingListContainer}>
      <Text style={styles.parkingText}>Avialable Parking Spots</Text>
      <ScrollView
      contentContainerStyle={{
        paddingTop: 10,
    }}
    verticle
    showsVerticalScrollIndicator={false}>
        <ParkingCardComponent/>
        <ParkingCardComponent/>
        <ParkingCardComponent/>
        <ParkingCardComponent/>
        <ParkingCardComponent/>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
    ParkingListContainer: {
        flex: 2,
        alignItems: 'center',
        height: '100%',
        paddingTop: 20,
        backgroundColor: '#E3D33C',
        borderTopLeftRadius: 45,
        borderTopRightRadius: 45,
    },
    parkingText: {
        color: 'black',
        fontSize:25,
        fontWeight: 700,
    }
});
export default ParkingListComponent