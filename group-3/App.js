import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from "./screens/Home";
import Profile from "./screens/Profile";
import AddZbir from "./screens/AddZbir";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function MainTabs(){
    return(
        <Tab.Navigator>
                <Tab.Screen name="Home" component={Home} options={{headerShown: false}}/>
                <Tab.Screen name="AddZbir" component={AddZbir} options={{headerShown: false}}/>
                <Tab.Screen name="Profile" component={Profile} options={{headerShown: false}}/>
        </Tab.Navigator>
    )
}

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="MainTabs">
                <Stack.Screen name="MainTabs" component ={MainTabs} options={{headerShown:false}}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}