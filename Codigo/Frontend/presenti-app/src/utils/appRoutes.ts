import { TabConfig } from '@/@types/tabConfig';

export const appRoutes: Record<string, TabConfig> = {
  inicio: {
    key: 'inicio',
    label: 'Início',
    icon: 'home',
    iconSet: 'feather',
    route: '/',
  },
  ingressar: {
    key: 'ingressar',
    label: 'Ingressar',
    icon: 'file-text',
    iconSet: 'feather',
    route: '/ingressar',
  },
  perfil: {
    key: 'perfil',
    label: '',
    icon: 'person',
    iconSet: 'ionicons',
    route: '/perfil',
    isCenter: true,
  },
  campi: {
    key: 'campi',
    label: 'Campi',
    icon: 'map-pin',
    iconSet: 'feather',
    route: '/campi',
  },
  apuc: {
    key: 'apuc',
    label: 'A PUC',
    icon: 'columns',
    iconSet: 'feather',
    route: '/a-puc',
  },
};
