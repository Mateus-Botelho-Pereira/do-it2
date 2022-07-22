import React, { useState, useCallback } from 'react';
import { styles } from './styles';
import { View, Image, Text, FlatList, Appearance } from 'react-native';
import { useNavigation, useFocusEffect } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import postinho from "../../assets/postinho.png";
import { Loading } from "../../components/Loading";
import { ButtonAdd } from '../../components/ButtonAdd';
import { PostIt } from '../../components/PostIt';
import { PostItProps } from '../../components/PostIt';
import { POST_IT_LIST } from '../../configs/database';
import { light, dark } from '../../global/styles/theme';

export function Home(){
  const navigation = useNavigation();
  const [loading, setLoading] = useState(true);
  const [storagedList, setStoragedList] = useState<PostItProps[]>([]);

  const colorScheme = Appearance.getColorScheme();

  function handleAddPostIt() {
    navigation.navigate('AddPostIt');
  }

  function handleEditPostIt(postItSelected: PostItProps) {
    navigation.navigate('EditPostIt', {postItSelected});
  }
  
  useFocusEffect(useCallback(() => {
    loadPostIts();
  },[]));

  async function loadPostIts() {
    const storage = await AsyncStorage.getItem(POST_IT_LIST);
    const postItArray: PostItProps[] = storage ? JSON.parse(storage) : [];

    setStoragedList(postItArray);

    setLoading(false);
  }

  return (
    <View style={[styles.container, colorScheme === 'light' ? {backgroundColor: light.bg} : {backgroundColor: dark.bg}]}>
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
        <Loading />
        :
        <FlatList 
        data={storagedList}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <PostIt 
            data={item}
            onPress={() => handleEditPostIt(item)}
          />
        )}
        contentContainerStyle={{ paddingBottom: 80 }}
        showsVerticalScrollIndicator={false}
        />
      }
      <ButtonAdd
        onPress={handleAddPostIt}
      />
    </View>
  );
}