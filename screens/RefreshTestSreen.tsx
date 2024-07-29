import React, { useEffect, useCallback, useState } from 'react';
import { View, Text, StyleSheet, FlatList, RefreshControl, ActivityIndicator } from 'react-native';

const RefreshTestScreen = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [refreshing, setRefreshing] = useState(false);

  // Fonction pour charger les données
  const fetchData = async () => {
    setLoading(true);
    // Simuler une requête API avec un délai
    await new Promise((resolve) => setTimeout(resolve, 2000));
    // Exemple de données
    setData([{ id: '1', title: 'Item 1' }, { id: '2', title: 'Item 2' }]);
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  // Fonction pour rafraîchir les données
  const onRefresh = useCallback(async () => {
    setRefreshing(true);
    await fetchData(); // Recharger les données
    setRefreshing(false); // Arrêter le rafraîchissement
  }, []);

  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Text>{item.title}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      {loading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  item: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    width: '100%',
  },
});

export default RefreshTestScreen;
