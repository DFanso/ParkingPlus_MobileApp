import { View, Text, StyleSheet, Pressable } from 'react-native'
import React from 'react'
import { ClockIcon, MapPinIcon,CurrencyDollarIcon, BookmarkIcon, StarIcon} from 'react-native-heroicons/outline';

const PaymentDetailsComponent = () => {
  return (
    <View style={styles.container}>
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
                <Text style={styles.columnText}>Entered Time - Exited Time</Text>
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
        <Pressable style={styles.paynowBtn}>
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