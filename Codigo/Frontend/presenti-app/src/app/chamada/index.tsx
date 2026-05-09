// app/chamada/index.tsx
import { TabConfig } from '@/@types/tabConfig';
import TabView from '@/components/talbarView/tabBarView';
import { appRoutes } from '@/utils/appRoutes';
import { useEffect, useState } from 'react';
import { ActivityIndicator, Alert, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { useLocalSearchParams } from 'expo-router';

import { styles } from './_styles';
import CardAluno from './_components/cardAluno';
import { PresencaAluno } from '@/@types/alunoPresenca';
import { useBroadcastToken } from '@/hook/useBroadcastToken';

const students: PresencaAluno[] = [
  { id: 1, name: 'Alice Villea Antonini', presences: 2, percent: '15%', status: 'absent' },
  { id: 2, name: 'Bernado Guimaraes Reis', presences: 2, percent: '7.5%', status: 'absent' },
  { id: 3, name: 'Carlos Silva Ribeiro', presences: 2, percent: '2.5%', status: 'absent' },
  { id: 4, name: 'Debora Reis Pinto', presences: 2, percent: '5%', status: 'absent' },
  { id: 5, name: 'Eduardo Costa Machado', presences: 2, percent: '5%', status: 'absent' },
  { id: 6, name: 'Fernada Gomes Neto', presences: 0, percent: '5%', status: 'absent' },
  { id: 7, name: 'Gabriela Candido Mendes', presences: 0, percent: '5%', status: 'absent' },
  { id: 8, name: 'Hugo Ferreira Veloso', presences: 0, percent: '25%', status: 'absent' },
];

export default function Chamada() {
  const [tab, setTab] = useState<string>('inicio');
  const { aulaId = 'adad' } = useLocalSearchParams<{ aulaId: string }>();

  const { status, errorMsg, token, startBroadcast, stopBroadcast } = useBroadcastToken(aulaId);

  const isLoading = status === 'loading';
  const isBroadcasting = status === 'broadcasting';
  const isError = status === 'error';

  const TABS: TabConfig[] = [appRoutes.inicio, appRoutes.ingressar, { ...appRoutes.perfil }, appRoutes.campi, appRoutes.apuc];

  // Mostra o erro via Alert quando status muda para 'error'
  useEffect(() => {
    if (isError && errorMsg) {
      Alert.alert('Erro', errorMsg);
    }
  }, [isError, errorMsg]);

  const handleSalvar = () => {
    if (isBroadcasting) {
      Alert.alert('Encerrar chamada?', 'O token não será mais transmitido via Bluetooth.', [
        { text: 'Cancelar', style: 'cancel' },
        { text: 'Encerrar', style: 'destructive', onPress: stopBroadcast },
      ]);
      return;
    }

    if (!aulaId) {
      Alert.alert('Erro', 'ID da aula não encontrado.');
      return;
    }

    startBroadcast();
  };

  return (
    <TabView tab={tab} onTabPress={setTab} tabConfig={TABS} showHeaderBar={true} titleHeaderBar="Chamada">
      <View style={styles.container}>
        <ScrollView contentContainerStyle={styles.containerContent} showsVerticalScrollIndicator={false}>
          {/* CARD DA LISTA */}
          <View style={styles.chamadaCard}>
            <Text style={styles.title}>Lista de Chamada</Text>

            {/* COLUNAS */}
            <View style={styles.columns}>
              <Text style={styles.columnText}>Aluno</Text>
              <Text style={styles.columnText}>Presenças</Text>
            </View>

            {/* LISTA */}
            <ScrollView style={styles.listCardAluno} nestedScrollEnabled>
              {students.map((student) => (
                <CardAluno key={student.id} presenca={student} />
              ))}

              {/* Badge de transmissão ativa */}
              {isBroadcasting && token && (
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: '#1E3A8A',
                    borderEndEndRadius: 8,
                    borderEndStartRadius: 8,
                    paddingVertical: 4,
                    paddingHorizontal: 12,
                    marginBottom: 8,
                    gap: 6,
                  }}
                >
                  <ActivityIndicator size="small" color="#93C5FD" />
                  <Text style={{ color: '#93C5FD', fontSize: 12, fontWeight: '600' }}>Transmitindo · Token: {token}</Text>
                </View>
              )}
            </ScrollView>
          </View>

          {/* LEGENDA */}
          <View style={styles.legendContainer}>
            <View style={styles.legendItem}>
              <View style={[styles.legendDot, { backgroundColor: '#334AA8' }]} />
              <Text style={styles.legendText}>Alunos Presentes</Text>
            </View>
            <View style={styles.legendItem}>
              <View style={[styles.legendDot, { backgroundColor: '#9E3030' }]} />
              <Text style={styles.legendText}>Alunos faltantes</Text>
            </View>
          </View>

          <View style={styles.buttonsContainer}>
            <TouchableOpacity
              style={[styles.searchButton, , isBroadcasting && { backgroundColor: '#9E3030' }, isLoading && { opacity: 0.6 }]}
              disabled={isLoading}
              onPress={handleSalvar}
            >
              {isLoading ? (
                <ActivityIndicator color="#fff" size="small" />
              ) : (
                <Text style={styles.searchButtonText}>{isBroadcasting ? 'Encerrar chamada' : 'Buscar alunos...'}</Text>
              )}
            </TouchableOpacity>

            <TouchableOpacity style={styles.saveButton} disabled={isLoading}>
              <Text style={styles.saveButtonText}>{'Finalizar'}</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    </TabView>
  );
}
