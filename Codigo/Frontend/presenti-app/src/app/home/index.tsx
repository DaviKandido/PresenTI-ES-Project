import { TabConfig } from '../../@types/tabConfig';
import TabView from '../../components/talbarView/tabBarView';
import { appRoutes } from '../../utils/appRoutes';
import { Feather, Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { styles } from './_styles';

const imageLogo = require('../../assets/images/logo-white.png');

type Shortcut = {
  id: string;
  title: string;
  icon: keyof typeof Ionicons.glyphMap;
  route?: string;
};

type News = {
  id: string;
  date: string;
  title: string;
};

const shortcuts: Shortcut[] = [
  {
    id: '1',
    title: 'Grade de\nHorários',
    icon: 'time-outline',
    route: '/gradeHorarios',
  },
  {
    id: '2',
    title: 'Calendário\nLetivo',
    icon: 'calendar-outline',
  },
  {
    id: '3',
    title: 'Boletos\nBancários',
    icon: 'card-outline',
  },
  {
    id: '4',
    title: 'Credenciais\nde Acesso',
    icon: 'qr-code-outline',
  },
];

const news: News[] = [
  {
    id: '1',
    date: '04/03/2026',
    title: 'Celebrando a Arte na vida das mulheres',
  },
  {
    id: '2',
    date: '23/02/2026',
    title: 'Formaturas PUC Minas - Cadastro Comissão | Representantes',
  },
  {
    id: '3',
    date: '18/07/2025',
    title: 'PUC Minas promove evento de integração acadêmica',
  },
];

export default function Home() {
  const [tab, setTab] = useState<string>('inicio');

  const TABS: TabConfig[] = [
    appRoutes.inicio,
    appRoutes.ingressar,
    appRoutes.perfil,
    appRoutes.campi,
    appRoutes.apuc,
  ];

  function handleShortcutPress(item: Shortcut) {
    if (item.route) {
      router.push(item.route as any);
    }
  }

  return (
    <TabView tab={tab} onTabPress={setTab} tabConfig={TABS}>
      <StatusBar style="light" />

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.container}>
        <View style={styles.header}>
          <Image source={imageLogo} style={styles.logo} resizeMode="contain" />

          <TouchableOpacity activeOpacity={0.7} style={styles.bellButton}>
            <Feather name="bell" size={18} color="#FFFFFF" />
          </TouchableOpacity>
        </View>

        <View style={styles.containerContent}>
          <View style={styles.shortcutGrid}>
            {shortcuts.map((item) => (
              <TouchableOpacity
                key={item.id}
                activeOpacity={0.85}
                style={styles.shortcutCard}
                onPress={() => handleShortcutPress(item)}
              >
                <Ionicons name={item.icon} size={23} color="#FFFFFF" />

                <Text style={styles.shortcutText}>{item.title}</Text>
              </TouchableOpacity>
            ))}
          </View>

          <View style={styles.newsSection}>
            <Text style={styles.sectionTitle}>NOTÍCIAS</Text>

            {news.map((item) => (
              <TouchableOpacity key={item.id} activeOpacity={0.85} style={styles.newsCard}>
                <Text style={styles.newsDate}>{item.date}</Text>
                <Text style={styles.newsTitle}>{item.title}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </ScrollView>
    </TabView>
  );
}
