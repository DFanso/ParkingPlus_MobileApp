import { View, Text, StyleSheet, ScrollView } from 'react-native';
import React, { useState, useEffect } from 'react';
import ParkingCardComponent from './ParkingCardComponent';

const ParkingListComponent = () => {
  const [inactiveSessions, setInactiveSessions] = useState([]);
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
  const fetchInactiveSessions = async () => {
    try {
      const response = await fetch('http://20.2.80.190:3000/api/bookings/inactive-sessions'); // Replace the URL and endpoint with your own
      const data = await response.json();
      setInactiveSessions(data);
    } catch (error) {
      console.error('Error fetching inactive sessions data:', error);
    }
  };

  useEffect(() => {
    fetchInactiveSessions();
  }, []);

  function formatMongoDBTime(timestamp) {
    const date = new Date(timestamp);
    const hours = date.getHours();
    const minutes = date.getMinutes();

    const formattedTime = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;
    return formattedTime;
  }

  function formatMongoDBDate(timestamp) {
    const date = new Date(timestamp);
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();

    const formattedDate = `${year}-${month.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`;
    return formattedDate;
  }

  return (
    <View style={styles.ParkingListContainer}>
      <ScrollView
        style={{ height: '70%' }}
        contentContainerStyle={{
          flexGrow: 1,
          paddingVertical: 15,
        }}
        verticle
        showsVerticalScrollIndicator={false}
      >
        {inactiveSessions.map((session) => (
          <ParkingCardComponent
            key={session._id}
            title={parkingSpot.name}
            location={parkingSpot.location} // Assuming the location is in the session object
            startedTime={formatMongoDBTime(session.startTime)}
            endedTime={formatMongoDBTime(session.endTime)}
            date={formatMongoDBDate(session.startTime)}
          />
        ))}
      </ScrollView>
    </View>
  );
};

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
    fontSize: 25,
    fontWeight: 700,
  },
});

export default ParkingListComponent;
