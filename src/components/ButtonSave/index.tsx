import React from 'react';
import { styles } from './styles';
import { TouchableOpacity, TouchableOpacityProps } from "react-native";
import { Fontisto } from "@expo/vector-icons"
import { theme } from '../../global/styles/theme';

type Props = TouchableOpacityProps & {
  themeSelected: string;
}

export function ButtonSave({themeSelected, ...rest} : Props){
  return(
    <TouchableOpacity
      style={[ themeSelected === 'light' ? [styles.containerLight] : [styles.containerDark]]}
      activeOpacity={0.7}
      {...rest}
    >
      <Fontisto 
        name="save"
        color={themeSelected === 'light' ? theme.baseColors.black : theme.postItColors.color1}
        size={32}
      />
    </TouchableOpacity>
  );
}