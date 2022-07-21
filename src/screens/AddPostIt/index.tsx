import React, { useState, useEffect } from 'react';
import { styles } from './styles';
import { theme } from '../../global/styles/theme';
import { View, TextInput, TouchableOpacity, Alert } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { ButtonSave } from '../../components/ButtonSave';
import { ButtonBack } from '../../components/ButtonBack';
import { POST_IT_LIST } from '../../configs/database';
import uuid from "react-native-uuid";

export function AddPostIt(){
  const navigation = useNavigation();
  const [typedText, setTypedText] = useState('');
  const [currentColor, setCurrentColor] = useState('#fdba74');

  const [storagedList, setStoragedList] = useState([]);

  useEffect(() => {
    getData();
  },[]);

  async function getData() {
    const storage = await AsyncStorage.getItem(POST_IT_LIST);

    if (storage && (JSON.parse(storage).length != 0)) {
      setStoragedList(JSON.parse(storage));
    } else {
      setStoragedList([]);
    }
  }

  async function handleSave() {

    if(!typedText) {
      Alert.alert('Digite algo antes de salvar')
      return
    }

    const newPostIT = {
      id: uuid.v4(),
      content: `${typedText}`,
      color: `${currentColor}`
    };

    await AsyncStorage.setItem(
      POST_IT_LIST,
      JSON.stringify([...storagedList, newPostIT])
      //JSON.stringify([])
    );

    navigation.navigate('Home');
  }

  function handleBack() {
    navigation.navigate('Home');    
  }

  function getColor(code: string) {
    setCurrentColor(code)
  }

  return (
    <View style={styles.container}>
        <TextInput
          style={[styles.postIt, {backgroundColor: currentColor}]}
          multiline
          numberOfLines={10}
          autoCorrect={false}
          onChangeText={setTypedText}
          value={typedText}
        />
        <View style={styles.colorSelector}>
          <View style={styles.colorRow}>
            <TouchableOpacity style={[styles.colorButton, {backgroundColor: theme.postItColors.color1}]}
              activeOpacity={0.7}
              onPress={() => getColor('#fdba74')}
            />
            <TouchableOpacity style={[styles.colorButton, {backgroundColor: theme.postItColors.color2}]}
              activeOpacity={0.7}
              onPress={() => getColor('#fde047')}
            />
            <TouchableOpacity style={[styles.colorButton, {backgroundColor: theme.postItColors.color3}]}
              activeOpacity={0.7}
              onPress={() => getColor('#bef264')}
            />
            <TouchableOpacity style={[styles.colorButton, {backgroundColor: theme.postItColors.color4}]}
              activeOpacity={0.7}
              onPress={() => getColor('#6ee7b7')}
            />
            <TouchableOpacity style={[styles.colorButton, {backgroundColor: theme.postItColors.color5}]}
              activeOpacity={0.7}
              onPress={() => getColor('#67e8f9')}
            />                              
          </View>

          <View style={styles.colorRow}>
            <TouchableOpacity style={[styles.colorButton, {backgroundColor: theme.postItColors.color6}]}
              activeOpacity={0.7}
              onPress={() => getColor('#4aa9ff')}
            />
            <TouchableOpacity style={[styles.colorButton, {backgroundColor: theme.postItColors.color7}]}
              activeOpacity={0.7}
              onPress={() => getColor('#c4b5fd')}
            />
            <TouchableOpacity style={[styles.colorButton, {backgroundColor: theme.postItColors.color8}]}
              activeOpacity={0.7}
              onPress={() => getColor('#f0abfc')}
            />
            <TouchableOpacity style={[styles.colorButton, {backgroundColor: theme.postItColors.color9}]}
              activeOpacity={0.7}
              onPress={() => getColor('#fda4af')}
            />
            <TouchableOpacity style={[styles.colorButton, {backgroundColor: theme.postItColors.color10}]}
              activeOpacity={0.7}
              onPress={() => getColor('#f87171')}
            />
          </View>
        </View>

      <ButtonSave 
        onPress={handleSave}
      />
      <ButtonBack
        onPress={handleBack}      
      />
    </View>
  );
}