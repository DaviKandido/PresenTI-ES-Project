export interface TabConfig {
  key: string;
  label: string;
  icon: string;
  iconSet: 'feather' | 'ionicons' | 'material-community';
  route: string; 
  isCenter?: boolean;
}