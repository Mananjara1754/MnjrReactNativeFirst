import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Button } from 'react-native';

const TravelScreen = () => {
  const [from, setFrom] = useState('Brussels');
  const [to, setTo] = useState('Ghent');
  const [selectedDate, setSelectedDate] = useState('Today');
  const [passengers, setPassengers] = useState(1);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Where are you going?</Text>

      <View style={styles.routeContainer}>
        <TextInput
          style={styles.input}
          value={from}
          onChangeText={setFrom}
          placeholder="From"
        />
        <TextInput
          style={styles.input}
          value={to}
          onChangeText={setTo}
          placeholder="To"
        />
        <TouchableOpacity style={styles.swapButton}>
          <Text>🔄</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.dateContainer}>
        <Text style={styles.label}>Date</Text>
        <View style={styles.dateOptions}>
          <TouchableOpacity onPress={() => setSelectedDate('Today')}>
            <Text style={selectedDate === 'Today' ? styles.selected : styles.option}>Today</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setSelectedDate('Tomorrow')}>
            <Text style={selectedDate === 'Tomorrow' ? styles.selected : styles.option}>Tomorrow</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setSelectedDate('Other Date')}>
            <Text style={selectedDate === 'Other Date' ? styles.selected : styles.option}>Other Date</Text>
          </TouchableOpacity>
          <Button title="📅" onPress={() => {}} />
        </View>
      </View>

      <View style={styles.passengerContainer}>
        <Text style={styles.label}>Passengers</Text>
        <View style={styles.passengerOptions}>
          {[1, 2, 3, 4].map(number => (
            <TouchableOpacity key={number} onPress={() => setPassengers(number)}>
              <Text style={passengers === number ? styles.selectedPassenger : styles.passenger}>{number}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>

      <TouchableOpacity style={styles.searchButton}>
        <Text style={styles.searchButtonText}>Search</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E0F7FA',
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  routeContainer: {
    backgroundColor: '#80DEEA',
    borderRadius: 10,
    padding: 10,
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  swapButton: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    borderRadius: 25,
    padding: 10,
    alignSelf: 'flex-end',
    marginTop: -20,
    marginRight: 10,
  },
  dateContainer: {
    marginBottom: 20,
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  dateOptions: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  option: {
    marginHorizontal: 10,
  },
  selected: {
    marginHorizontal: 10,
    fontWeight: 'bold',
    color: '#00838F',
  },
  passengerContainer: {
    marginBottom: 20,
  },
  passengerOptions: {
    flexDirection: 'row',
    marginTop: 10,
  },
  passenger: {
    marginHorizontal: 10,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 15,
    padding: 10,
    textAlign: 'center',
    width: 30,
  },
  selectedPassenger: {
    marginHorizontal: 10,
    borderWidth: 1,
    borderColor: '#00838F',
    backgroundColor: '#80DEEA',
    borderRadius: 15,
    padding: 10,
    textAlign: 'center',
    width: 30,
  },
  searchButton: {
    backgroundColor: '#00838F',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  searchButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default TravelScreen;
