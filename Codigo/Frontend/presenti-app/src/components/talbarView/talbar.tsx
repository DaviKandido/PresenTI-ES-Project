/**
 * PucTabBar — Tab bar genérica inspirada no app PUC
 *
 * ─── Instalação das dependências ───────────────────────────────────────────
 *   npx expo install react-native-safe-area-context @expo/vector-icons
 *   (ou com npm/yarn puro)
 *   npm install react-native-safe-area-context @expo/vector-icons
 *
 * ─── Uso standalone ────────────────────────────────────────────────────────
 *   // App.tsx
 *   import { SafeAreaProvider } from 'react-native-safe-area-context';
 *   import PucTabBar, { TabKey } from './PucTabBar';
 *
 *   export default function App() {
 *     const [tab, setTab] = useState<TabKey>('inicio');
 *     return (
 *       <SafeAreaProvider>
 *         <View style={{ flex: 1 }}>
 *           <YourScreen activeTab={tab} />
 *           <PucTabBar activeTab={tab} onTabPress={setTab} />
 *         </View>
 *       </SafeAreaProvider>
 *     );
 *   }
 *
 * ─── Uso com React Navigation ──────────────────────────────────────────────
 *   <Tab.Navigator tabBar={(props) => <PucTabBar {...props} />}>
 *     ...
 *   </Tab.Navigator>
 * ──────────────────────────────────────────────────────────────────────────
 */

import { TabConfig } from '@/@types/tabConfig';
import { appColors } from '@/styles/appColors';
import { appRoutes } from '@/utils/appRoutes';
import { Feather, Ionicons } from '@expo/vector-icons';
import React, { useCallback } from 'react';
import { Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

// ─────────────────────────────────────────────
//  TIPOS EXPORTADOS
// ─────────────────────────────────────────────

export interface PucTabBarProps {
  activeTab: string;
  onTabPress: (key: string) => void;
  tabConfig?: TabConfig[];
}

// ─────────────────────────────────────────────
//  CONFIGURAÇÃO DAS ABAS
//  Edite aqui para customizar ícones e labels
// ─────────────────────────────────────────────

// ─────────────────────────────────────────────
//  TEMA — altere para tematizar o componente
// ─────────────────────────────────────────────

const THEME = {
  background: appColors.blue.dark,
  border: '#1c1c1c',
  iconActive: '#ffffff',
  iconInactive: '#4a5a6a',
  labelActive: '#ffffff',
  labelInactive: '#4a5a6a',
  centerBg: appColors.blue.ligth,
  centerBgActive: '#005380',
  centerIcon: '#ffffff',
  indicator: '#ffffff',
} as const;

// ─────────────────────────────────────────────
//  DIMENSÕES
// ─────────────────────────────────────────────

const CENTER_SIZE = 70;
const INDICATOR_WIDTH = 26;

// ─────────────────────────────────────────────
//  COMPONENTE
// ─────────────────────────────────────────────

export default function TabBar({ activeTab, onTabPress, tabConfig }: PucTabBarProps) {
  const TABS: TabConfig[] = tabConfig || [
    appRoutes.inicio,
    appRoutes.ingressar,
    appRoutes.perfil,
    appRoutes.campi,
    appRoutes.apuc,
  ];

  const insets = useSafeAreaInsets();

  const renderIcon = (tab: TabConfig, color: string, size: number) => {
    if (tab.iconSet === 'ionicons') {
      return <Ionicons name={tab.icon as any} size={size} color={color} />;
    }
    return <Feather name={tab.icon as any} size={size} color={color} />;
  };

  const renderTab = useCallback(
    (tab: TabConfig) => {
      const isActive = activeTab === tab.key;

      // ── Botão central elevado ──────────────────
      if (tab.isCenter) {
        return (
          <TouchableOpacity
            key={tab.key}
            onPress={() => onTabPress(tab.key)}
            activeOpacity={0.8}
            style={styles.centerWrapper}
            accessibilityRole="button"
            accessibilityLabel="Perfil"
            accessibilityState={{ selected: isActive }}
          >
            <View style={[styles.centerButton, isActive && styles.centerButtonActive]}>
              {renderIcon(tab, THEME.centerIcon, 26)}
            </View>
          </TouchableOpacity>
        );
      }

      // ── Aba normal ────────────────────────────
      return (
        <TouchableOpacity
          key={tab.key}
          onPress={() => onTabPress(tab.key)}
          activeOpacity={0.7}
          style={styles.tab}
          accessibilityRole="button"
          accessibilityLabel={tab.label}
          accessibilityState={{ selected: isActive }}
        >
          {/* Traço no topo */}
          <View
            style={[
              styles.indicator,
              { backgroundColor: isActive ? THEME.indicator : 'transparent' },
            ]}
          />

          {renderIcon(tab, isActive ? THEME.iconActive : THEME.iconInactive, 22)}

          <Text
            style={[styles.label, { color: isActive ? THEME.labelActive : THEME.labelInactive }]}
          >
            {tab.label}
          </Text>
        </TouchableOpacity>
      );
    },
    [activeTab, onTabPress],
  );

  return (
    <View style={[styles.container, { paddingBottom: Math.max(insets.bottom, 8) }]}>
      {TABS.map(renderTab)}
    </View>
  );
}

// ─────────────────────────────────────────────
//  ESTILOS
// ─────────────────────────────────────────────

const styles = StyleSheet.create({
  // Container principal
  container: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    backgroundColor: THEME.background,
    borderTopWidth: StyleSheet.hairlineWidth,
    borderTopColor: THEME.border,
    paddingTop: 0,
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: -2 },
        shadowOpacity: 0.5,
        shadowRadius: 6,
      },
      android: { elevation: 16 },
    }),
  },

  // Aba normal
  tab: {
    flex: 1,
    alignItems: 'center',
    paddingBottom: 6,
    paddingTop: 8,
    gap: 4,
  },

  // Traço superior (indicador de aba ativa)
  indicator: {
    position: 'absolute',
    top: 0,
    width: INDICATOR_WIDTH,
    height: 2,
    borderRadius: 1,
  },

  label: {
    fontSize: 10,
    fontWeight: '500',
    letterSpacing: 0.1,
  },

  // Botão central
  centerWrapper: {
    flex: 1,
    alignItems: 'center',
    // Eleva o botão acima da barra
    marginTop: -(CENTER_SIZE / 2 + 4),
    paddingBottom: 4,
  },
  centerButton: {
    position: 'absolute',
    top: -70,
    width: CENTER_SIZE,
    height: CENTER_SIZE,
    borderRadius: CENTER_SIZE / 2,
    backgroundColor: THEME.centerBg,
    alignItems: 'center',
    justifyContent: 'center',
    ...Platform.select({
      ios: {
        shadowColor: THEME.centerBg,
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.65,
        shadowRadius: 10,
      },
      android: { elevation: 12 },
    }),
  },
  centerButtonActive: {
    backgroundColor: THEME.centerBgActive,
  },
});
