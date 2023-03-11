import { View, Text,StyleSheet, Pressable } from 'react-native'
import React from 'react'
import { ClockIcon, MapPinIcon,CurrencyDollarIcon, BookmarkIcon, StarIcon} from 'react-native-heroicons/outline';
import { useNavigation } from '@react-navigation/native';

const ParkingSpotDetails = () => {
    const navigation = useNavigation();

    const handlePress = () => {
      navigation.navigate('Payment');
    };
  return (
    <View style={styles.container}>    
        <Text style={styles.txtHeading}>Keells Supermarket</Text>
        <View style={styles.spotFlexContainer}>
            <View style={styles.columnContainer}>
                <MapPinIcon color='white' paddingRight={50}/>
                <Text style={styles.columnText}>No.21, Dolekanaththa, Piliyandala</Text>
            </View>
            <View style={styles.columnContainer}>
                <ClockIcon color='white' paddingRight={50}/>
                <Text style={styles.columnText}>9.00am - 9.00pm</Text>
            </View>
            <View style={styles.columnContainer}>
                <CurrencyDollarIcon color='white' paddingRight={50}/>
                <Text style={styles.columnText}>$5/hr</Text>
            </View>
            <View style={styles.columnContainer}>
                <BookmarkIcon color='white' paddingRight={50}/>
                <Text style={styles.columnText}>15 available</Text>
            </View>
            <View style={styles.columnContainer}>
                <StarIcon color='white' paddingRight={50}/>
                <Text style={styles.columnText}>4.7 Rating</Text>
            </View>
        </View>
        <Pressable style={styles.BookBtnContainer} onPress={handlePress}>
            <Text style={styles.BookBtn}>Book Now</Text>
        </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        width: '85%',
        height: '35%',
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        borderRadius: 15,
        padding: 15,
    },
    txtHeading: {
        textAlign: 'center',
        fontSize: 25,
        fontWeight: 700,
        color: 'white',
        marginBottom: 20,
    },
    columnContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 5,
    },
    columnText:{
        color: 'white',
    },
    BookBtnContainer: {
        width: 200,
        height: 60,
        marginLeft: 100,
        backgroundColor: '#E3D33C',
        borderRadius: 30,
        color: 'white',
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        elevation: 3,
    },
    BookBtn: {
        fontSize: 20,
        fontWeight: 600,
    }
})
export default ParkingSpotDetails