import { appColors } from '../../../styles/appColors';
import { MaterialIcons } from '@expo/vector-icons';
import { StyleSheet, Text, TouchableOpacity, TouchableOpacityProps, View } from 'react-native';

type Props = TouchableOpacityProps & {
  title: string;
  firstIcon?: keyof typeof MaterialIcons.glyphMap;
  secondIcon?: keyof typeof MaterialIcons.glyphMap;
};


export function ButtonLogin({ title, firstIcon, secondIcon, ...rest }: Props) {
  return (
    <TouchableOpacity style={styles.conatiner} {...rest}>
      <View style={styles.containercontent}>
        {firstIcon && (
          <MaterialIcons
            name={firstIcon}
            size={20}
            color={styles.title.color}
            style={{ marginRight: 8 }}
          />
        )}
        <Text style={styles.title}>{title}</Text>
      </View>
      {secondIcon && (<MaterialIcons 
        name={secondIcon}
        size={20}
        color={styles.title.color}
        style={{ marginRight: 8 }}
      />)}
    </TouchableOpacity>
  );
}



export const styles = StyleSheet.create({
  conatiner: {
    height: 60,
    width: '100%',
    paddingHorizontal: 20,
    borderWidth: 1,
    borderColor: appColors.gray[800],
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  containercontent:{
    height: "100%",
    gap: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  title: {
    color: appColors.gray[50],
    fontSize: 16,
    fontWeight: '600',
  },
});