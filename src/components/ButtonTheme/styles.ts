import { StyleSheet } from 'react-native';
import { dark, colors } from '../../global/styles/theme';

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
    borderColor: colors.white,
    borderWidth: 1,
  },
  containerDark: {
    width: 48,
    height: 48,
    backgroundColor: colors.white,
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