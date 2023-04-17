import {StyleSheet, View, Text,TouchableOpacity,TextInput } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'


export default function Login() {
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const navigation = useNavigation();
  
    const handleLogin = () => {
      console.log(`Name: ${name} Password: ${password}`);
      if (name == "u" && password == 1 ) {
        navigation.navigate('UserTabs')
      }
      else if (name == "a" && password == 1) {
        navigation.navigate('AdminTabs')
      }
      // Here you would typically send the form data to a server for validation
      // and handle the response accordingly
    }
  return (
    <View style={styles.container}>
    <Text style={styles.title}>Login</Text>
    <TextInput
      style={styles.input}
      placeholder="Name"
      value={name}
      onChangeText={text => setName(text)}
      autoCapitalize="none"
    />
    <TextInput
      style={styles.input}
      placeholder="Password"
      secureTextEntry={true}
      value={password}
      onChangeText={text => setPassword(text)}
      autoCapitalize="none"
    />
    <TouchableOpacity style={styles.button} onPress={handleLogin}>
      <Text style={styles.buttonText}>Login</Text>
    </TouchableOpacity>
  </View>

  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
    },
    title: {
      fontSize: 20,
      textAlign: 'center',
      margin: 10,
    },
    input: {
      height: 40,
      width: '90%',
      borderColor: 'gray',
      borderWidth: 1,
      marginVertical: 10,
      paddingHorizontal: 10,
    },
    button: {
      backgroundColor: '#4CAF50',
      paddingHorizontal: 20,
      paddingVertical: 10,
      borderRadius: 5,
      marginTop: 20,
    },
    buttonText: {
      color: '#FFFFFF',
      fontSize: 16,
      fontWeight: 'bold',
    },
  });