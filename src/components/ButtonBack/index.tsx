import React from 'react';
import { styles } from './styles';
import { TouchableOpacity, TouchableOpacityProps } from "react-native";
import { Ionicons } from "@expo/vector-icons"
import { colors } from '../../global/styles/theme';

type Props = TouchableOpacityProps & {
  themeSelected: string;
}

export function ButtonBack({themeSelected, ...rest} : Props){
  return(
    <TouchableOpacity
    style={[ themeSelected === 'light' ? 
    [styles.container, {backgroundColor: colors.white, borderColor: colors.black}]
    :
    [styles.container, {backgroundColor: colors.black, borderColor: colors.white}]]}
      activeOpacity={0.7}
      {...rest}
    >
      <Ionicons 
        name="chevron-back-outline"
        color={themeSelected === 'light' ? colors.black : colors.white}
        size={24}
      />
    </TouchableOpacity>
  );
}