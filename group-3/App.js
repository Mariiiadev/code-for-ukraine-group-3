// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { Ionicons } from '@expo/vector-icons';
// import Home from "./screens/Home";
// import Profile from "./screens/Profile";
// import AddZbir from "./screens/AddZbir";
// import { StatusBar } from 'expo-status-bar';

// const Tab = createBottomTabNavigator();
// const Stack = createNativeStackNavigator();

// function MainTabs() {
//   return (
//     <Tab.Navigator
//       screenOptions={({ route }) => ({
//         headerShown: false,
//         tabBarIcon: ({ focused, color, size }) => {
//           let iconName;

//           if (route.name === 'Home') {
//             iconName = focused ? 'home' : 'home-outline';
//           } else if (route.name === 'AddZbir') {
//             iconName = focused ? 'add-circle' : 'add-circle-outline';
//           } else if (route.name === 'Profile') {
//             iconName = focused ? 'person' : 'person-outline';
//           }

//           return <Ionicons name={iconName} size={30} color={color} />;
//         },
//         tabBarActiveTintColor: '#333',
//         tabBarInactiveTintColor: '#666',
//         tabBarShowLabel: false, // Прибираємо текстові підписи
//         tabBarStyle: {
//           position: 'absolute', // Робимо плаваючим
//           bottom: 20, // Піднімаємо від краю
//           left: 20,
//           right: 20,
//           height: 55  ,
//           backgroundColor: 'transparent', // Повністю прозорий фон
//           borderTopWidth: 0, // Прибираємо верхню лінію
//           elevation: 0, // Прибираємо тінь на Android
//           shadowOpacity: 0, // Прибираємо тінь на iOS
//           borderRadius: 20, // Закруглені краї
//         },
//       })}
//     >
//       <Tab.Screen 
//         name="Home" 
//         component={Home}
//       />
//       <Tab.Screen 
//         name="AddZbir" 
//         component={AddZbir}
//       />
//       <Tab.Screen 
//         name="Profile" 
//         component={Profile}
//       />
//     </Tab.Navigator>
//   );
// }

// export default function App() {
//   return (
//     <NavigationContainer>
//       <StatusBar hidden={true} />
//       <MainTabs />
//     </NavigationContainer>
//   );
// }


import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { useFonts, OpenSans_400Regular, OpenSans_600SemiBold, OpenSans_700Bold } from '@expo-google-fonts/open-sans';
import { ActivityIndicator, View, Text } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import Home from "./screens/Home";
import Profile from "./screens/Profile";
import AddZbir from "./screens/AddZbir";

const Tab = createBottomTabNavigator();

function MainTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
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
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="AddZbir" component={AddZbir} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
}

export default function App() {
  // Завантаження шрифтів
  const [fontsLoaded] = useFonts({
    OpenSans_400Regular,
    OpenSans_600SemiBold,
    OpenSans_700Bold,
  });

  // Показуємо індикатор завантаження поки шрифти не завантажились
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
      <MainTabs />
    </NavigationContainer>
  );
}
