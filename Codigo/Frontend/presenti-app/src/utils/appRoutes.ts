import { TabConfig } from '@/@types/tabConfig';

export const appRoutes: Record<string, TabConfig> = {
  inicio: {
    key: 'inicio',
    label: 'Início',
    icon: 'home',
    iconSet: 'feather',
    route: '/index',
  },
  home: {
    key: 'home',
    label: 'Início',
    icon: 'home',
    iconSet: 'feather',
    route: '/home',
  },
  ingressar: {
    key: 'ingressar',
    label: 'Ingressar',
    icon: 'file-text',
    iconSet: 'feather',
    route: '/ingressar' as any,
  },
  perfil: {
    key: 'perfil',
    label: '',
    icon: 'person-outline',
    iconSet: 'ionicons',
    isCenter: true,
    route: '/perfil' as any,
  },
  campi: {
    key: 'campi',
    label: 'Campi',
    icon: 'map-pin',
    iconSet: 'feather',
    route: '/campi' as any,
  },
  apuc: {
    key: 'apuc',
    label: 'A PUC',
    icon: 'columns',
    iconSet: 'feather',
    route: '/apuc' as any,
  },
  login: {
    key: 'login',
    label: 'Login',
    icon: 'person',
    iconSet: 'feather',
    route: '/login',
  },
  chamada: {
    key: 'chamada',
    label: 'Chamada',
    icon: 'compass-calibration',
    iconSet: 'feather',
    route: '/chamada',
  },
  gradeHorarios: {
    key: 'GradeHorarios',
    label: 'Grade de Horários',
    icon: 'time-outline',
    iconSet: 'ionicons',
    route: '/gradeHorarios',
  },
  verificacaoToken: {
    key: 'verificacaoToken',
    label: 'Verificação de Token',
    icon: 'qr-code-outline',
    iconSet: 'ionicons',
    route: '/verificacaoToken',
  }
};
