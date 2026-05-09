import { StyleSheet } from 'react-native';
import { appColors } from '../../styles/appColors';

export const styles = StyleSheet.create({
  container: {
    height: 45,
    width: '100%',
    paddingHorizontal: 10,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: appColors.gray[200],
    color: appColors.gray[200],
    fontSize: 16,
  },
});
