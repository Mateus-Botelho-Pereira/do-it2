import React from 'react';
import { styles } from './styles';
import { View, Text, TouchableOpacity, TouchableOpacityProps, Appearance } from "react-native";

export type PostItProps = {
  id: 'string',
  content: 'string',
  color: 'string',
}

type Props = TouchableOpacityProps & {
  data: PostItProps;
}

export function PostIt({data, ...rest}: Props){
  const colorScheme = Appearance.getColorScheme();

  return (
    <TouchableOpacity 
      style={[ colorScheme === 'light' ? [styles.containerLight, {backgroundColor: data.color}] : [styles.containerDark, {borderColor: data.color}]]}
      activeOpacity={0.7}
      {...rest}
    >
      <Text style={[ colorScheme === 'light' ? styles.text : [styles.text, {color: data.color}]]}>
        {data.content}
      </Text>
    </TouchableOpacity>
  );
}