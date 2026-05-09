import { Button } from '../../components/button/botton';
import { Input } from '../../components/input';
import { appColors } from '../../styles/appColors';
import { sizeText } from '../../styles/sizeText';
import { MaterialIcons } from '@expo/vector-icons';
import { router, useLocalSearchParams } from 'expo-router';
import { useState } from 'react';
import { Image, KeyboardAvoidingView, Switch, Text, TouchableOpacity, View } from 'react-native';
import { styles } from './_styles';
import TabBar from '@/components/talbarView/talbar';
import TabView from '@/components/talbarView/tabBarView';
import { appRoutes } from '@/utils/appRoutes';

export default function Login() {
  const { typeLogin } = useLocalSearchParams<{ typeLogin: 'Professor' | 'Aluno' }>();
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  return (
    <KeyboardAvoidingView behavior="padding" style={{ flex: 1 }}>
      <TabView showHeaderBar titleHeaderBar={typeLogin}>
        <View style={styles.container}>
          <View style={styles.containerHeader}>
            <Image source={require('../../assets/images/sga-white.png')} style={styles.sgaLogo} />
            <Text style={styles.textTitle}>Acesse sua conta</Text>
            <Text style={styles.subTitle}>
              Por favor, isira seus dados de login para visualizar suas informações
            </Text>
          </View>

          <View style={styles.containerMiddle}>
            <View style={{ gap: 15 }}>
              <Input placeholder="Insira seu usuário" />
              <Input placeholder="Insira sua senha" secureTextEntry />
            </View>
            <View style={styles.containerBottom}>
              <Switch
                value={isEnabled}
                trackColor={{ false: '#767577', true: appColors.blue.light }} // Cor do fundo
                thumbColor={isEnabled ? '#f4f3f4' : '#f4f3f4'} // Cor da bolinha
                ios_backgroundColor="#3e3e3e"
                onValueChange={toggleSwitch}
                style={{ transform: [{ scaleX: 1.2 }, { scaleY: 1.2 }], marginVertical: 10 }}
              />
              <Text>
                {' '}
                <Text style={{ fontWeight: 'bold', color: appColors.gray[50] }}>
                  Manter conectado
                </Text>
              </Text>
            </View>
            <View>
              <Button title="acessar" onPress={() => router.push(appRoutes.home.route)} />
            </View>
          </View>
        </View>
      </TabView>
    </KeyboardAvoidingView>
  );
}
