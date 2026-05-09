import { Feather } from '@expo/vector-icons';
import { Text, TouchableOpacity, View } from 'react-native';

import { styles } from '../_styles';

export type ProfessorClass = {
  id: string;
  code: string;
  subject: string;
  course: string;
  local: string;
  shift: string;
};

type ProfessorClassCardProps = {
  item: ProfessorClass;
  onPress?: () => void;
};

export default function ProfessorClassCard({ item, onPress }: ProfessorClassCardProps) {
  return (
    <TouchableOpacity activeOpacity={0.85} style={styles.professorCard} onPress={onPress}>
      <View style={styles.professorCardTop}>
        <View style={styles.professorTitleBox}>
          <Text style={styles.professorSubject}>
            {item.code} {item.subject}
          </Text>

          <Text style={styles.professorCourse}>{item.course}</Text>
        </View>

        <Feather name="arrow-right" size={30} color="#FFFFFF" />
      </View>

      <View style={styles.professorDivider} />

      <View style={styles.professorInfoBox}>
        <Text style={styles.professorInfoText}>
          <Text style={styles.professorInfoLabel}>Local: </Text>
          {item.local}
        </Text>

        <Text style={styles.professorInfoText}>
          <Text style={styles.professorInfoLabel}>Turno: </Text>
          {item.shift}
        </Text>
      </View>
    </TouchableOpacity>
  );
}
