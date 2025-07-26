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
  const navigation = useNavigation();
  return (
    <ImageBackground source={require('../assets/background.png')} style={styles.backgroundPic}>
    <View style={styles.container}>
      <TitleText  title={"Trust."}/>
      <TitleText  title={"Help."}/>
      <TitleText  title={"Donate."}/>
      <Text style={styles.text}>Where will we direct the aid?</Text>
      <StatusBar hidden={true} />
      <TouchableOpacity
      onPress={ () => {
      navigation.navigate("Tech")}}
      style={[styles.Button, styles.shadowProp]}><Text style={styles.Buttontext}>Machinery and equipment</Text></TouchableOpacity>
      <TouchableOpacity
      onPress={ () => {
      navigation.navigate("MedicalHelp")}}
      style={[styles.Button, styles.shadowProp]}><Text style={styles.Buttontext}>Medical help</Text></TouchableOpacity>
      <TouchableOpacity
      onPress={ () => {
      navigation.navigate("SoldiersHelp")}}
      style={[styles.Button, styles.shadowProp]}><Text style={styles.Buttontext}>Support for the military</Text></TouchableOpacity>

    </View>
    </ImageBackground>
  );
}
