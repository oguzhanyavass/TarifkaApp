import {Dimensions, StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    marginBottom: 10,
    backgroundColor: 'white',
    borderRadius: 10,
    alignItems: 'center',
    borderWidth: 2,
    borderColor: 'white',
    shadowOffset: {width: 0, height: 10},
  },
  image: {
    height: Dimensions.get('window').height / 4,
    width: Dimensions.get('window').width - 20,
    borderRadius: 10,
    // resizeMode: 'cover',
  },
  title_container: {
    zIndex: 1,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    top: Dimensions.get('window').height / 4 - 40,
    opacity: 0.5,
    backgroundColor: 'black',
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
  },
  title: {
    zIndex: 2,
    position: 'absolute',
    bottom: 8,
    left: 0,
    right: 0,
    fontWeight: 'bold',
    fontSize: 18,
    color: 'white',
    textAlign: 'right',
    marginEnd: 10,
  },
});