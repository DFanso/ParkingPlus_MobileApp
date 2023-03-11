import { View, Text,StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';

const ParkingCardComponent = () => {
    const navigation = useNavigation();

    const handlePress = () => {
        navigation.navigate('ParkingSpotDetail');
      };
  return (
    <View style={styles.container}>
        <TouchableOpacity style={styles.ParkingCardComponentStyle} onPress={handlePress}>
            <View>
                <Text style={styles.textTitle}>Title of the place</Text>
                <Text style={styles.textSubtitle}>Address: 123 Main St</Text>
                <Text style={styles.textSubtitle}>Time: 2:00 PM - 4:00 PM</Text>
                <Text style={styles.textSubtitle}>Distance: 2 miles</Text>
            </View>
            <View style={styles.TimeContainer}>
                <Text style={styles.distanceTxt}>1.2km</Text>
            </View>
        </TouchableOpacity>
    </View>
  )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    ParkingCardComponentStyle:{
        flex: 1,
        flexDirection: 'row',
        width: '90%',
        padding: 16,
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        borderRadius: 8,
        margin: 20,
    },
    textTitle: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 20,
        marginBottom: 8,
    },
    textSubtitle: {
        color: 'white',
        fontSize: 16,
        marginBottom: 4,
    },
    TimeContainer:{
        width:70,
        height:100,
        backgroundColor:'rgba(222,203,24,0.3)',
        marginLeft: 50,
        borderRadius: 8,
    },
    distanceTxt: {
        fontSize: 38,
        fontWeight: 700,
        textAlign: 'center',
        color: 'white',
    }
})
export default ParkingCardComponent