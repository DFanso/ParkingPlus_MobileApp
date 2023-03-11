import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { TailwindProvider } from 'tailwindcss-react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';
import ParkingListScreen from './screens/ParkingListScreen';
import ParkingSpotDetailsScreen from './screens/ParkingSpotDetailsScreen';
import PaymentPage from './screens/PaymentPage';
import SplashScreen from './screens/SplashScreen';
import QRScreen from './screens/QRScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <TailwindProvider>
        <Stack.Navigator>
          <Stack.Screen name="Splash" component={SplashScreen}/>
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Home" component={HomeScreen}/>
          <Stack.Screen name="ParkingList" component={ParkingListScreen}/>
          <Stack.Screen name="ParkingSpotDetail" component={ParkingSpotDetailsScreen}/>
          <Stack.Screen name="Payment" component={PaymentPage}/>
          <Stack.Screen name="QR" component={QRScreen}/>
        </Stack.Navigator>
      </TailwindProvider>
    </NavigationContainer>
    
    
  );
}
