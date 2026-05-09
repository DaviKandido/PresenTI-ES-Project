import { appColors } from '@/styles/appColors';
import { sizeText } from '@/styles/sizeText';
import { Platform, StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  backHeader: {
  position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',

    ...Platform.select({
      ios: {
        height: 120,
        paddingTop: 55,
      },

      android: {
        height: 100,
        paddingTop: 40,
      },
    }),

    backgroundColor: appColors.blue.medium,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',

    paddingHorizontal: 20,

    zIndex: 999,
  },
  backButton: {
    position: 'absolute',
    left: 20,
    bottom: 20,
  },
  headerTitle: {
    color: 'white',
    fontSize: sizeText.title,
    fontWeight: '600',
  },
  headerIcons: {
    position: 'absolute',
    right: 20,
    bottom: 20,
    flexDirection: 'row',

    ...Platform.select({
      ios: {
        gap: 15,
      },

    })
    
  },
});
