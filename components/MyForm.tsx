import React from 'react';
import { View, TextInput, Button, Text, StyleSheet } from 'react-native';
import { useForm, Controller } from 'react-hook-form';

const MyForm = ({ onSubmit, fields, validationSchema }) => {
  const { control, handleSubmit, formState: { errors } } = useForm({ resolver: validationSchema });

  return (
    <View>
      {fields.map((field) => (
        <Controller
          key={field.name}
          control={control}
          rules={field.rules}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              style={styles.input}
              placeholder={field.placeholder}
              onChangeText={onChange}
              onBlur={onBlur}
              value={value}
              secureTextEntry={field.secureTextEntry}
            />
          )}
          name={field.name}
        />
      ))}
      {Object.keys(errors).map((key) => (
        <Text key={key} style={styles.error}>{errors[key]?.message}</Text>
      ))}
      <Button title="Soumettre" onPress={handleSubmit(onSubmit)} />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    // Styles pour vos champs de saisie
  },
  error: {
    color: 'red',
  },
});

export default MyForm;
