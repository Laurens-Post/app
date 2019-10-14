import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function App() {
  return (
      <View style={styles.screen}>
        <View style={styles.inputContainer}>
          <TextInput placeholder="Doelen voor mps app" style={styles.input} />
          <Button title="Toevoegen" />
        </View>
        <View />
      </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  input: {
    width: '80%',
    borderColor: 'black',
    borderWidth: 1,
    padding: 10
  }
});
