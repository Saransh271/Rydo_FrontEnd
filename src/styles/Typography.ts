import {StyleSheet} from 'react-native';
import Colors from './Colors';

const Typography = StyleSheet.create({
  heading: {
    fontSize: 30,
    fontWeight: '700',
    color: Colors.textPrimary,
  },

  subHeading: {
    fontSize: 17,
    fontWeight: '400',
    color: Colors.textSecondary,
  },

  title: {
    fontSize: 22,
    fontWeight: '600',
    color: Colors.textPrimary,
  },

  body: {
    fontSize: 16,
    color: Colors.textPrimary,
  },

  input: {
    fontSize: 16,
    color: Colors.white,
  },

  button: {
    fontSize: 18,
    fontWeight: '600',
    color: Colors.white,
  },

  link: {
    fontSize: 15,
    color: Colors.primary,
    fontWeight: '600',
  },
});

export default Typography;