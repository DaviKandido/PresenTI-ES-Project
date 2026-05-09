import { TouchableOpacity, View } from 'react-native';
import { Feather, MaterialIcons } from '@expo/vector-icons';
import { appColors } from '../../styles/appColors';
import { router } from 'expo-router';
import { Text } from 'react-native';
import { styles } from './styles';

type HeaderBarProps = {
  title: string;
};

export default function HeaderBar( {title} : HeaderBarProps) {
  return (
    <View style={styles.backHeader}>
      <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
        <MaterialIcons name="arrow-back" size={30} color={appColors.gray[200]} />
      </TouchableOpacity>

      <Text style={styles.headerTitle}>{title}</Text>

      <View style={styles.headerIcons}>
        <TouchableOpacity style={{ marginRight: 20 }}>
          <Feather name="filter" size={22} color={appColors.gray[50]} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Feather name="bell" size={22} color={appColors.gray[50]} />
        </TouchableOpacity>
      </View>
    </View>
  );
}
