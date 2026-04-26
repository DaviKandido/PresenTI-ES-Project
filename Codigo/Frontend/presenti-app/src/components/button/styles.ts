import { StyleSheet } from 'react-native';
import { appColors } from '@/styles/appColors';

export const styles = StyleSheet.create({
  conatiner: {
    height: 52,
    width: '100%',
    backgroundColor: appColors.blue.ligth,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  title: {
    color: appColors.gray[50],
    fontSize: 16,
    fontWeight: '600',
  },
});
