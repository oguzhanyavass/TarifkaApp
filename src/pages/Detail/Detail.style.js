import {StyleSheet, Dimensions} from 'react-native';
import { Colors } from '../../themes/colors';

export default StyleSheet.create({
  container: {
    backgroundColor: '#F2F2F2',
  },
  image: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').width * (15 / 16),
    resizeMode:'cover',
    borderRadius:10,
  },
  title_container: {
    padding: 8,
  },
  title: {
    color: Colors.detail_title,
    fontSize: 24,
    fontWeight: 'bold',
  },
  subtitle: {
    color: Colors.detail_title,
    fontSize: 18,
    fontWeight: 'bold',
  },
  divider: {
    marginVertical: 2,
    height: 1,
    backgroundColor: '#BDBDBD',
    width: Dimensions.get('window').width,
  },
  instruction_container: {
    padding: 8,
  },
  instruction_title: {
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 3,
  },
  ingredient: {
    color: 'black',
    fontStyle: 'italic',
  },
  instructions: {
    color: 'black',
    marginBottom: 2,
  },
});