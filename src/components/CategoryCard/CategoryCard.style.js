import {StyleSheet} from 'react-native';
import {Colors} from '../../themes/colors';

export default StyleSheet.create({
  container: {
    backgroundColor: '#ECEFF1',
    marginVertical: 8,
    padding: 10,
    borderTopLeftRadius: 100,
    borderBottomLeftRadius: 100,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    height: 80,
    width: 100,
    resizeMode: 'contain',
    borderRadius: 100,
    backgroundColor: '#ECEFF1',
  },
  image_container: {
    borderColor: Colors.primary,
    borderRadius: 50,
    borderWidth: 0.8,
  },
  text: {
    marginLeft: 16,
    fontSize: 24,
  },
});