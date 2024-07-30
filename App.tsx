import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './screens/HomeScreen';
import DetailScreen from './screens/DetailScreen';
import RefreshTestScreen from './screens/RefreshTestSreen';
import LoginScreen from './screens/LoginScreen';
import MapScreen from './screens/MapScreen';
import TravelScreen from './screens/TravelScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="Details" component={DetailScreen} />
                <Stack.Screen name="Refresh" component={RefreshTestScreen} />
                <Stack.Screen name="Login" component={LoginScreen} />
                <Stack.Screen name="Map" component={MapScreen} />
                <Stack.Screen name="Travel" component={TravelScreen} />
            </Stack.Navigator>
        </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
