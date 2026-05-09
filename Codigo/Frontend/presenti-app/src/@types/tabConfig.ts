import { MaterialIcons, Feather, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { Href } from 'expo-router'; // Importe a tipagem oficial

type AllIconNames =
  | keyof typeof MaterialIcons.glyphMap
  | keyof typeof Feather.glyphMap
  | keyof typeof Ionicons.glyphMap
  | keyof typeof MaterialCommunityIcons.glyphMap;

export interface TabConfig {
  key: string;
  label: string;
  icon: AllIconNames;
  iconSet: 'feather' | 'ionicons' | 'material-community' | 'material-icons';
  route: Href; // <--- Alterado de string para Href
  isCenter?: boolean;
  action?: () => void;
}