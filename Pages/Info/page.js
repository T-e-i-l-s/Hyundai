import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import styles from './styles'

export default function App({ navigation, route }) {

  const param = route['params'].info

  return (
    <View style={{flex: 1, backgroundColor: '#cedeeb'}}>
      <View style={styles.container}>

        <StatusBar style="auto" />

        <View style={styles.block}>
          <Text style={styles.title}>title: {param.title}</Text>
          <Text style={styles.title}>release year: {param.releaseYear}</Text>
          <Text style={styles.button} onPress={() => {navigation.navigate('Main')}}>back</Text>
        </View>

      </View>
    </View>
  );
}
