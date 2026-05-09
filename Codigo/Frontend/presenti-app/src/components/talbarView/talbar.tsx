import { TabConfig } from '../../@types/tabConfig';
import { appColors } from '../../styles/appColors';
import { appRoutes } from '../../utils/appRoutes';
import { Feather, Ionicons } from '@expo/vector-icons';
import React, { useCallback } from 'react';
import { Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export interface PucTabBarProps {
  activeTab: string;
  onTabPress: (key: string) => void;
  tabConfig?: TabConfig[];
}

const THEME = {
  background: appColors.blue.dark,
  border: '#1c1c1c',
  iconActive: '#ffffff',
  iconInactive: '#4a5a6a',
  labelActive: '#ffffff',
  labelInactive: '#4a5a6a',
  centerBg: appColors.blue.light,
  centerBgActive: '#005380',
  centerIcon: '#ffffff',
  indicator: '#ffffff',
} as const;

const CENTER_SIZE = 70;
const INDICATOR_WIDTH = 26;

export default function TabBar({ activeTab, onTabPress, tabConfig }: PucTabBarProps) {
  const TABS: TabConfig[] = tabConfig || [appRoutes.inicio, appRoutes.ingressar, appRoutes.perfil, appRoutes.campi, appRoutes.apuc];

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
            onPress={() => tab.action?.() || onTabPress(tab.key)}
            activeOpacity={0.8}
            style={styles.centerWrapper}
            accessibilityRole="button"
            accessibilityLabel={tab.label}
            accessibilityState={{ selected: isActive }}
          >
            <View style={[styles.centerButton, isActive && styles.centerButtonActive]}>{renderIcon(tab, THEME.centerIcon, 26)}</View>
          </TouchableOpacity>
        );
      }

      // ── Aba normal ────────────────────────────
      return (
        <TouchableOpacity
          key={tab.key}
          onPress={() => tab.action?.() || onTabPress(tab.key)}
          activeOpacity={0.7}
          style={styles.tab}
          accessibilityRole="button"
          accessibilityLabel={tab.label}
          accessibilityState={{ selected: isActive }}
        >
          <View style={[styles.indicator, { backgroundColor: isActive ? THEME.indicator : 'transparent' }]} />

          {renderIcon(tab, isActive ? THEME.iconActive : THEME.iconInactive, 22)}

          <Text style={[styles.label, { color: isActive ? THEME.labelActive : THEME.labelInactive }]}>{tab.label}</Text>
        </TouchableOpacity>
      );
    },
    [activeTab, onTabPress],
  );

  return <View style={[styles.container, { paddingBottom: Math.max(insets.bottom, 8) }]}>{TABS.map(renderTab)}</View>;
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    backgroundColor: THEME.background,
    borderTopWidth: StyleSheet.hairlineWidth,
    borderTopColor: THEME.border,
    paddingTop: 0,
    // Overflow visível para o botão central aparecer acima da barra
    overflow: 'visible',
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

  tab: {
    flex: 1,
    alignItems: 'center',
    paddingBottom: 6,
    paddingTop: 8,
    gap: 4,
  },

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

  // ── Botão central ─────────────────────────────────────────────
  // A área de toque (TouchableOpacity) sobe junto com o botão
  // usando marginTop negativo — sem position: absolute no botão.
  centerWrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingBottom: 6,
    // Área de toque expandida para cima
    marginTop: -(CENTER_SIZE / 2 + 12),
  },

  centerButton: {
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
