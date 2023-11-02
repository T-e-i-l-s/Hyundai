import { StatusBar, StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    paddingTop: StatusBar.currentHeight+5,
    alignItems: 'center',
    justifyContent: 'flex-start'
  },

  block: {
    backgroundColor: '#e4ecf2',
    paddingVertical: 10,
    paddingHorizontal: 17,
    width: '100%',
    borderRadius: 20,
    alignItems: 'center',
    marginTop: 10
  },

  title: {
    fontSize: 23,
    color: '#575757'
  }
});
