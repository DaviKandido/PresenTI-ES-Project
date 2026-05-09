import { ScrollView, StyleSheet, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import TabBar from './talbar';
import { TabConfig } from '../../@types/tabConfig';
import { appColors } from '@/styles/appColors';
import HeaderBar from '../headerBar';

type props = {
  tab?: string;
  onTabPress?: (tab: string) => void;
  tabConfig?: TabConfig[];
  children: React.ReactNode;
  showHeaderBar?: boolean;
  titleHeaderBar?: string;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: appColors.blue.dark,
  },
});

export default function TabView({ tab, onTabPress, tabConfig, children, showHeaderBar, titleHeaderBar }: props) {
  return (
    <SafeAreaProvider>
      <View style={styles.container}>

        {showHeaderBar && <HeaderBar title={titleHeaderBar || ''} />}

        <ScrollView
          showsVerticalScrollIndicator={false}
          bounces={false}
          contentContainerStyle={{
            flexGrow: 1,
            backgroundColor: appColors.blue.dark,
          }}
        >
          {children}
        </ScrollView>

        {(tab && onTabPress) && <TabBar activeTab={tab} onTabPress={onTabPress} tabConfig={tabConfig} />}
      </View>
    </SafeAreaProvider>
  );
}
