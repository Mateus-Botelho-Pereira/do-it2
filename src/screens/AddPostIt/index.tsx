import React, { useState, useEffect } from 'react';
import { styles } from './styles';
import { colors, postItColors } from '../../global/styles/theme';
import { View, TextInput, TouchableOpacity, Alert } from 'react-native';
import { useNavigation, useRoute } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { ButtonSave } from '../../components/ButtonSave';
import { ButtonBack } from '../../components/ButtonBack';
import { POST_IT_LIST } from '../../configs/database';
import uuid from "react-native-uuid";

type RouteParams = {
  CurrentTheme: string;
}

export function AddPostIt(){
  const navigation = useNavigation();
  const [typedText, setTypedText] = useState('');
  const [currentColor, setCurrentColor] = useState(postItColors.color1);
  const [themeSelected, setThemeSelected] = useState('light');
  
  const route = useRoute();
  const { CurrentTheme } = route.params as RouteParams;

  const [storagedList, setStoragedList] = useState([]);

  useEffect(() => {
    getData();
    setThemeSelected(CurrentTheme)
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
    <View style={[styles.container, themeSelected === 'light' ? {backgroundColor: colors.light_gray} : {backgroundColor: colors.black}]}>
        <TextInput
          style={[ themeSelected === 'light' ? 
          [styles.postIt, {backgroundColor: currentColor, borderColor: colors.black}] 
          : 
          [styles.postIt, {backgroundColor: colors.black, borderColor: currentColor, color: currentColor}]]}
          multiline
          numberOfLines={10}
          autoCorrect={false}
          onChangeText={setTypedText}
          value={typedText}
          autoFocus
        />
        <View style={styles.colorSelector}>
          <View style={styles.colorRow}>
            <TouchableOpacity 
              style={[ themeSelected === 'light' ? 
              [styles.colorButton, {backgroundColor: postItColors.color1, borderColor: 'black'}] 
              : 
              [styles.colorButton, {backgroundColor: colors.black, borderColor: postItColors.color1, borderWidth: 3}]]}
              activeOpacity={0.7}
              onPress={() => getColor(postItColors.color1)}
            />
            <TouchableOpacity 
              style={[ themeSelected === 'light' ? 
              [styles.colorButton, {backgroundColor: postItColors.color2, borderColor: 'black'}] 
              : 
              [styles.colorButton, {backgroundColor: colors.black, borderColor: postItColors.color2, borderWidth: 3}]]}
              activeOpacity={0.7}
              onPress={() => getColor(postItColors.color2)}
            />
            <TouchableOpacity 
              style={[ themeSelected === 'light' ? 
              [styles.colorButton, {backgroundColor: postItColors.color3, borderColor: 'black'}] 
              : 
              [styles.colorButton, {backgroundColor: colors.black, borderColor: postItColors.color3, borderWidth: 3}]]}
              activeOpacity={0.7}
              onPress={() => getColor(postItColors.color3)}
            />
            <TouchableOpacity 
              style={[ themeSelected === 'light' ? 
              [styles.colorButton, {backgroundColor: postItColors.color4, borderColor: 'black'}] 
              : 
              [styles.colorButton, {backgroundColor: colors.black, borderColor: postItColors.color4, borderWidth: 3}]]}
              activeOpacity={0.7}
              onPress={() => getColor(postItColors.color4)}
            />
            <TouchableOpacity 
              style={[ themeSelected === 'light' ? 
              [styles.colorButton, {backgroundColor: postItColors.color5, borderColor: 'black'}] 
              : 
              [styles.colorButton, {backgroundColor: colors.black, borderColor: postItColors.color5, borderWidth: 3}]]}
              activeOpacity={0.7}
              onPress={() => getColor(postItColors.color5)}
            />                              
          </View>

          <View style={styles.colorRow}>
            <TouchableOpacity 
              style={[ themeSelected === 'light' ? 
              [styles.colorButton, {backgroundColor: postItColors.color6, borderColor: 'black'}] 
              : 
              [styles.colorButton, {backgroundColor: colors.black, borderColor: postItColors.color6, borderWidth: 3}]]}
              activeOpacity={0.7}
              onPress={() => getColor(postItColors.color6)}
            />
            <TouchableOpacity 
              style={[ themeSelected === 'light' ? 
              [styles.colorButton, {backgroundColor: postItColors.color7, borderColor: 'black'}] 
              : 
              [styles.colorButton, {backgroundColor: colors.black, borderColor: postItColors.color7, borderWidth: 3}]]}
              activeOpacity={0.7}
              onPress={() => getColor(postItColors.color7)}
            />
            <TouchableOpacity 
              style={[ themeSelected === 'light' ? 
              [styles.colorButton, {backgroundColor: postItColors.color8, borderColor: 'black'}] 
              : 
              [styles.colorButton, {backgroundColor: colors.black, borderColor: postItColors.color8, borderWidth: 3}]]}
              activeOpacity={0.7}
              onPress={() => getColor(postItColors.color8)}
            />
            <TouchableOpacity 
              style={[ themeSelected === 'light' ? 
              [styles.colorButton, {backgroundColor: postItColors.color9, borderColor: 'black'}] 
              : 
              [styles.colorButton, {backgroundColor: colors.black, borderColor: postItColors.color9, borderWidth: 3}]]}
              activeOpacity={0.7}
              onPress={() => getColor(postItColors.color9)}
            />
            <TouchableOpacity 
              style={[ themeSelected === 'light' ? 
              [styles.colorButton, {backgroundColor: postItColors.color10, borderColor: 'black'}] 
              : 
              [styles.colorButton, {backgroundColor: colors.black, borderColor: postItColors.color10, borderWidth: 3}]]}
              activeOpacity={0.7}
              onPress={() => getColor(postItColors.color10)}
            />
          </View>
        </View>

      <ButtonSave 
        onPress={handleSave}
        themeSelected={themeSelected}
      />
      <ButtonBack
        onPress={handleBack}      
        themeSelected={themeSelected}
      />
    </View>
  );
}