import { StatusBar } from 'expo-status-bar';
import { View, ImageBackground,Text, SafeAreaView, StyleSheet, Image, ScrollView, TouchableOpacity, Alert, Switch, Button, TextInput} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { useState } from 'react';
import {styles} from '../styles.js';

function MedicalZbir(props) {
    return (
      <View style={styles.medInfoContainer}>
                    <Image source={require('../assets/zbir-example.png')} style={styles.medImage} />
                    <View style={styles.medInfoTextContainer}>
                    <Text style={styles.medInfoText}> Збір на аптечки для ЗСУ! </Text>
                    <Text style={styles.medInfoText}> Автор: БО "Крила"</Text>
                    <Text style={styles.medInfoText}> Сума: 100 000 грн</Text>
                    </View>
                </View>  
    );
}


export default function MedicalHelp() { 
    const alert = Alert;
    const navigation = useNavigation();
    return (
        <ImageBackground source={require('../assets/background.png')} style={styles.image}>
        <View style={styles.container}>
            <View style={styles.medContainer}>
            <Text style={[styles.medText, { fontSize: 30, fontWeight: '500' }]}>Медична Допомога</Text>
            </View>
            <ScrollView style={styles.scrollViewMedicalContent}>
                <TouchableOpacity
                onPress={() => {
                    alert.alert('This is a medical help item!');
                }}>

                <MedicalZbir/>
                <MedicalZbir/>
                <MedicalZbir/>
                <MedicalZbir/>
                
                </TouchableOpacity>
            </ScrollView>
        </View>
        </ImageBackground>
    );
}