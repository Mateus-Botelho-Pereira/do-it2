import React from 'react';
import { styles } from './styles';
import { View, Text, TouchableOpacity, TouchableOpacityProps } from "react-native";
import { theme, light, dark } from '../../global/styles/theme';

export type PostItProps = {
  id: string;
  content: string;
  color: string;
}

type Props = TouchableOpacityProps & {
  data: PostItProps;
  themeSelected: string;
}

export function PostIt({data, themeSelected, ...rest}: Props){
  return (
    <TouchableOpacity 
      style={[ themeSelected === 'light' ? 
      [styles.container, {backgroundColor: data.color, borderColor: dark.bg}] 
      : 
      [styles.container, {backgroundColor: theme.baseColors.black, borderColor: data.color}]]}
      activeOpacity={0.7}
      {...rest}
    >
      <Text style={[ themeSelected === 'light' ? styles.text : [styles.text, {color: data.color}]]}>
        {data.content}
      </Text>
    </TouchableOpacity>
  );
}