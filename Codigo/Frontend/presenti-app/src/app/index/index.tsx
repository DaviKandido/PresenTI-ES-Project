import { TabConfig } from '../../@types/tabConfig';
import { Button } from '../../components/button/botton';
import TabView from '../../components/talbarView/tabBarView';
import { appRoutes } from '../../utils/appRoutes';
import { useState } from 'react';
import { Image, ScrollView, Text, View } from 'react-native';
import { Card } from './_components/card';
import { ModalLogin } from './_components/modalLogin';
import { styles } from './_styles';

const imageLogo = require('../../assets/images/logo-white.png');
const imagePoster1 = require('../../assets/posters/index-poster1.png');
const imagePoster2 = require('../../assets/posters/index-poster2.png');
const imagePoster3 = require('../../assets/posters/index-poster3.png');

export default function Index() {
  const [showModal, setShowModal] = useState(false);
  const [tab, setTab] = useState<string>('inicio');

  const data = [
    {
      id: '1',
      title: 'GRADUAÇÃO',
      image: require('../../assets/posters/poster-graduacao.png'),
    },
    {
      id: '2',
      title: 'POS-GRADUAÇÃO LATO SENSU',
      image: require('../../assets/posters/poster-pos.png'),
    },
    {
      id: '3',
      title: 'MESTRADO E DOUTORADO',
      image: require('../../assets/posters/poster-mestrado.png'),
    },
    {
      id: '4',
      title: 'APERFEIÇOAMENTO',
      image: require('../../assets/posters/poster-aperfeicoamento.png'),
    },
  ];

  const TABS: TabConfig[] = [
    appRoutes.inicio,
    appRoutes.ingressar,
    { ...appRoutes.perfil, action: () => setShowModal(true) },
    appRoutes.campi,
    appRoutes.apuc,
  ];

  return (
    <>
      <TabView tab={tab} onTabPress={setTab} tabConfig={TABS}>
        <ScrollView
          contentContainerStyle={styles.container}
          showsVerticalScrollIndicator={false}
          bounces={false}
        >
          <View style={styles.backgroundTop}>
            <Image style={styles.imageLogo} source={imageLogo} resizeMode="contain" />
          </View>

          <View style={styles.containerMiddle}>
            <Image source={imagePoster1} style={styles.imagePoster} resizeMode="contain" />
          </View>

          <View style={styles.containerBottom}>
            <Text style={styles.title}>VEM PRA PUC</Text>
            <View style={styles.gridContainer}>
              {data.map((item) => (
                <Card key={item.id} image={item.image} />
              ))}
            </View>
          </View>

          <View style={styles.containerBottom}>
            <Text style={styles.title}>VOCÊ POR DENTRO</Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              <Image source={imagePoster2} style={styles.imagePosterScroll} resizeMode="contain" />
              <Image source={imagePoster3} style={styles.imagePosterScroll} resizeMode="contain" />
            </ScrollView>
          </View>

          <View style={styles.containerBottom}>
            <Text style={styles.title}>Notícias</Text>
            <Button title="Ver mais" />
          </View>
        </ScrollView>
      </TabView>

      <ModalLogin visible={showModal} setShowModal={() => setShowModal(false)} />
    </>
  );
}
