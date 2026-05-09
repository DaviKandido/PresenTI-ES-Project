import { appColors } from '../../styles/appColors';
import { MaterialIcons } from '@expo/vector-icons';
import { Text, TouchableOpacity, TouchableOpacityProps } from 'react-native';
import { styles } from './styles';
type Props = TouchableOpacityProps & {
  text?: string;
  icon: keyof typeof MaterialIcons.glyphMap;
  variant?: 'primary' | 'secondary';
};

export function Options({ text, icon, variant = 'primary', ...rest }: Props) {
  return (
    <TouchableOpacity style={styles.container} {...rest}>
      <MaterialIcons
        name={icon}
        size={20}
        color={variant === 'secondary' ? appColors.blue.light : appColors.gray[400]}
      />

      {text && (
        <Text style={variant === 'secondary' ? styles.primaryTitle : styles.secondaryTitle}>
          {text}
        </Text>
      )}
    </TouchableOpacity>
  );
}
