import React from 'react';
import { styles } from './styles';
import { TouchableOpacity, TouchableOpacityProps } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons"
import { colors } from '../../global/styles/theme';

type Props = TouchableOpacityProps & {
  themeSelected: string;
}

export function ButtonAdd({themeSelected, ...rest} : Props){
  return(
    <TouchableOpacity 
      style={[ themeSelected === 'light' ? [styles.containerLight] : [styles.containerDark]]}
      activeOpacity={0.7}
      {...rest}
    >
      <MaterialCommunityIcons 
        name="plus"
        color={themeSelected === 'light' ? colors.black : colors.orange}
        size={32}
      />
    </TouchableOpacity>
  );
}