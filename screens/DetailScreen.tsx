import { useRoute } from '@react-navigation/native';
import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const DetailScreen = ({navigation}) => {
  const route = useRoute();
  const { item } = route.params;
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Details</Text>
      <Text>{item.description}</Text>
      <Button title="Retour" onPress={() => navigation.goBack()} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    marginBottom: 20,
  },
});

export default DetailScreen;
