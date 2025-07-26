import { StatusBar } from 'expo-status-bar';
import { View, Text, SafeAreaView, ImageBackground, StyleSheet, Image, ScrollView, TouchableOpacity, Alert, Switch, Button, TextInput, Keyboard } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { useState } from 'react';
import { styles } from "../styles";


export default function LogIn () {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();
  return (
    <ImageBackground source={require('../assets/LogIn.png')} style={styles.backgroundPic}>
    <View style={styles.container}>
    <View style={styles.hiContainer}>
      <Text style={[styles.hiText, { fontSize: 24, fontWeight: '5dv00'}]}  >Вітаємо!</Text>
      <Image
        style={styles.logo}
        source={require('../assets/logo.png')}/>
    </View>
      <View style={styles.loginContainer}>
        {/* <TextInput style={styles.loginbar}
         value={email}
         onChangeText={setEmail}
         placeholder={"Ім'я користувача"}>
        </TextInput>
        <TextInput style={styles.loginbar}
         value={email}
         onChangeText={setEmail}
         placeholder={"Прізвище"}>
        </TextInput> */}
        <Text style={[styles.login, {color: 'white', fontSize: 18}]}>Електронна адреса:</Text>
        <TextInput style={styles.loginbar}
         value={email}
         onChangeText={setEmail}
         placeholder={""}>
        </TextInput>
        <Text style={[styles.login, {color: 'white', fontSize: 18}]}>Пароль:</Text>
        <TextInput style={styles.loginbar}
         value={password}
         onChangeText={setPassword}
         placeholder={""}>
        </TextInput>
      </View>
      <TouchableOpacity
                onPress={() => {
                  navigation.navigate("MainTabs")
                }}
                style={[styles.StartButton, { backgroundColor: '#F7C051', marginTop: 10 }]}
              >
              <Text style={{ color: 'black', fontSize: 16, fontWeight: '600'}}>Далі</Text>
              </TouchableOpacity>
      <Text style={[styles.signupText, { fontSize: 17 }]}> Ще не маєте акаунту?</Text>
      <TouchableOpacity
        onPress={() => { 
          Keyboard.dismiss();
          navigation.navigate("SignUp");
        }}
        style={styles.SignUpButton}>
        <Text style={{ color: 'Black', fontSize: 17, fontWeight: 'bold' }}>Sign Up</Text>
      </TouchableOpacity>
    </View>
    </ImageBackground>
  );
}
