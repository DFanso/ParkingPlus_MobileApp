import { View, Text, StyleSheet, Pressable } from 'react-native'
import { ClockIcon, MapPinIcon,CurrencyDollarIcon, BookmarkIcon, StarIcon} from 'react-native-heroicons/outline';
import { useNavigation } from '@react-navigation/native';
import Toast from 'react-native-toast-message';
import React, { useLayoutEffect, useState, useEffect } from 'react'
import PaypalComponent from './PayPalComponent';

const PaymentDetailsComponent = (props) => {
  const navigation = useNavigation();
  // Calculate the Price
  const calculateParkingFees = (enteredTime, exitedTime) => {
    const entered = new Date(enteredTime);
    const exited = new Date(exitedTime);
    const difference = Math.abs(exited - entered);
    const hours = Math.ceil(difference / (1000 * 60 * 60));
  
    let cost = 100;
    if (hours > 1) {
      cost += (hours - 1) * 120;
    }
    console.log(cost);
    return { hours, cost };
  };
  
  // End
  // Entered and Exited Time Fetch Start
  // http://20.2.80.190:3000/api/bookings/activesession/641d96e13cd629c02bb8b59f
  const [time, setTime] = useState({});

    const fetchTime = async () => {
        try {
          const response = await fetch('http://20.2.80.190:3000/api/bookings/activesession/641d96e13cd629c02bb8b59f'); // Replace the URL and endpoint with your own
          const data = await response.json();
          setTime(data);
        } catch (error) {
          console.error('Error fetching parking spot data:', error);
        }
      };

      useEffect(() => {
        fetchTime();
      }, []);
  // End

  // DataFetch Start
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

      // Data Fetch end
      const [parkingHours, setParkingHours] = useState(0);
      const [totalCost, setTotalCost] = useState(0);

      const handlePayNow = () => {
        const { hours, cost } = calculateParkingFees(time.enterTime, time.endedTime);
        setParkingHours(hours);
        setTotalCost(cost);
        console.log(cost)
      };

  return (
    <View style={styles.container}>
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
                <Text style={styles.columnText}>{time.enterTime} - {time.endedTime}</Text>
            </View>
      </View>
      <View style={styles.PaymentBtnContainer}>
        <Pressable style={styles.paymentBtn}>
            <Text style={styles.btnText}>Total Hours</Text>
        </Pressable>
        <Pressable style={styles.paymentBtnCost}>
          <Text style={styles.btnText}>Total Cost</Text>
        </Pressable>
      </View>
      <View style={styles.payNowContainer}>
        <Pressable style={styles.paynowBtn} onPress={handlePayNow}>
          <Text style={styles.btnText}>Pay Now</Text>
        </Pressable>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(0,0,0,0.8)',
    height:"100%",
    width: '100%',
    borderRadius: 25,
    padding: 25,
  },
  columnContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  columnText:{
    color: 'white',
  },
  PaymentBtnContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
  },
  paymentBtn: {
        width: 150,
        height: 40,
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
        height: 40,
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
  paynowBtn: {
    width: 150,
    height: 40,
    marginLeft: 100,
    backgroundColor: '#E3D33C',
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
  btnText: {
    fontWeight: 700,
    fontSize: 15,
  },
  payNowContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  }
})
export default PaymentDetailsComponent