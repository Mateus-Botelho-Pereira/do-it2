import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
  containerLight: {
    width: 48,
    height: 48,
    backgroundColor: theme.baseColors.white,
    borderRadius: 32,
    borderColor: theme.baseColors.black,
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "center",
    position: 'absolute',
    bottom: 24,
    right: 24,
    alignSelf: 'center'
  },
  containerDark: {
    width: 48,
    height: 48,
    backgroundColor: theme.baseColors.black,
    borderRadius: 32,
    borderColor: theme.baseColors.white,
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "center",
    position: 'absolute',
    bottom: 24,
    right: 24,
    alignSelf: 'center'
  }
});