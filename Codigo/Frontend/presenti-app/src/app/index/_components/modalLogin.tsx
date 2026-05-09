import { Options } from '../../../components/option';
import { appColors } from '../../../styles/appColors';
import { sizeText } from '../../../styles/sizeText';
import { appRoutes } from '../../../utils/appRoutes';
import { useRouter } from 'expo-router';
import { Image, Modal, ModalProps, StyleSheet, Text, View } from 'react-native';
import { ButtonLogin } from './buttonLogin';

type Props = ModalProps & {
  setShowModal: (value: boolean) => void;
};

export function ModalLogin({ setShowModal, ...rest }: Props) {
  const router = useRouter();

  function handleLoginPress(tipo: 'Professor' | 'Aluno') {
    setShowModal(false);
    router.push({ pathname: appRoutes.login.route as any, params: { typeLogin: tipo } });
  }
  return (
    <Modal transparent animationType="slide" {...rest}>
      <View style={styles.modal}>
        <View style={styles.modalContent}>
          <View style={styles.containerHeader}>
            <Image source={require('../../../assets/images/sga-white.png')} style={styles.imageLogo} />
            <Options icon="close" onPress={() => setShowModal(false)}></Options>
          </View>
          <View style={styles.containerTitle}>
            <Text style={styles.title}>Escolha seu perdil de acesso ao SGA</Text>
          </View>
          <View style={styles.containerButtons}>
            <ButtonLogin
              title="Professor"
              firstIcon="people"
              secondIcon="arrow-forward"
              onPress={() => handleLoginPress('Professor')}
            />
            <ButtonLogin
              title="Aluno"
              firstIcon="school"
              secondIcon="arrow-forward"
              onPress={() => handleLoginPress('Aluno')}
            />
            <Text style={styles.textNote}>Você será redirecionado para a tela de login</Text>
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modal: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: appColors.desfoque.weak,

    zIndex: 1000,
  },
  modalContent: {
    backgroundColor: appColors.blue.opaqueMedium,
    padding: 20,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  imageLogo: {
    width: 80,
    height: 40,
    resizeMode: 'contain',
  },
  containerHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  containerTitle: {
    marginTop: 20,
    marginBottom: 10,
  },
  title: {
    color: appColors.gray[400],
    fontSize: sizeText.descriptions,
    fontWeight: '600',
  },
  textNote: {
    color: appColors.gray[400],
    fontSize: sizeText.notes - 3,
    fontWeight: '400',
    textAlign: 'left',
  },
  containerButtons: {
    gap: 10,
  },
});
