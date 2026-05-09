import { appColors } from '../../styles/appColors';
import { sizeText } from '../../styles/sizeText';
import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: appColors.blue.dark,
    paddingBottom: 130,
  },
  backgroundTop: {
    backgroundColor: appColors.blue.medium,
    width: '100%',
    height: '25%', 
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageLogo: {
    width: 110,
    height: 100,
  },
  containerMiddle: {
    marginTop: -60, 
    paddingHorizontal: 15,
  },
  imagePoster: {
    width: '100%',
    height: 180, 
    borderRadius: 16,
  },
  containerBottom: {
    marginTop: 20,
    paddingHorizontal: 15,
    marginBottom: 20,
  },
  title: {
    color: appColors.gray[50],
    fontSize: sizeText.title || 18,
    fontWeight: 'bold',
    textAlign: 'left',
    marginBottom: 20,
  },
  gridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  cardContainer: {
    width: '48%',
    height: 120,
    borderRadius: 16,
    overflow: 'hidden',
    backgroundColor: '#333',
    marginBottom: 16,
  },
  cardImage: {
    width: '100%',
    height: '100%',
  },
  posterScroll: {
    marginTop: 10,
  },
  imagePosterScroll: {
    width: width * 0.8,
    height: 160,
    marginRight: 15,
    borderRadius: 16,
  },
});
