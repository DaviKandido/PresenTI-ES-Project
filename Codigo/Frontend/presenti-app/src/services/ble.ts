import { BleManager } from 'react-native-ble-plx';

const manager = new BleManager();

manager.startDeviceScan(null, null, (error, device) => {
  if (device?.name?.includes('PRESENTI')) {
    console.log('Token encontrado:', device.name);
  }
});
