import React from 'react';
import { View, TextInput, Button, Text, StyleSheet } from 'react-native';
import { useForm, Controller } from 'react-hook-form';

const LoginScreen = () => {
  const { control, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log('Valeurs soumises:', data);
    alert("Mety :3 ")
  };

  return (
    <View style={styles.container}>
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

      <Button title="Soumettre" onPress={handleSubmit(onSubmit)} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8,
  },
  error: {
    color: 'red',
  },
});

export default LoginScreen;
