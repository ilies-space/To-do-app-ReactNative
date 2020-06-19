import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default function Header() {
  return(
    <View style={styles.header}>
    <Text style={styles.title} >My todo</Text>
    </View>

  )

}

  const styles = StyleSheet.create({
    header : {
      height : 80,
      paddingTop : 38,
      backgroundColor : 'coral',
    },
    title : {
      textAlign : "center",
      color : 'white',
      fontSize : 20,
      fontWeight : "bold",
    
    }
  });