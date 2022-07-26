import React from 'react';
import { View, ActivityIndicator } from 'react-native';
import { theme, light, dark } from '../../global/styles/theme';
import { styles } from './styles';

type Props = {
  themeSelected?: string;
}

export function Loading({themeSelected = 'light'} : Props){
  return (
    <View style={[ themeSelected === 'light' ? [styles.container] : [styles.container, {backgroundColor: dark.bg}]]}>
      <ActivityIndicator
        size='large'
        color={ themeSelected === 'light' ? theme.postItColors.color1 : theme.baseColors.white}
      />
    </View>
  );
}