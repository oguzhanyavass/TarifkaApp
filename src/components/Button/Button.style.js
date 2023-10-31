import {StyleSheet} from 'react-native';
import {Colors} from '../../themes/colors';

export default StyleSheet.create({
  container: {
    backgroundColor: Colors.button_youtube,
    borderRadius: 5,
    padding: 10,
    paddingHorizontal: 20,
    margin: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: Colors.on_tertiary,
    fontWeight: 'bold',
    fontSize: 16,
  },
});