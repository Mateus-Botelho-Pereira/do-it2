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
      style={[ themeSelected === 'light' ? [styles.containerLight] : [styles.containerDark]]}
      activeOpacity={0.7}
      {...rest}
    >
      <Feather 
        name={themeSelected === 'light' ? 'sun' : 'moon'}
        color={themeSelected === 'light' ? theme.postItColors.color1 : theme.baseColors.white}
        size={24}
      />
    </TouchableOpacity>
  );
}