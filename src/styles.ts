import { StyleSheet } from "react-native"

export const colors = {
  primary: "#5500C1",
  secondary: "#440044",
  third: "#FF2100", 
  white: "#fdfdfd",
  black: "#161616",
}

export const fonts = {
  regular: 'JosefinSans_400Regular',
}

export const styleDefault = StyleSheet.create({
  containerScreen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.black
  },

  textDefault: {
    color: colors.white,
    fontSize: 20
  },

  back: {
    position: "absolute",
    top: 50,
    left: 30,
}
})

