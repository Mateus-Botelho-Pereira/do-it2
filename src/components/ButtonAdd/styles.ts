import { StyleSheet } from 'react-native';
import { dark, theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
  containerLight: {
    width: 64,
    height: 64,
    backgroundColor: theme.postItColors.color1,
    borderRadius: 32,
    alignItems: "center",
    justifyContent: "center",
    position: 'absolute',
    bottom: 22,
    alignSelf: 'center',
    borderColor: theme.baseColors.black,
    borderWidth: 1,
  },
  containerDark: {
    width: 64,
    height: 64,
    backgroundColor: dark.bg,
    borderRadius: 32,
    alignItems: "center",
    justifyContent: "center",
    position: 'absolute',
    bottom: 22,
    alignSelf: 'center',
    borderColor: theme.postItColors.color1,
    borderWidth: 1,
  },
});