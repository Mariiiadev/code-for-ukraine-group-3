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
        {label: 'Technique and equipment', value: '1'},
        {label: 'Medical help', value: '2'},
        {label: 'Support for the military', value: '3'},
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
                    searchPlaceholder="Search"
                    labelField="label"
                    valueField="value"
                    placeholder="Select a category fundraising"
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
            <TitleText title={"Add zbir"} />
          </View>
          <View style={styles.ImagePicker}> 
            <Image source={require("../assets/addPicture.webp")} style={styles.addImage} />
          </View>
          <KeyboardAvoidingView style={styles.TextInputsContainer} behavior="padding" enabled>
            <ParaghText content={"Zbir name:"} />
            <InfoInput />
            <View style={styles.dropdownContainer}>
              <DropdownScreen />
            </View>  
            <ParaghText content={"Description:"} />
            <TextInput 
            value={Description} 
            onChangeText={SetDescription}
            placeholder=""  
            style={[styles.DescriptionTextInput, 
            {color: 'black', fontSize: 18}]}
            multiline
            numberOfLines={4}
            />
            <ParaghText content={"Link to the bank:"} />
            <InfoInput />
            <View style={styles.addZbirButtonContainer}>
              <TouchableOpacity 
              onPress={() => {
              navigation.reset}}
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
