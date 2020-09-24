import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { TextInput } from 'react-native-gesture-handler';

const SearchBar = ({ term, onTermChange, onTermSubmit }) => {
  return (
    <View style={styles.background}>
      <Feather name='search' size={25} />
      <TextInput
        placeholder='Search'
        style={styles.inputStyle}
        value={term}
        onChangeText={onTermChange}
        autoCapitalize='none'
        autoCorrect={false}
        onEndEditing={onTermSubmit}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    backgroundColor: '#F0EEEE',
    height: 50,
    borderRadius: 5,
    marginHorizontal: 15,
    marginVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    marginBottom: 10,
  },
  inputStyle: {
    marginLeft: 10,
  },
});

export default SearchBar;
