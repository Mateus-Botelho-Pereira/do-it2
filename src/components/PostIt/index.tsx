import React from 'react';
import { styles } from './styles';
import { View, Text, TouchableOpacity, TouchableOpacityProps } from "react-native";

export type PostItProps = {
  id: 'string';
  content: 'string';
  color: 'string';
}

type Props = TouchableOpacityProps & {
  data: PostItProps;
  themeSelected: 'light' | 'dark';
}

export function PostIt({data, themeSelected, ...rest}: Props){
  return (
    <TouchableOpacity 
      style={[ themeSelected === 'light' ? [styles.containerLight, {backgroundColor: data.color}] : [styles.containerDark, {borderColor: data.color}]]}
      activeOpacity={0.7}
      {...rest}
    >
      <Text style={[ themeSelected === 'light' ? styles.text : [styles.text, {color: data.color}]]}>
        {data.content}
      </Text>
    </TouchableOpacity>
  );
}