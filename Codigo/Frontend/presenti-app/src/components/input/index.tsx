import { TextInput, TextInputProps } from 'react-native';
import { styles } from './styles';
import { appColors } from '../../styles/appColors';

export function Input({ ...res }: TextInputProps) {
  return <TextInput style={styles.container} placeholderTextColor={appColors.gray[500]} {...res} />;
}
