import { Text, TouchableOpacity, View } from 'react-native';

import { styles } from '../_styles';

export type StatusType = 'Finalizada' | 'Em andamento' | 'Não iniciada';

export type ScheduleClass = {
  id: string;
  time: string;
  status: StatusType;
  subject: string;
  code: string;
  location: string;
};

type ScheduleCardProps = {
  item: ScheduleClass;
  onPress?: () => void;
};

export default function ScheduleCard({ item, onPress }: ScheduleCardProps) {
  function getStatusStyle(status: StatusType) {
    if (status === 'Finalizada') {
      return styles.statusFinished;
    }

    if (status === 'Em andamento') {
      return styles.statusProgress;
    }

    return styles.statusPending;
  }

  function getStatusTextStyle(status: StatusType) {
    if (status === 'Finalizada') {
      return styles.statusTextFinished;
    }

    if (status === 'Em andamento') {
      return styles.statusTextProgress;
    }

    return styles.statusTextPending;
  }

  return (
    <TouchableOpacity style={styles.card} activeOpacity={0.85} onPress={onPress}>
      <View style={styles.cardTop}>
        <View style={styles.timeBadge}>
          <Text style={styles.timeText}>{item.time}</Text>
        </View>

        <View style={[styles.statusBadge, getStatusStyle(item.status)]}>
          <Text style={[styles.statusText, getStatusTextStyle(item.status)]}>{item.status}</Text>
        </View>
      </View>

      <Text style={styles.subject}>
        {item.subject} <Text style={styles.code}>({item.code})</Text>
      </Text>

      <Text style={styles.localLabel}>Local</Text>
      <Text style={styles.location}>{item.location}</Text>
    </TouchableOpacity>
  );
}
