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
import UserProfileScreen from './screens/UserProfileScreen';
import RegisterScreen from './screens/RegisterScreen';
import PaypalComponent from './components/PayPalComponent';
import ParkCashScreen from './screens/ParkCashScreen';

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
          <Stack.Screen name="QR" component={ParkCashScreen}/>
          <Stack.Screen name="UserProfile" component={UserProfileScreen}/>
          <Stack.Screen name="Registeration" component={RegisterScreen}/>
          <Stack.Screen name="PayPal" component={PaypalComponent}/>
        </Stack.Navigator>
      </TailwindProvider>
    </NavigationContainer>
    
    
  );
}
