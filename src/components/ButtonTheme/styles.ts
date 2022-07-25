import { StyleSheet } from 'react-native';
import { dark, theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
  containerLight: {
    width: 48,
    height: 48,
    backgroundColor: dark.bg,
    borderRadius: 32,
    alignItems: "center",
    justifyContent: "center",
    position: 'absolute',
    bottom: 30,
    left: 24,
    alignSelf: 'center',
    borderColor: theme.postItColors.color1,
    borderWidth: 1,
  },
  containerDark: {
    width: 48,
    height: 48,
    backgroundColor: dark.bg,
    borderRadius: 32,
    alignItems: "center",
    justifyContent: "center",
    position: 'absolute',
    bottom: 30,
    left: 24,
    alignSelf: 'center',
    borderColor: dark.bg,
    borderWidth: 1,   
  }
});