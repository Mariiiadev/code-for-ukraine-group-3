import { StatusBar } from 'expo-status-bar';
import { View, ImageBackground,KeyboardAvoidingView, Text, SafeAreaView, StyleSheet, Image, ScrollView, TouchableOpacity, Alert, Switch, Button, TextInput} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { useState } from 'react';
import {Dropdown} from 'react-native-element-dropdown';

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
    <KeyboardAvoidingView>
      <TextInput
      value={Text} 
      onChangeText={SetText}
      placeholder="" 
      style={[styles.textInput, {color: 'black', fontSize: 18}]}/>
    </KeyboardAvoidingView>
  )
}

const data = [
        {label: 'Техніка та обладнання', value: '1'},
        {label: 'Медична допомога', value: '2'},
        {label: 'Підтримка військових', value: '3'},
    ];

    const DropdownScreen = _props => {
        const [dropdown, setDropdown] = useState(null);
        const _renderItem = item => {
            return (
            <View style={styles.item}>
                <Text style={styles.textItem}>{item.label}</Text>
            </View>
            );
        };
        return (
            <View style={styles.container}>
                <Dropdown
                    style={styles.dropdown}
                    data={data}
                    search
                    searchPlaceholder="Пошук"
                    labelField="label"
                    valueField="value"
                    placeholder="Оберіть категорію збору"
                    value={dropdown}
                    onChange={item => {
                    setDropdown(item.value);
                        console.log('selected', item);
                    }}
                    renderItem={item => _renderItem(item)}
                />
            </View>
        );
    };

export default function AddZdir () {
  const [Description, SetDescription]=useState("")
  const navigation = useNavigation();
 
  return (
    <View style={styles.AddZbircontainer}>
     <View>
      <ImageBackground source = {require('../assets/background.png')} style={styles.backgroundPic}> 
        <ScrollView style={styles.scrollView} >
          <View style={styles.AddZbirTitle} >
            <TitleText title={"Створити збір"} />
          </View>       
          <View style={styles.ImagePicker}> 
            <Image source={require("../assets/addPicture.webp")} style={styles.addImage} />
          </View>
          <View style={styles.TextInputsContainer} >
            <ParaghText content={"Назва збору:"} />
            <InfoInput />
            <View style={styles.dropdownContainer}>
              <DropdownScreen />
            </View>  
            <ParaghText content={"Опис:"} />
            <TextInput 
            value={Description} 
            onChangeText={SetDescription}
            placeholder=""  
            style={[styles.DescriptionTextInput, 
            {color: 'black', fontSize: 18}]}
            multiline
            numberOfLines={4}
            />
            <ParaghText content={"Посилання на банку:"} />
            <InfoInput />
            <View style={styles.addZbirButtonContainer}>
              <TouchableOpacity 
              onPress={() => {
              navigation.navigate("Home")}}
              style={styles.addZbirButton}>
                <Text style={[styles.buttonText]}>Створити збір</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>  
      </ImageBackground>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}
