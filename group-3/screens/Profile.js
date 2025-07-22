import { StatusBar } from 'expo-status-bar';
import { View, Text, SafeAreaView, StyleSheet, Image, ScrollView, TouchableOpacity, Alert, Switch, Button, TextInput} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { useState } from 'react';


function TitleText(props) {
  return (
    <Text>{props.title}</Text>
  ) 
}

export default function App () {
  return (
    <View style={styles.container}>
      <Text>Hello there is a Profile page</Text>
      <TitleText title={"Profile"}/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    // стилі для заголовка Довіряй. Допомагай. Донать
  }


});