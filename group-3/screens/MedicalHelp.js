import { StatusBar } from 'expo-status-bar';
import { View, ImageBackground,Text, SafeAreaView, StyleSheet, Image, ScrollView, TouchableOpacity, Alert, Switch, Button, TextInput} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { useState } from 'react';
import {styles} from '../styles.js';

// function MedicalZbir(props) {
//     return (
       
//     );
// }


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

            <View style={styles.medInfoContainer}>
            <View style={styles.imagandtextContainer}>
                    <Image source={require('../assets/zbir1.0.png')} style={styles.medImage} />
                    <View style={styles.medInfoTextContainer}>
                    <Text style={[styles.medInfoText, { fontWeight: '800' }]}> Збір на Корч </Text>
                    <Text style={styles.medInfoText}> Автор: БО "Крила"</Text>
                    <Text style={styles.medInfoText}> Сума: 100 000 грн</Text>
                    </View>
                    </View>
                    <Image source={require('../assets/progresbar48.png')} style={styles.progressbar} />
            </View> 
            <View style={styles.medInfoContainer}>
            
            <View style={styles.imagandtextContainer}>
                    <Image source={require('../assets/zbir1.1.png')} style={styles.medImage} />
                    <View style={styles.medInfoTextContainer}>
                    <Text style={[styles.medInfoText, { fontWeight: '800' }]}> "На зв'язку" </Text>
                    <Text style={styles.medInfoText}> Автор: БО "Крила"</Text>
                    <Text style={styles.medInfoText}> Сума: 100 000 грн</Text>
                    </View>
                    </View>
                    <Image source={require('../assets/progresbar0.png')} style={styles.progressbar} />
        </View> 
        <View style={styles.medInfoContainer}>
        
            <View style={styles.imagandtextContainer}>
                    <Image source={require('../assets/zbir1.2.png')} style={styles.medImage} />
                    <View style={styles.medInfoTextContainer}>
                    <Text style={[styles.medInfoText, { fontWeight: '800' }]}> Збір на Корча </Text>
                    <Text style={styles.medInfoText}> Автор: БО "Крила"</Text>
                    <Text style={styles.medInfoText}> Сума: 100 000 грн</Text>
                    </View>
                    </View>
                    <Image source={require('../assets/progresbar100.png')} style={styles.progressbar} />
        </View> 
        <View style={styles.medInfoContainer}>
        
            <View style={styles.imagandtextContainer}>
                    <Image source={require('../assets/zbir1.3.png')} style={styles.medImage} />
                    <View style={styles.medInfoTextContainer}>
                    <Text style={[styles.medInfoText, { fontWeight: '800' }]}> Збір на аптечки для ЗСУ! </Text>
                    <Text style={styles.medInfoText}> Автор: БО "Крила"</Text>
                    <Text style={styles.medInfoText}> Сума: 100 000 грн</Text>
                    </View>
                    </View>
                    <Image source={require('../assets/progresbar65.png')} style={styles.progressbar} />
        </View> 
                
                </TouchableOpacity>
            </ScrollView>
        </View>
        </ImageBackground>
    );
}