import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.adrp.eartrainer',
  appName: "August's Eartrainer",
  webDir: 'dist',
  server: {
    androidScheme: 'https'
  }
};

export default config;
