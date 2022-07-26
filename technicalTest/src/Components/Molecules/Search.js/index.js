import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {Delete, SearchIcon} from '../../../Assets';
import {TextInput} from '../../Atoms';

const Search = ({placeholder, placeholderTextColor, onDelete}) => {
  return (
    <View
      style={{
        // flex: 1,
        marginHorizontal: 16,
        flexDirection: 'row',
      }}>
      <TextInput
        placeholder={placeholder}
        placeholderTextColor={placeholderTextColor}
      />
      <SearchIcon position="absolute" top={32} left={11} />
      <TouchableOpacity activeOpacity={0.7} onPress={onDelete}>
        <Delete top={30} />
      </TouchableOpacity>
    </View>
  );
};

export default Search;
