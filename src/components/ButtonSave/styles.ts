import { StyleSheet } from 'react-native';
import { colors, postItColors, light, dark } from '../../global/styles/theme';

export const styles = StyleSheet.create({
  containerLight: {
    width: 64,
    height: 64,
    backgroundColor: colors.orange,
    borderRadius: 32,
    alignItems: "center",
    justifyContent: "center",
    position: 'absolute',
    bottom: 16,
    alignSelf: 'center',
    borderColor: colors.black,
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
    bottom: 16,
    alignSelf: 'center',
    borderColor: colors.orange,
    borderWidth: 1,
  },
});