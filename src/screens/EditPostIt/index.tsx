import React, { useState, useEffect } from 'react';
import { styles } from './styles';
import { colors, postItColors } from '../../global/styles/theme';
import { View, TextInput, TouchableOpacity, Alert } from 'react-native';
import { useNavigation, useRoute } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { ButtonSave } from '../../components/ButtonSave';
import { ButtonBack } from '../../components/ButtonBack';
import { ButtonDelete } from '../../components/ButtonDelete';
import { POST_IT_LIST } from '../../configs/database';
import { PostItProps } from '../../components/PostIt';

type RouteParams = {
  postItSelected: PostItProps;
  CurrentTheme: string;
}

export function EditPostIt(){
  const navigation = useNavigation();
  const route = useRoute();
  const { postItSelected } = route.params as RouteParams;
  const { CurrentTheme } = route.params as RouteParams;
  
  const [typedText, setTypedText] = useState('');
  const [currentColor, setCurrentColor] = useState('#fdba74');
  const [themeSelected, setThemeSelected] = useState('light');

  useEffect(() => {
    getParams();
    setThemeSelected(CurrentTheme)
  },[]);

  function getParams() {
    setTypedText(postItSelected.content)
    setCurrentColor(postItSelected.color)
  }

  function getColor(code: string) {
    setCurrentColor(code)
  }

  async function handleSave() {
    
    if(!typedText) {
      Alert.alert('Digite algo antes de salvar')
      return
    }

    const storage: any = await AsyncStorage.getItem(POST_IT_LIST);
    const list = JSON.parse(storage);
    
    const indexOfObject = list.findIndex((object: { id: string; }) => {
      return object.id === String(postItSelected.id);
    });

    list[indexOfObject].content = typedText
    list[indexOfObject].color = currentColor

    await AsyncStorage.setItem(
      POST_IT_LIST,
      JSON.stringify(list)
    );

    navigation.navigate('Home');
  }

  async function handleDelete(){
    const storage: any = await AsyncStorage.getItem(POST_IT_LIST);
    const list = JSON.parse(storage);
    
    const indexOfObject = list.findIndex((object: { id: string; }) => {
      return object.id === String(postItSelected.id);
    });

    if (indexOfObject !== -1) {
      list.splice(indexOfObject, 1);
    }

    await AsyncStorage.setItem(
      POST_IT_LIST,
      JSON.stringify(list)
    );

    navigation.navigate('Home'); 
  }

  function handleBack() {
    navigation.navigate('Home');    
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
        />
        <View style={styles.colorSelector}>
        <View style={styles.colorRow}>
            <TouchableOpacity 
              style={[ themeSelected === 'light' ? 
              [styles.colorButton, {backgroundColor: postItColors.color1, borderColor: 'black'}] 
              : 
              [styles.colorButton, {backgroundColor: colors.black, borderColor: postItColors.color1, borderWidth: 3}]]}
              activeOpacity={0.7}
              onPress={() => getColor('#fdba74')}
            />
            <TouchableOpacity 
              style={[ themeSelected === 'light' ? 
              [styles.colorButton, {backgroundColor: postItColors.color2, borderColor: 'black'}] 
              : 
              [styles.colorButton, {backgroundColor: colors.black, borderColor: postItColors.color2, borderWidth: 3}]]}
              activeOpacity={0.7}
              onPress={() => getColor('#fde047')}
            />
            <TouchableOpacity 
              style={[ themeSelected === 'light' ? 
              [styles.colorButton, {backgroundColor: postItColors.color3, borderColor: 'black'}] 
              : 
              [styles.colorButton, {backgroundColor: colors.black, borderColor: postItColors.color3, borderWidth: 3}]]}
              activeOpacity={0.7}
              onPress={() => getColor('#bef264')}
            />
            <TouchableOpacity 
              style={[ themeSelected === 'light' ? 
              [styles.colorButton, {backgroundColor: postItColors.color4, borderColor: 'black'}] 
              : 
              [styles.colorButton, {backgroundColor: colors.black, borderColor: postItColors.color4, borderWidth: 3}]]}
              activeOpacity={0.7}
              onPress={() => getColor('#6ee7b7')}
            />
            <TouchableOpacity 
              style={[ themeSelected === 'light' ? 
              [styles.colorButton, {backgroundColor: postItColors.color5, borderColor: 'black'}] 
              : 
              [styles.colorButton, {backgroundColor: colors.black, borderColor: postItColors.color5, borderWidth: 3}]]}
              activeOpacity={0.7}
              onPress={() => getColor('#67e8f9')}
            />                              
          </View>

          <View style={styles.colorRow}>
            <TouchableOpacity 
              style={[ themeSelected === 'light' ? 
              [styles.colorButton, {backgroundColor: postItColors.color6, borderColor: 'black'}] 
              : 
              [styles.colorButton, {backgroundColor: colors.black, borderColor: postItColors.color6, borderWidth: 3}]]}
              activeOpacity={0.7}
              onPress={() => getColor('#4aa9ff')}
            />
            <TouchableOpacity 
              style={[ themeSelected === 'light' ? 
              [styles.colorButton, {backgroundColor: postItColors.color7, borderColor: 'black'}] 
              : 
              [styles.colorButton, {backgroundColor: colors.black, borderColor: postItColors.color7, borderWidth: 3}]]}
              activeOpacity={0.7}
              onPress={() => getColor('#c4b5fd')}
            />
            <TouchableOpacity 
              style={[ themeSelected === 'light' ? 
              [styles.colorButton, {backgroundColor: postItColors.color8, borderColor: 'black'}] 
              : 
              [styles.colorButton, {backgroundColor: colors.black, borderColor: postItColors.color8, borderWidth: 3}]]}
              activeOpacity={0.7}
              onPress={() => getColor('#f0abfc')}
            />
            <TouchableOpacity 
              style={[ themeSelected === 'light' ? 
              [styles.colorButton, {backgroundColor: postItColors.color9, borderColor: 'black'}] 
              : 
              [styles.colorButton, {backgroundColor: colors.black, borderColor: postItColors.color9, borderWidth: 3}]]}
              activeOpacity={0.7}
              onPress={() => getColor('#fda4af')}
            />
            <TouchableOpacity 
              style={[ themeSelected === 'light' ? 
              [styles.colorButton, {backgroundColor: postItColors.color10, borderColor: 'black'}] 
              : 
              [styles.colorButton, {backgroundColor: colors.black, borderColor: postItColors.color10, borderWidth: 3}]]}
              activeOpacity={0.7}
              onPress={() => getColor('#f87171')}
            />
          </View>
        </View>

      <ButtonSave 
        onPress={handleSave}
        themeSelected={themeSelected}
      />
      <ButtonDelete
        onPress={handleDelete}  
        themeSelected={themeSelected}    
      />
      <ButtonBack
        onPress={handleBack}
        themeSelected={themeSelected}  
      />
    </View>
  );
}