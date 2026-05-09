import { appColors } from '../../styles/appColors';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  primaryTitle: {
    color: appColors.gray[300],
    fontSize: 16,
    fontWeight: '600',
  },
  secondaryTitle: {
    color: appColors.gray[400],
    fontSize: 16,
  },
});
