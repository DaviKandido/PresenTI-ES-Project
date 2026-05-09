import { TabConfig } from '../../@types/tabConfig';
import TabView from '../../components/talbarView/tabBarView';
import { appRoutes } from '../../utils/appRoutes';
import { router } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { ScrollView, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import ProfessorClassCard, { ProfessorClass } from './_components/professorClassCard';
import ScheduleCard, { ScheduleClass } from './_components/scheduleCard';
import { styles } from './_styles';

type UserType = 'aluno' | 'professor';

type ScheduleDay = {
  id: string;
  title: string;
  classes: ScheduleClass[];
};

// Por enquanto está estático.
// Depois você troca pelo tipo vindo do login/back-end.
// Para testar a visão do aluno, troca para:
// const userType: UserType = 'aluno';
const userType: UserType = 'professor';

const scheduleDays: ScheduleDay[] = [
  {
    id: '1',
    title: 'TERÇA-FEIRA - 31 DE MARÇO',
    classes: [
      {
        id: '1',
        time: '07:00 às 08:40',
        status: 'Finalizada',
        subject: 'ENGENHARIA DE SOFTWARE II',
        code: '68I4.1.00',
        location:
          'PUC Minas Coração Eucarístico | Prédio 43 | Andar 02 | Sala de aula 205 | Professor Sandro Lauarence',
      },
      {
        id: '2',
        time: '08:50 às 10:30',
        status: 'Em andamento',
        subject: 'SISTEMAS OPERACIONAIS',
        code: '6842.1.00',
        location:
          'PUC Minas Coração Eucarístico | Prédio 43 | Andar 02 | Sala de aula 205 | Professor Mark Alan Junho Song',
      },
    ],
  },
  {
    id: '2',
    title: 'QUARTA-FEIRA - 1 DE ABRIL',
    classes: [
      {
        id: '3',
        time: '07:00 às 08:40',
        status: 'Não iniciada',
        subject: 'ARQUITETURA DE COMPUTADORES III',
        code: '6811.1.00',
        location:
          'PUC Minas Coração Eucarístico | Prédio 34 | Andar 02 | Sala de aula 201 | Professor Carlos Henrique',
      },
      {
        id: '4',
        time: '08:50 às 10:30',
        status: 'Não iniciada',
        subject: 'BANCO DE DADOS',
        code: '6830.1.00',
        location:
          'PUC Minas Coração Eucarístico | Prédio 43 | Andar 03 | Laboratório 305 | Professor Rafael Martins',
      },
    ],
  },
];

const professorClasses: ProfessorClass[] = [
  {
    id: '1',
    code: '6755.1.00',
    subject: 'ALGORITMOS E ESTRUTURAS DE DADOS I',
    course: 'Ciência Da Computação',
    local: 'CAMPUS CORAÇÃO EUCARÍSTICO - PMG',
    shift: 'MANHÃ',
  },
  {
    id: '2',
    code: '6755.1.01',
    subject: 'ALGORITMOS E ESTRUTURAS DE DADOS I',
    course: 'Ciência Da Computação',
    local: 'CAMPUS CORAÇÃO EUCARÍSTICO - PMG',
    shift: 'MANHÃ',
  },
  {
    id: '3',
    code: '6755.1.02',
    subject: 'ALGORITMOS E ESTRUTURAS DE DADOS I',
    course: 'Ciência Da Computação',
    local: 'CAMPUS CORAÇÃO EUCARÍSTICO - PMG',
    shift: 'MANHÃ',
  },
  {
    id: '4',
    code: '7094.1.03',
    subject: 'TRABALHO INTERDISCIPLINAR: SISTEMAS COMPUTACIONAIS',
    course: 'Ciência Da Computação',
    local: 'CAMPUS CORAÇÃO EUCARÍSTICO - PMG',
    shift: 'MANHÃ',
  },
];

export default function GradeHorarios() {
  const [tab, setTab] = useState<string>('campi');

  const TABS: TabConfig[] = [
    appRoutes.inicio,
    appRoutes.ingressar,
    appRoutes.perfil,
    appRoutes.campi,
    appRoutes.apuc,
  ];

  const isProfessor = userType === 'aluno';

  return (
    <TabView
      tab={tab}
      onTabPress={setTab}
      tabConfig={TABS}
      showHeaderBar
      titleHeaderBar="Grade de Horários"
    >
      <StatusBar style="light" />

      <SafeAreaView style={styles.safeArea}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={[styles.container, isProfessor && styles.professorContainer]}
        >
          {isProfessor ? (
            <>
              {professorClasses.map((item) => (
                <ProfessorClassCard
                  key={item.id}
                  item={item}
                  onPress={() => {
                    router.push(appRoutes.chamada.route);
                  }}
                />
              ))}
            </>
          ) : (
            <>
              {scheduleDays.map((day) => (
                <View key={day.id} style={styles.dayBlock}>
                  <Text style={styles.dayTitle}>{day.title}</Text>

                  {day.classes.map((item) => (
                    <ScheduleCard
                      key={item.id}
                      item={item}
                      onPress={() => {
                        router.push(appRoutes.verificacaoToken.route);
                      }}
                    />
                  ))}
                </View>
              ))}
            </>
          )}
        </ScrollView>
      </SafeAreaView>
    </TabView>
  );
}
