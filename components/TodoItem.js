import * as React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';


export default function TodoItem({ item, pressHandler }) {
  return (
    <TouchableOpacity onPress={() => pressHandler(item.key)}>
      <View style={styles.item}>
        <Text>{item.text}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  item: {
    justifyContent : "flex-start",
    padding: 16,
    marginTop: 16,
    borderColor: '#bbb',
    borderWidth: 1,
    borderStyle: 'dashed',
    borderRadius: 10,
    flexDirection : 'row',
  },
  
  
});
