import React, { useState } from 'react';
import {
  Text,
  View,
  StyleSheet,
  FlatList,
  Alert,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import Constants from 'expo-constants';

import Header from './components/header';
import TodoItem from './components/TodoItem';
import AddTodo from './components/addTodo';

export default function App() {
  {
    /* List of things to do */
  }

  const [todos, setTodos] = useState([
    { text: 'Meditation for 10 min', key: '1' },
    { text: 'Complete React native course', key: '2' },
    { text: 'Read surat el Kahf', key: '3' },
    { text: 'Pray Jomo3a .', key: '4' },
  ]);

  {
    /*this function for deleting item when we click on it */
  }
  const pressHandler = (key) => {
  
            
            Alert.alert('dialog','do you want to mark this item as completed ?',[{
            text : "yes",
            onPress : () =>  setTodos((prevTodos) => {
      return prevTodos.filter((todo) => todo.key != key);
    }),

            },
            {
          text: "Cancel",
          style: "cancel"
        },
            ]);


  };

  {
    /*this function for adding new item to the list */
  }
  const submitHandler = (text) => {
    if (text.length > 3) {
      setTodos((prevTodos) => {
        return [{ text: text, key: Math.random().toString() }, ...prevTodos];
      });
    } else {
      Alert.alert(
        'Wrong input',
        'Todo Element is too Short !!(at least 3 charachters)'
      );
    }
  };

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}>


      
      <View style={styles.container}>
        <Header />
        <View style={styles.content}>
          <AddTodo submitHandler={submitHandler} />

          <View styles={styles.list}>
            <FlatList
              data={todos}
              renderItem={({ item }) => (
                <TodoItem item={item} pressHandler={pressHandler} />
              )}
            />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'fff',
  },
  content: {
    padding: 40,
    flex: 1,
  },
  list: {
    flex: 1,
    marginTop: 20,
  },
});
