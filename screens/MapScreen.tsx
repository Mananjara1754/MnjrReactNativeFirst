import React, { useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import * as Location from 'expo-location';

const MapScreen = () => {
  const [region, setRegion] = useState(null);
  const [markerCoordinate, setMarkerCoordinate] = useState(null);

  useEffect(() => {
    const requestLocationPermission = async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status === 'granted') {
        getCurrentLocation();
      }
    };

    requestLocationPermission();
  }, []);

  const getCurrentLocation = async () => {
    let location = await Location.getCurrentPositionAsync({});
    const { latitude, longitude } = location.coords;
    setRegion({
      latitude,
      longitude,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    });
    
    setMarkerCoordinate({
      latitude,
      longitude,
    });
  };

  return (
    <View style={styles.container}>
      {region && (
        <MapView
          style={styles.map}
          initialRegion={region}
          showsUserLocation={true}
          showsMyLocationButton={true}
        >
          {markerCoordinate && (
            <Marker
              coordinate={markerCoordinate}
              title="Votre position actuelle"
              description="Ici se trouve votre position"
            />
          )}
        </MapView>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
});

export default MapScreen;
