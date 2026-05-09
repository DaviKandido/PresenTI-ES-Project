import { MaterialIcons } from '@expo/vector-icons';
import { Text, TouchableOpacity, TouchableOpacityProps } from 'react-native';

import { styles } from './styles';

type Props = TouchableOpacityProps & {
  title: string;
  icon?: keyof typeof MaterialIcons.glyphMap;
};

export function Button({ title, icon, ...rest }: Props) {
  return (
    <TouchableOpacity style={styles.container} {...rest}>
      {icon && (
        <MaterialIcons
          name={icon}
          size={20}
          color={styles.title.color}
          style={{ marginRight: 8 }}
        />
      )}
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
}
