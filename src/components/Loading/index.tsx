import React from 'react';
import { styles } from './styles';
import { View, ActivityIndicator } from 'react-native';
import { colors } from '../../global/styles/theme';

type Props = {
  themeSelected?: string;
}

export function Loading({themeSelected = 'light'} : Props){
  return (
    <View style={[ themeSelected === 'light' ? [styles.container] : [styles.container, {backgroundColor: colors.black}]]}>
      <ActivityIndicator
        size='large'
        color={ themeSelected === 'light' ? colors.orange : colors.white}
      />
    </View>
  );
}