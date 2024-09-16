import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context'; // Import SafeAreaProvider
import { StyleSheet, View } from 'react-native';
import LoginScreen from './src/screens/Login';
import RegisterScreen from './src/screens/Register';
import BottomNavigationComponent from './src/navigation/BottomNavigation';
import FontLoader from './src/requirments/Font';
import SchemeDetails from './src/screens/SchemeDetails';

const Stack = createStackNavigator();

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <FontLoader>
          <StatusBar 
            backgroundColor="#b27a30"  // StatusBar background color
            barStyle="light-content"   // Light content for white icons on dark background
          />
          
          <Stack.Navigator initialRouteName="BottomNavigationComponent">
            <Stack.Screen
              name="Login"
              component={LoginScreen}
              options={{ headerShown: false }}
            />

            <Stack.Screen
              name="RegisterScreen"
              component={RegisterScreen}
              options={{ headerShown: false }}
            />

            <Stack.Screen
              name="BottomNavigationComponent"
              component={BottomNavigationComponent}
              options={{ headerShown: false }}
            />

<Stack.Screen
              name="SchemeDetails"
              component={SchemeDetails}
              options={{ headerShown: false }}
            />

            {/* Add other screens here */}
          </Stack.Navigator>
        </FontLoader>
      </NavigationContainer>
    </SafeAreaProvider>
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
