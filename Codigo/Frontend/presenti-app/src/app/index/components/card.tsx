import { View, Text, Image, ImageBackground } from 'react-native';
import { styles } from '../styles';

type CardProps = {
  image: any;
};

export function Card({ image }: CardProps) {
  return(
  <View style={styles.cardContainer}>
    <Image source={image} style={styles.cardImage} />

    {/* <View style={styles.cardOverlay}>
      <Text style={styles.cardText}>{title}</Text>
    </View> */}
  </View>
  )
}
