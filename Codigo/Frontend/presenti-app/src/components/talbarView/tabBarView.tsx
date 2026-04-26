import { View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import TabBar from './talbar';
import { TabConfig } from '@/@types/tabConfig';

type props = {
  tab: string;
  onTabPress: (tab: string) => void;
  tabConfig?: TabConfig[];
  children: React.ReactNode;
};

export default function TabView({ tab, onTabPress, tabConfig, children }: props) {
  return (
    <SafeAreaProvider>
      <View style={{ flex: 1 }}>
        {children}

        <TabBar activeTab={tab} onTabPress={onTabPress} tabConfig={tabConfig}/>
      </View>
    </SafeAreaProvider>
  );
}
