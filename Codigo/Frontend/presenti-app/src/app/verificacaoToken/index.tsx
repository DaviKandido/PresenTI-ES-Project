// app/efetivarPresenca/index.tsx
import React, { useState } from 'react';
import { View, Text, ActivityIndicator, TouchableOpacity, SafeAreaView } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

import { appColors } from '@/styles/appColors';
import TabView from '@/components/talbarView/tabBarView';
import { appRoutes } from '@/utils/appRoutes';
import { TabConfig } from '@/@types/tabConfig';
import { styles } from './_styles';
import { useScanToken } from '@/hook/useScanToken';

export default function EfetivarPresenca() {
  const [tab, setTab] = useState<string>('inicio');

  const { status, message, start, reset } = useScanToken({ autoStart: true });

  const TABS: TabConfig[] = [appRoutes.inicio, appRoutes.ingressar, appRoutes.perfil, appRoutes.campi, appRoutes.apuc];

  const renderIcon = () => {
    switch (status) {
      case 'scanning':
      case 'registering':
        return <ActivityIndicator size={100} color={appColors.gray[300]} />;
      case 'success':
        return (
          <View style={[styles.circuloIcone, { borderColor: '#22C55E' }]}>
            <MaterialIcons name="check" size={70} color="#22C55E" />
          </View>
        );
      case 'error':
        return (
          <View style={[styles.circuloIcone, { borderColor: '#EF4444' }]}>
            <MaterialIcons name="priority-high" size={70} color="#EF4444" />
          </View>
        );
      default:
        return <ActivityIndicator size={100} color={appColors.gray[300]} />;
    }
  };

  return (
    <TabView tab={tab} onTabPress={setTab} tabConfig={TABS} showHeaderBar titleHeaderBar="Chamada">
      <SafeAreaView style={styles.container}>
        <View style={styles.areaCentral}>
          {renderIcon()}

          <Text style={[styles.mensagem, status === 'success' && { color: '#22C55E' }, status === 'error' && { color: '#EF4444' }]}>{message}</Text>
        </View>

        <View style={styles.areaBotao}>
          {(status === 'scanning' || status === 'registering') && (
            <TouchableOpacity style={styles.botaoSimples} disabled>
              <Text style={styles.textoBotaoSimples}>Procurando...</Text>
            </TouchableOpacity>
          )}

          {status === 'error' && (
            <TouchableOpacity style={[styles.botaoSimples, { borderColor: '#EF4444', borderWidth: 1 }]} onPress={start}>
              <Text style={styles.textoBotaoSimples}>Tentar novamente...</Text>
            </TouchableOpacity>
          )}

          {status === 'success' && (
            <TouchableOpacity style={styles.botaoSimples} onPress={reset}>
              <Text style={styles.textoBotaoSimples}>Nova leitura</Text>
            </TouchableOpacity>
          )}
        </View>
      </SafeAreaView>
    </TabView>
  );
}
