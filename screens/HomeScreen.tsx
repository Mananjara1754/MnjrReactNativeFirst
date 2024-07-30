import React, { useEffect, useCallback, useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet } from 'react-native';
import { useForm } from 'react-hook-form';

const HomeScreen = ({navigation}) => {
  const { register, handleSubmit, setValue } = useForm();
  const [isRegistered, setIsRegistered] = useState(false);
  const item = {
    id: 1,
    name: 'Item 1',
    description: 'This is item 1',
  };
  const onSubmit = useCallback((formData) => {
    console.log(formData.password);
    setIsRegistered(true);
  }, []);

  const onChangeField = useCallback((name) => (text) => {
    setValue(name, text);
  }, []);

  useEffect(() => {
    register('username');
    register('email');
    register('password');
  }, [register]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>User Registration</Text>
      
      <TextInput
        style={styles.input}
        placeholder="Username"
        onChangeText={onChangeField('username')}
      />

      <TextInput
        style={styles.input}
        keyboardType="email-address"
        textContentType="emailAddress"
        placeholder="Email"
        onChangeText={onChangeField('email')}
      />

      <TextInput
        style={styles.input}
        secureTextEntry
        placeholder="Password"
        onChangeText={onChangeField('password')}
      />

      <Button title="Submit" onPress={handleSubmit(onSubmit)} />
      {isRegistered && <Text style={styles.successText}>Registration successful!</Text>}
      <Button title="Details" onPress={() => navigation.navigate('Details',{item})} />
      <Button title="Refresh" onPress={() => navigation.navigate('Refresh')} />
      <Button title="Login" onPress={() => navigation.navigate('Login')} />
      <Button title="Map" onPress={() => navigation.navigate('Map')} />
      <Button title="Travel" onPress={() => navigation.navigate('Travel')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 20, // Increased margin between boxes
    width: '40%', // Shortened width
  },
  submitButton: {
    padding: 50, // Increased button size
    marginBottom: 20, // Increased margin between boxes
    backgroundColor:"red"
  },
  successText: {
    color: 'green',
    marginTop: 10,
    fontSize: 17,
  },
});

export default HomeScreen;