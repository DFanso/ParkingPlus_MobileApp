import { View, Text,StyleSheet, Pressable } from 'react-native'
import React, { useState, useEffect } from 'react';
import { ClockIcon, MapPinIcon,CurrencyDollarIcon, BookmarkIcon, StarIcon} from 'react-native-heroicons/outline';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Toast from 'react-native-toast-message';


const ParkingSpotDetails = () => {
    const navigation = useNavigation();

    const [parkingSpot, setParkingSpot] = useState({});

    const fetchParkingSpotData = async () => {
        try {
          const response = await fetch('http://20.2.80.190:3000/api/create-park/641ddd6ced181dc7fff71d0a'); // Replace the URL and endpoint with your own
          const data = await response.json();
          setParkingSpot(data);
        } catch (error) {
          console.error('Error fetching parking spot data:', error);
        }
      };

      useEffect(() => {
        fetchParkingSpotData();
      }, []);
      
    const handlePress = () => {
      navigation.navigate('Payment');
    };
    // Book Now Handle
    const handleBooking = async () => {
      try {
        const plate = await AsyncStorage.getItem('plate');
        if (!plate) {
          console.error('Number plate not found in AsyncStorage');
          return;
        }
    
        const response = await fetch('http://20.2.80.190:3000/api/bookings', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            plate: plate,
          }),
        });
    
        if (response.ok) {
          const data = await response.json();
          if (data.updated) {
            console.log('Booking updated successfully.');
          } else {
            console.log('New booking created successfully.');
          }
          // Display the toast message
          Toast.show({
            type: 'success',
            text1: 'Booking successful',
            visibilityTime: 3000,
          });
        } else {
          throw new Error('Failed to process booking');
        }
      } catch (error) {
        console.error('Error processing booking:', error);
      }
    };
      
  return (
    <View style={styles.container}>    
    <Toast ref={(ref) => Toast.setRef(ref)} />
        <Text style={styles.txtHeading}>{parkingSpot.name}</Text>
        <View style={styles.spotFlexContainer}>
            <View style={styles.columnContainer}>
                <MapPinIcon color='white' paddingRight={50}/>
                <Text style={styles.columnText}>{parkingSpot.location}</Text>
            </View>
            <View style={styles.columnContainer}>
                <ClockIcon color='white' paddingRight={50}/>
                <Text style={styles.columnText}>{parkingSpot.openTime} - {parkingSpot.closeTime}</Text>
            </View>
            <View style={styles.columnContainer}>
                <CurrencyDollarIcon color='white' paddingRight={50}/>
                <Text style={styles.columnText}>${parkingSpot.costPerHour}/ hour</Text>
            </View>
            <View style={styles.columnContainer}>
                <BookmarkIcon color='white' paddingRight={50}/>
                <Text style={styles.columnText}>{parkingSpot.availableSpots} available</Text>
            </View>
            <View style={styles.columnContainer}>
                <StarIcon color='white' paddingRight={50}/>
                <Text style={styles.columnText}>{parkingSpot.rating} Rating</Text>
            </View>
        </View>
        <Pressable style={styles.BookBtnContainer} onPress={handleBooking}>
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