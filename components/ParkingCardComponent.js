import { View, Text,StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';

const ParkingCardComponent = (props) => {
    const navigation = useNavigation();

    const handlePress = () => {
        navigation.navigate('ParkingSpotDetail');
      };
  return (
    <View style={styles.container}>
        <TouchableOpacity style={styles.ParkingCardComponentStyle} onPress={handlePress}>
            <View>
                <Text style={styles.textTitle}>{props.title}</Text>
                <Text style={styles.textSubtitle}>{props.location}</Text>
                <Text style={styles.textSubtitle}>Time: {props.startedTime} - {props.endedTime}</Text>
                <Text style={styles.textSubtitle}>Date: {props.date}</Text>
            </View>
        </TouchableOpacity>
    </View>
  )
}
const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    ParkingCardComponentStyle:{
        flex: 1,
        flexDirection: 'row',
        width: '100%',
        padding: 16,
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        borderRadius: 8,
        margin: 15,
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