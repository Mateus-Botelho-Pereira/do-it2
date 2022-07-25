import React from 'react';
import { styles } from './styles';
import { TouchableOpacity, TouchableOpacityProps } from "react-native";
import { theme } from '../../global/styles/theme';
import { Feather } from "@expo/vector-icons";

type Props = TouchableOpacityProps & {
  themeSelected: 'light' | 'dark';
}

export function ButtonTheme({themeSelected, ...rest} : Props){
  return(
    <TouchableOpacity 
      style={[ themeSelected === 'light' ? [styles.containerDark] : [styles.containerLight]]}
      activeOpacity={0.7}
      {...rest}
    >
      <Feather 
        name={themeSelected === 'light' ? 'moon' : 'sun'}
        color={themeSelected === 'light' ? theme.baseColors.black : theme.postItColors.color1}
        size={24}
      />
    </TouchableOpacity>
  );
}