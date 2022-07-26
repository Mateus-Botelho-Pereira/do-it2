import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginBottom: 24,
    padding: 12,
    borderWidth: 1,
    borderTopRightRadius: 16,
  },
  text: {
    fontFamily: theme.fonts.regular400,
    fontSize: 18,
    lineHeight: 22,
  },
});