import React, { useState, useCallback } from 'react';
import { styles } from './styles';
import { StatusBar, View, Image, Text, FlatList } from 'react-native';
import { useNavigation, useFocusEffect } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import postinho from "../../assets/postinho.png";
import { Loading } from "../../components/Loading";
import { ButtonAdd } from '../../components/ButtonAdd';
import { ButtonTheme } from '../../components/ButtonTheme';
import { PostIt } from '../../components/PostIt';
import { PostItProps } from '../../components/PostIt';
import { POST_IT_LIST, THEME_SAVED } from '../../configs/database';
import { light, dark } from '../../global/styles/theme';

export function Home(){
  const navigation = useNavigation();
  const [loading, setLoading] = useState(true);
  const [storagedList, setStoragedList] = useState<PostItProps[]>([]);
  const [themeSelected, setThemeSelected] = useState<'light' | 'dark'>('light');

  function handleAddPostIt() {
    navigation.navigate('AddPostIt', {CurrentTheme: themeSelected});
  }

  function handleEditPostIt(postItSelected: PostItProps) {
    navigation.navigate('EditPostIt', {CurrentTheme: themeSelected, postItSelected: postItSelected});
  }

  async function toggleTheme() {
    const newTheme = themeSelected === 'light' ? 'dark' : 'light';
    
    setThemeSelected(newTheme)

    await AsyncStorage.setItem(
      THEME_SAVED,
      JSON.stringify(newTheme)
    );
  }
  
  useFocusEffect(useCallback(() => {
    loadPostIts();
  },[]));

  async function loadPostIts() {
    const storage = await AsyncStorage.getItem(POST_IT_LIST);
    const postItArray: PostItProps[] = storage ? JSON.parse(storage) : [];

    setStoragedList(postItArray);

    const storage_theme = await AsyncStorage.getItem(THEME_SAVED);
    const theme = storage_theme ? JSON.parse(storage_theme) : 'light';

    setThemeSelected(theme);

    setLoading(false);
  }

  return (
    <View style={[styles.container, themeSelected === 'light' ? {backgroundColor: light.bg} : {backgroundColor: dark.bg}]}>
      <StatusBar 
        barStyle={themeSelected === 'light' ? 'dark-content' : 'light-content' }
        backgroundColor={themeSelected === 'light' ? light.bg : dark.bg }
        translucent
      />
      {
          storagedList.length === 0 ?
          <View style={styles.newPostContainer}>
            <Image
              source={postinho}
              style={styles.newPostImage}
            />
            <Text  style={styles.newPostText}>
              ADICIONE UM NOVO POST IT
            </Text>
          </View>
          :
          <></>
      }
      {
        loading ? 
        <Loading themeSelected={themeSelected}/>
        :
        <FlatList 
        data={storagedList}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <PostIt 
            data={item}
            themeSelected={themeSelected}
            onPress={() => handleEditPostIt(item)}
          />
        )}
        contentContainerStyle={{ paddingBottom: 80 }}
        showsVerticalScrollIndicator={false}
        />
      }
      <ButtonAdd
        onPress={handleAddPostIt}
        themeSelected={themeSelected}
      />

      <ButtonTheme
        onPress={toggleTheme}
        themeSelected={themeSelected}
      />
    </View>
  );
}