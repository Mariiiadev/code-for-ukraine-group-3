import { StatusBar } from 'expo-status-bar';
import { View, ImageBackground,Text, SafeAreaView, StyleSheet, Image, ScrollView, TouchableOpacity, Alert, Switch, Button, TextInput} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { useState } from 'react';
import {styles} from '../styles.js';


export default function SoldiersHelp() { 
    const alert = Alert;
    const navigation = useNavigation();
    return (
        <ImageBackground source={require('../assets/background.png')} style={styles.image}> 
              <View style={styles.backButtonCont}>
                <TouchableOpacity style={styles.backButton}
                onPress={() => { 
                navigation.goBack();
                }}>
                  <Image source = {require('../assets/backButton.png.png')} style={styles.backButtonImg} />
                </TouchableOpacity>
              </View>
        <View style={styles.container}>
            <View style={styles.medContainer}>
            <Text style={[styles.medText, { fontSize: 30, fontWeight: '500' }]}>Support for the military</Text>
            </View>
            <ScrollView style={styles.scrollViewMedicalContent}>
                <TouchableOpacity
                onPress={() => {
                    alert.alert('This is a medical help item!');
                }}>
            <View style={styles.medInfoContainer}>
            <View style={styles.imagandtextContainer}>
                    <Image source={require('../assets/zbir2.1.png')} style={styles.medImage} />
                    <View style={styles.medInfoTextContainer}>
                    <Text style={[styles.medInfoText, { fontWeight: '800' }]}> Author fee </Text>
                    <Text style={styles.medInfoText}> Author: CO "Kryla"</Text>
                    <Text style={styles.medInfoText}> Amount: 100 000 UAH</Text>
                    </View>
                    </View>
                <Image source={require('../assets/progresbar65.png')} style={styles.progressbar} />
        </View> 
        <View style={styles.medInfoContainer}>
        <View style={styles.imagandtextContainer}>
                    <Image source={require('../assets/zbir2.2.png')} style={styles.medImage} />
                    <View style={styles.medInfoTextContainer}>
                    <Text style={[styles.medInfoText, { fontWeight: '800' }]}> Accomplice </Text>
                    <Text style={styles.medInfoText}> Author: CO "Kryla"</Text>
                    <Text style={styles.medInfoText}> Amount: 100 000 UAH</Text>
                    </View>
                    </View>
            <Image source={require('../assets/progresbar48.png')} style={styles.progressbar} />
        </View> 
        <View style={styles.medInfoContainer}>
        <View style={styles.imagandtextContainer}>
                    <Image source={require('../assets/zbir2.3.png')} style={styles.medImage} />
                    <View style={styles.medInfoTextContainer}>
                    <Text style={[styles.medInfoText, { fontWeight: '800' }]}> Summer in Pokrovsk </Text>
                    <Text style={styles.medInfoText}> Author: CO "Kryla"</Text>
                    <Text style={styles.medInfoText}> Amount: 100 000 UAH</Text>
                    </View>
                    </View>
                <Image source={require('../assets/progresbar12.png')} style={styles.progressbar} />
        </View> 
        <View style={styles.medInfoContainer}>
        <View style={styles.imagandtextContainer}>
                    <Image source={require('../assets/zbir2.4.png')} style={styles.medImage} />
                    <View style={styles.medInfoTextContainer}>
                    <Text style={[styles.medInfoText, { fontWeight: '800' }]}> Summer in Pokrovsk </Text>
                    <Text style={styles.medInfoText}> Author: CO "Kryla"</Text>
                    <Text style={styles.medInfoText}> Amount: 100 000 UAH</Text>
                    </View>
                    </View>
                <Image source={require('../assets/progresbar0.png')} style={styles.progressbar} />
        </View> 
                
                </TouchableOpacity>
            </ScrollView>
        </View>
        </ImageBackground>
    );
}