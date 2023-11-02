import { StatusBar } from 'expo-status-bar';
import { FlatList, Text, View } from 'react-native';
import styles from './styles'
import axios from 'axios';
import React, { useState } from 'react';

let flag = false

export default function App({navigation}) {

  const [isUpdating, setIsUpdating] = useState(false)
  const [data, setData] = useState([{'title':'loading...'}])

  const loadData = () => {
    axios.get("https://reactnative.dev/movies.json")
        .then(response => {
          setData(response.data.movies)
        })
        .catch(error => {
          console.log(error);
        });
  }


  if ( !flag ) {
    flag = true
    loadData()
    setInterval(() => {
      loadData()
    },60000)
  }


  return (
    <View style={{flex: 1, backgroundColor: '#cedeeb'}}>
      <View style={styles.container}>

        <StatusBar style="auto" />

        <FlatList
        style={{width:'90%'}}
        data={data}
        renderItem={({item}) => (
          <View style={styles.block} onStartShouldSetResponder={() => {
            navigation.navigate('Info', {'info': item})
          }}>
            <Text style={styles.title}>{item.title}</Text>
          </View>
        )}/>

      </View>
    </View>
  );

}
