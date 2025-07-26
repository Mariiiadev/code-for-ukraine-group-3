import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { useFonts, OpenSans_400Regular, OpenSans_600SemiBold, OpenSans_700Bold } from '@expo-google-fonts/open-sans';
import { ActivityIndicator, View, Text } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from "./screens/Home";
import Profile from "./screens/Profile";
import AddZbir from "./screens/AddZbir";
import LogIn from "./screens/LogIn";
import SignUp from "./screens/SignUp";
import MedicalHelp from "./screens/MedicalHelp";
import Tech from "./screens/Tech";
import SoldiersHelp from "./screens/SoldiersHelp";
import ZbirInfo from "./screens/ZbirInfo";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function HomeStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="Home">
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="MedicalHelp" component={MedicalHelp} />
      <Stack.Screen name="Tech" component={Tech} />
      <Stack.Screen name="SoldiersHelp" component={SoldiersHelp} />
      <Stack.Screen name="ZbirInfo" component={ZbirInfo} />
    </Stack.Navigator>
  );
}

function MainTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'HomeStack') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'AddZbir') {
            iconName = focused ? 'add-circle' : 'add-circle-outline';
          } else if (route.name === 'Profile') {
            iconName = focused ? 'person' : 'person-outline';
          }

          return <Ionicons name={iconName} size={30} color={color} />;
        },
        tabBarActiveTintColor: '#333',
        tabBarInactiveTintColor: '#666',
        tabBarShowLabel: false,
        tabBarStyle: {
          position: 'absolute',
          bottom: 20,
          left: 20,
          right: 20,
          height: 60,
          backgroundColor: 'transparent',
          borderTopWidth: 0,
          elevation: 0,
          shadowOpacity: 0,
          borderRadius: 20,
        },
      })}
    >
      <Tab.Screen name="HomeStack" component={HomeStack} />
      <Tab.Screen name="AddZbir" component={AddZbir} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
}

export default function App() {
  const [fontsLoaded] = useFonts({
    OpenSans_400Regular,
    OpenSans_600SemiBold,
    OpenSans_700Bold,
  });

  if (!fontsLoaded) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" color="#0000ff" />
        <Text>Завантаження шрифтів...</Text>
      </View>
    );
  }

  return (
    <NavigationContainer>
      <StatusBar hidden={true} />
            <Stack.Navigator initialRouteName="LogIn" screenOptions={{ headerShown: false }}>
              <Stack.Screen name="SignUp" component={SignUp} />
              <Stack.Screen name="LogIn" component={LogIn} />
              <Stack.Screen name="MainTabs" component ={MainTabs} />
            </Stack.Navigator>
    </NavigationContainer>
  );
}
