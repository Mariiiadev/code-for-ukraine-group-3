import { StatusBar } from 'expo-status-bar';
import { View, Text, SafeAreaView, ImageBackground, StyleSheet, Image, ScrollView, TouchableOpacity, Alert, Switch, Button, TextInput, Keyboard} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { useState } from 'react';
import { styles } from "../styles";

export default function SignUp () {
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigation = useNavigation();
    return (
        <ImageBackground source={require('../assets/LogIn.png')} style={styles.image}>
        <View style={styles.container}>
    <View style={styles.hiContainer}>
            <Text style={[styles.hiText, { fontSize: 24}]}  >Welcome!</Text>
            <Image
            style={styles.logo}
            source={require('../assets/logo.png')}/>
        </View>
    <View style={styles.loginContainer}>
            <Text style={[styles.login, {color: 'white', fontSize: 18}]}>First name:</Text>
            <TextInput style={styles.loginbar}
                value={name}
                onChangeText={setEmail}
                placeholder={""}>
            </TextInput>
            <Text style={[styles.login, {color: 'white', fontSize: 18}]}>Last name:</Text>
            <TextInput style={styles.loginbar}
                value={surname}
                onChangeText={setEmail}
                placeholder={""}>
            </TextInput>
            <Text style={[styles.login, {color: 'white', fontSize: 18}]}>Email:</Text>
            <TextInput style={styles.loginbar}
                value={email}
                onChangeText={setEmail}
                placeholder={""}>
            </TextInput>
            <Text style={[styles.login, {color: 'white', fontSize: 18}]}>Password:</Text>
            <TextInput style={styles.loginbar}
                value={password}
                onChangeText={setPassword}
                placeholder={""}>
            </TextInput>
            </View>
        <TouchableOpacity
            onPress={() => {
            navigation.navigate("MainTabs")}}
            style={[styles.StartButton, { backgroundColor: '#F7C051', marginTop: 10 }]}>
            <Text style={{ color: 'black', fontWeight: '600', fontSize: 16 }}>Next</Text>
        </TouchableOpacity>
            <Text style={[styles.signupText, { fontSize: 17}]}>  Do you have an account?</Text>
        <TouchableOpacity
            onPress={() => { 
                Keyboard.dismiss();
                navigation.navigate("LogIn");
            }}
            style={styles.SignUpButton}>
            <Text style={{ color: 'Black', fontSize: 17, fontWeight: 'bold' }}>Log In</Text>
        </TouchableOpacity>
        </View>
        </ImageBackground>
    )
}