import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import {Delete, SearchIcon} from '../../../Assets';
import {TextInput} from '../../Atoms';

const Search = ({
  placeholder,
  placeholderTextColor,
  onDelete,
  value,
  onChangeText,
}) => {
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
        value={value}
        onChangeText={onChangeText}
      />
      <SearchIcon position="absolute" top={32} left={11} />
      <TouchableOpacity activeOpacity={0.7} onPress={onDelete}>
        <Delete top={30} />
      </TouchableOpacity>
    </View>
  );
};

export default Search;
