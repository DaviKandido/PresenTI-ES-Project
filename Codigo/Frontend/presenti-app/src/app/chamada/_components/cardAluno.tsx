import { Text, TouchableOpacity, View } from 'react-native';

import { styles } from '../_styles';

import { MaterialIcons } from '@expo/vector-icons';
import { PresencaAluno } from '@/@types/alunoPresenca';
import { useState } from 'react';

interface CardAlunoProps {
  presenca: PresencaAluno;
}

export default function cardAluno({ presenca }: CardAlunoProps) {
  const [isPresent, setIsPresent] = useState<'present' | 'absent'>('present');

  const handlePresent = () => {
    setIsPresent(isPresent === 'present' ? 'absent' : 'present');
    presenca.status = isPresent;
  };

  return (
    <TouchableOpacity
      key={presenca.id}
      style={[styles.studentRow, presenca.status === 'absent' && styles.studentRowAbsent]}
      onPress={handlePresent}
    >
      <View style={styles.studentLeft}>
        <View style={styles.avatar}>
          <MaterialIcons name="person" size={18} color="#B892FF" />
        </View>

        <Text style={styles.studentName}>{presenca.name}</Text>
      </View>

      <View style={styles.studentRight}>
        <Text style={styles.presenceText}>{presenca.presences}</Text>

        <MaterialIcons name="swap-vert" size={16} color="white" />

        <Text
          style={[
            styles.percentText,
            presenca.status === 'present' ? styles.percentGreen : styles.percentRed,
          ]}
        >
          {presenca.percent}
        </Text>
      </View>
    </TouchableOpacity>
  );
}
