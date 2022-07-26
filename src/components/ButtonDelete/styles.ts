import { StyleSheet } from 'react-native';
import { colors } from '../../global/styles/theme';

export const styles = StyleSheet.create({
  containerLight: {
    width: 48,
    height: 48,
    backgroundColor: colors.white,
    borderRadius: 32,
    borderColor: colors.black,
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
    backgroundColor: colors.black,
    borderRadius: 32,
    borderColor: colors.white,
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "center",
    position: 'absolute',
    bottom: 24,
    right: 24,
    alignSelf: 'center'
  }
});