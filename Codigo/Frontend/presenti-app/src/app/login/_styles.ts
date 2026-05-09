import { appColors } from "../../styles/appColors";
import { sizeText } from "../../styles/sizeText";
import { Platform, StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerHeader: {
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 80,
    gap: 10,
  },
  sgaLogo: {
    height: 100,
    width: 200,
    resizeMode: 'contain',
  },
  textTitle: {
    fontSize: sizeText.subtitle + 2,
    fontWeight: 'bold',
    color: appColors.gray[50],
  },
  subTitle: {
    fontSize: sizeText.subtitle,
    fontWeight: 'semibold',
    textAlign: 'center',
    color: appColors.gray[400],
  },
  containerMiddle: {
    flexDirection: 'column',
    width: '100%',
    marginTop: 30,
    paddingHorizontal: 20,
    ...Platform.select({
      ios: {
        gap: 20,
      },
      android: {
        gap: 5,
      },
    }),
  },
  containerBottom: {
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    ...Platform.select({
      ios: {
        gap: 20,
      },
      android: {
        gap: 5,
      },
    }),
  },
});
