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
        <ScrollView style={styles.scrollView} >
          <View style={styles.ZbirInfoTitle} >
            <TitleText title={"Грім для ворогів"} />
          </View> 
          <View style={styles.ImgTextContainer}>
            <View style={styles.ImagePicker}> 
              <Image source={require("../assets/addPicture.webp")} style={styles.ZbirInfoImg} />
            </View>
            <View style={styles.TextContainer1}>
              <View style={styles.AuthZbir}>
                <BoldTitle content={"Автор:"}/>
                <ParaghText content={'БО "Крила"'}/>
              </View>
              <View style={styles.Category}>
                <BoldTitle content={"Категорія:"}/>
                <ParaghText content={"Медична допомога"}/>
              </View> 
              <View style={styles.ZbirAim}>
                <BoldTitle content={"Сума"}/>
                <ParaghText content={"100 000"}/>
              </View>
            </View>
          </View> 
          
          <View style={styles.OtherTextCont}>
            <View style={styles.DescrCont}>
              <BoldTitle content={"Опис:"}/>
              <ParaghText content={'Дружній збір на коліматорний приціл для антидронової рушниці та апаратуру керування для FPV для 2-ої роти МВГ ДФТГ №8, в складі якої добровольці міста Суми, серед яких і тато одної з нас. Вони щоночі захищають Суми від шахедів.'}/>
            </View>
            <View style={styles.ZbirLinkCont}>
              <BoldTitle content={"Посилання:"}/>
              <ParaghText content={"https://send.monobank.ua/jar/4TyMkkTXj8"}/>
            </View>
          </View>          
        </ScrollView>  
      </ImageBackground>
      <StatusBar style="auto" />
    </View>
  );
}
