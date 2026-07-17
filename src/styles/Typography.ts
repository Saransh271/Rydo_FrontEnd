import {StyleSheet} from 'react-native';
import Colors from './Colors';

const Typography = StyleSheet.create({
  heading: {
    fontSize: 34,
    fontWeight: '800',
    color: Colors.white,
  },

  subtitle: {
    marginTop: 10,
    fontSize: 17,
    color: '#CBD5E1',
    lineHeight: 24,
  },

  input: {
    fontSize: 16,
    color: Colors.text,
  },

  button: {
    color: Colors.white,
    fontSize: 17,
    fontWeight: '700',
  },

  social: {
    color: Colors.text,
    fontSize: 16,
    fontWeight: '600',
  },
});

export default Typography;