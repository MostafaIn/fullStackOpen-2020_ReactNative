import { Platform } from 'react-native';

const theme = {
  colors: {
    backgroundPrimary: '#393e46',
    backgroundSecondary: '#222831',
    textPrimary: '#222',
    textSecondary: '#888',
    primary: '#0366d6',
    error: '#d73a4a',
    borderColor: '#333',
  },
  fontSizes: {
    body: 14,
    subheading: 16,
  },
  fonts: Platform.select({
    android: 'sans-serif',
    ios: 'Arial',
    default: 'System',
  }),
  fontWeights: {
    normal: '400',
    bold: '700',
  },
};
export default theme;
