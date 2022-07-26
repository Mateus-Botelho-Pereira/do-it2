import React from 'react';
import { styles } from './styles';
import { TouchableOpacity, TouchableOpacityProps } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons"
import { theme } from '../../global/styles/theme';

type Props = TouchableOpacityProps & {
  themeSelected: string;
}

export function ButtonDelete({themeSelected, ...rest} : Props){
  return(
    <TouchableOpacity
    style={[ themeSelected === 'light' ? [styles.containerLight] : [styles.containerDark]]}
      activeOpacity={0.7}
      {...rest}
    >
      <MaterialCommunityIcons 
        name="delete-outline"
        color={themeSelected === 'light' ? theme.baseColors.black : theme.baseColors.white}
        size={24}
      />
    </TouchableOpacity>
  );
}