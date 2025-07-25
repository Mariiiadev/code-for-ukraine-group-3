import { StatusBar } from 'expo-status-bar';
import { View, Text, SafeAreaView, Image, ImageBackground, ScrollView, TouchableOpacity, Alert, Switch, Button, TextInput} from 'react-native';
import { RadialGradient } from 'react-native-gradients';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { useState } from 'react';
import { styles } from "../styles"

function TitleText(props) {
  return (
    <Text style={styles.titletext}>{props.title}</Text>
  ) 
}

export default function Home () {
  return (
    <ImageBackground source={require('../assets/background.png')} style={styles.Image}>
    <View style={styles.container}>
      <TitleText  title={"Довіряй."}/>
      <TitleText  title={"Допомагай."}/>
      <TitleText  title={"Донать."}/>
      <Text style={styles.text}>Куди спрямуємо допомогу?</Text>
      <StatusBar hidden={true} />
      <TouchableOpacity style={[styles.Button, styles.shadowProp]}><Text style={styles.Buttontext}>Техніка та обладнання</Text></TouchableOpacity>
      <TouchableOpacity style={[styles.Button, styles.shadowProp]}><Text style={styles.Buttontext}>Медична допомога</Text></TouchableOpacity>
      <TouchableOpacity style={[styles.Button, styles.shadowProp]}><Text style={styles.Buttontext}>Підтримка військових</Text></TouchableOpacity>
    </View>
    </ImageBackground>
  );
}
