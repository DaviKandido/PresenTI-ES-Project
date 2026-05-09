import { appColors } from '../../styles/appColors';
import { sizeText } from '../../styles/sizeText';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: appColors.blue.dark,
  },

  container: {
    flexGrow: 1,
    backgroundColor: appColors.blue.dark,
  },

  containerContent: {
    paddingHorizontal: 12,
    paddingTop: 14,
    paddingBottom: 130,
    marginTop: -80,
    marginBottom: 80,
  },

  header: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: appColors.blue.opaqueMediumLight,
    width: '100%',
    height: '35%',
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },

  logo: {
    width: 125,
    height: 115,
  },

  bellButton: {
    position: 'absolute',
    top: 50,
    right: 20,
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },

  shortcutGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },

  shortcutCard: {
    width: '48.5%',
    height: 100,
    backgroundColor: appColors.blue.opaqueMedium,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 9,
    borderColor: appColors.gray[800],
    borderWidth: 1,
  },

  shortcutText: {
    color: appColors.gray[50],
    fontSize: sizeText.subtitle,
    fontWeight: '800',
    textAlign: 'center',
    lineHeight: 15,
    marginTop: 7,
  },

  newsSection: {
    marginTop: 15,
  },

  sectionTitle: {
    color: appColors.gray[50],
    fontSize: sizeText.title,
    fontWeight: '800',
    marginBottom: 15,
  },
  newsCard: {
    backgroundColor: appColors.blue.opaqueMedium,
    borderRadius: 10,
    paddingHorizontal: 16,
    paddingVertical: 14,
    marginBottom: 9,
    borderColor: appColors.gray[800],
    borderWidth: 1,
    minHeight: 100,
  },

  newsDate: {
    color: appColors.gray[500],
    fontSize: sizeText.subtitle,
    fontWeight: '500',
    marginBottom: 8,
  },

  newsTitle: {
    color: appColors.gray[50],
    fontSize: sizeText.subtitle,
    fontWeight: '800',
    lineHeight: 16,
  },
});
