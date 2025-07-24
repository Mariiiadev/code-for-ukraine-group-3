import { StatusBar } from 'expo-status-bar';
import { View, ImageBackground,Text, SafeAreaView, StyleSheet, Image, ScrollView, TouchableOpacity, Alert, Switch, Button, TextInput} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { useState } from 'react';


import {styles} from '../styles.js';

function TitleText(props) {
  return (
    <Text style={styles.titleText}>{props.title}</Text>
  ) 
};

function ParaghText(props) {
  return (
    <Text style={styles.paragraph}>{props.content}</Text>
  )
};

function InfoInput (props) {
  const [Text, SetText]=useState("")
  return(
    <TextInput 
    value={Text} 
    onChangeText={SetText}
    placeholder="Type here.." />
  )
}


export default function AddZdir () {
  return (
    <View style={styles.container}>
      <ImageBackground source = {require('../assets/background.png')} style={styles.backgroundPic}>
        <ScrollView style={styles.scrollView} >
            <TitleText title={"Додати збір"} />
            <Image source={require("../assets/addPicture.webp")} style={styles.addPicture} />
            <ParaghText content={"Додати зображення"} />
            <InfoInput />
            <ParaghText content={"Назва збору"} />
            <InfoInput />
            <ParaghText content={"Категорія збору"} />
            <InfoInput />
        </ScrollView>  
      </ImageBackground>
      <StatusBar style="auto" />
    </View>
  );
}

