import { StyleSheet, StatusBar } from 'react-native';

export default StyleSheet.create({
  container: {
    paddingTop: StatusBar.currentHeight+5,
    alignItems: 'center',
    justifyContent: 'center',
  },

  block: {
    backgroundColor: '#e4ecf2',
    paddingVertical: 10,
    paddingHorizontal: 17,
    width: '90%',
    borderRadius: 20,
    alignItems: 'center',
    marginTop: 10,
  },

  title: {
    fontSize: 23,
    color: '#575757',
  },

  button: {
    fontSize: 23,
    color: '#e4ecf2',
    backgroundColor: '#749ab5',
    width: '70%',
    paddingVertical: 10,
    textAlign: 'center',
    borderRadius: 20,
    marginTop: 10
  }
});
