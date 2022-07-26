import { StyleSheet } from 'react-native';
import { getStatusBarHeight } from "react-native-iphone-x-helper";
import { colors, fonts, light, dark } from '../../global/styles/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: getStatusBarHeight() + 10,
    backgroundColor: colors.light_gray,
  },
  newPostContainer: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 100,
    justifyContent: "center",
    alignItems: "center",
  },
  newPostImage: {
    width: 206,
    height: 206
  },
  newPostText: {
    textAlign: 'justify',
    fontFamily: fonts.roboto.regular400,
    fontSize: 16,
    marginTop: 24,
  },
});