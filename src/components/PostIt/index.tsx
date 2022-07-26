import React from 'react';
import { styles } from './styles';
import { Text, TouchableOpacity, TouchableOpacityProps } from "react-native";
import { colors } from '../../global/styles/theme';

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
      [styles.container, {backgroundColor: data.color, borderColor: colors.black}] 
      : 
      [styles.container, {backgroundColor: colors.black, borderColor: data.color}]]}
      activeOpacity={0.7}
      {...rest}
    >
      <Text style={[ themeSelected === 'light' ? styles.text : [styles.text, {color: data.color}]]}>
        {data.content}
      </Text>
    </TouchableOpacity>
  );
}