import { StatusBar } from 'expo-status-bar';
import { View, ImageBackground,KeyboardAvoidingView, Text, SafeAreaView, StyleSheet, Image, ScrollView, TouchableOpacity, Alert, Switch, Button, TextInput} from 'react-native';
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

function BoldTitle(props) {
  return (
    <Text style={styles.BoldTitle}>{props.content}</Text>
  )
};


export default function ZdirInfo () {
  const navigation = useNavigation();
  return (
    <View style={styles.AddZbircontainer}>
      <ImageBackground source = {require('../assets/background.png')} style={styles.backgroundPic}> 
      <View style={styles.backButtonCont}>
        <TouchableOpacity style={styles.backButton}
        onPress={() => { 
        navigation.goBack();
        }}>
          <Image source = {require('../assets/backButton.png.png')} style={styles.backButtonImg} />
        </TouchableOpacity>
      </View>
        <ScrollView style={styles.scrollView2} >
          <View style={styles.ZbirInfoTitle} >
            <TitleText title={"Thunder for the enemy"} />
          </View> 
          <View style={styles.ImgTextContainer}>
            <View style={styles.ImagePicker}> 
              <Image source={require("../assets/zbir3.1.png")} style={styles.ZbirInfoImg} />
            </View>
            <View style={styles.TextContainer1}>
              <View style={styles.AuthZbir}>
                <BoldTitle content={"Author:"}/>
                <ParaghText content={'Hanna Bun'}/>
              </View>
              <View style={styles.Category}>
                <BoldTitle content={"Категорія:"}/>
                <ParaghText content={"Медична допомога"}/>
              </View> 
              <View style={styles.ZbirAim}>
                <BoldTitle content={"Amount:"}/>
                <ParaghText content={"7 000 UAH"}/>
              </View>
            </View>
          </View> 
          
          <View style={styles.OtherTextCont}>
            <View style={styles.DescrCont}>
              <BoldTitle content={"Description:"}/>
              <ParaghText content={'A friendly gathering for a collimator sight for an anti-drone rifle and FPV control equipment for the 2nd company of the MVG DFTG No. 8, which includes volunteers from the city of Sumy, including the father of one of us. They protect Sumy from the shaheeds every night.'}/>
            </View>
            <View style={styles.ZbirLinkCont}>
              <BoldTitle content={"Link:"}/>
              <ParaghText content={"https://send.monobank.ua/jar/4TyMkkTXj8"}/>
            </View>

          </View>          
        </ScrollView>  
      </ImageBackground>
      <StatusBar style="auto" />
    </View>
  );
}
