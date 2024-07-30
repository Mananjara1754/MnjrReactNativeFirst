import React from 'react';
import { View, TextInput, Button, Text, StyleSheet, TouchableOpacity, _View } from 'react-native';
import { useForm, Controller } from 'react-hook-form';

const LoginScreen = () => {
  const { control, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log('Valeurs soumises:', data);
    alert("Mety :3 ")
  };

  return (
    
    <View style={styles.container}>
      <View style={styles.head}>
      
      </View>
      <View style={styles.form}>
          <Controller
            control={control}
            rules={{ required: 'Le nom d\'utilisateur est requis.' }}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                style={styles.input}
                placeholder="Nom d'utilisateur"
                onChangeText={onChange}
                onBlur={onBlur}
                value={value}
              />
            )}
            name="username"
          />
          {errors.username && <Text style={styles.error}>{errors.username.message}</Text>}

          <Controller
            control={control}
            rules={{
              required: 'Le mot de passe est requis.',
              minLength: { value: 8, message: 'Le mot de passe doit comporter au moins 8 caractères.' },
              maxLength: { value: 20, message: 'Le mot de passe ne peut pas dépasser 20 caractères.' },
              pattern: {
                value: /(?=.*[0-9])(?=.*[A-Z])/,
                message: 'Le mot de passe doit contenir au moins un chiffre et une majuscule.'
              }
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                style={styles.input}
                secureTextEntry
                placeholder="Mot de passe"
                onChangeText={onChange}
                onBlur={onBlur}
                value={value}
              />
            )}
            name="password"
          />
          {errors.password && <Text style={styles.error}>{errors.password.message}</Text>}
              
          <TouchableOpacity style={styles.button} onPress={handleSubmit(onSubmit)} >
          <Text style={styles.buttonText}>Soumettre</Text>
          </TouchableOpacity>
      </View>
      
    </View>
  );
};

const styles = StyleSheet.create({
  head:{
    backgroundColor: '#85d8ea',
    height:'60%',
    borderBottomRightRadius:35,
    borderBottomLeftRadius:35
  },
  form:{
    padding: 16,
    marginTop:10
  },
  container: {
   
    
  },
  button: {
    backgroundColor: '#546a7b',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 5,
    alignItems: 'center',
    borderTopEndRadius:30,
    borderBottomEndRadius:30,
    borderBottomLeftRadius:30,
    borderTopLeftRadius:30
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 0.5,
    marginBottom: 18,
    paddingHorizontal: 15,
    paddingTop:10,
    paddingBottom:10,
    fontSize:11,
    borderTopRightRadius:30,
    borderBottomRightRadius:30,
    borderBottomLeftRadius:30,
    borderTopLeftRadius:30
  },
  error: {
    color: 'red',
  },
});

export default LoginScreen;
