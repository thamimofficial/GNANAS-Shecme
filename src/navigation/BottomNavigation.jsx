import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Text, StyleSheet, View } from 'react-native';
import HomeScreen from '../screens/Home';
import NoticeScreen from '../screens/Noticce';
import LoginScreen from '../screens/Login';
import RegisterScreen from '../screens/Register';
import OtpScreen from '../screens/OtpScreen';

const Tab = createBottomTabNavigator();

// Placeholder component for Home (replace with your actual component)
const Home = () => {
  return (
    <View style={styles.container}>
      <Text>Home Screen</Text>
    </View>
  );
};

const BottomNavigationComponent = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'HomeScreen') {
            iconName = 'home';
          } else if (route.name === 'Roster') {
            iconName = 'assignment';
          } else if (route.name === 'NoticeScreen') {
            iconName = 'notifications';
          } else if (route.name === 'More') {
            iconName = 'more-horiz';
          }

          return <Icon name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'white',
        tabBarInactiveTintColor: '#1e1e1e',
        tabBarStyle: {
          backgroundColor: '#b27a30',
          height: 70,
          paddingTop: 5,
        },
        tabBarLabel: ({ color }) => {
          let label;
          if (route.name === 'HomeScreen') label = 'Home';
          else if (route.name === 'Roster') label = 'Roster'; // Fixed name here
          else if (route.name === 'NoticeScreen') label = 'Notice';
          else if (route.name === 'More') label = 'More';

          return <Text style={[styles.labelStyle, { color }]}>{label}</Text>;
        },
      })}
    >
      <Tab.Screen name="HomeScreen" component={HomeScreen} />
      <Tab.Screen name="NoticeScreen" component={NoticeScreen} />
      
      <Tab.Screen name="LoginScreen" component={LoginScreen} />
      
      <Tab.Screen name="RegisterScreen" component={RegisterScreen} />

      <Tab.Screen name="OtpScreen" component={OtpScreen} />
      {/* Add other screens here */}
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  labelStyle: {
    fontFamily: 'Outfit-Bold',
    textAlign: 'center',
    marginBottom: 10,
    fontSize: 10,
    width: '100%',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default BottomNavigationComponent;
