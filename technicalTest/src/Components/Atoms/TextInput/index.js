import React from 'react';
import {StyleSheet, Text, View, TextInput as TextInputRN} from 'react-native';
import {colors} from '../../../Utils';

const TextInput = ({label, placeholder, ...restProps}) => {
  return (
    <View style={{flex: 1}}>
      <Text style={styles.label}>{label}</Text>
      <TextInputRN
        style={styles.input}
        placeholder={placeholder}
        {...restProps}
        scrollEnabled={true}
      />
    </View>
  );
};

export default TextInput;

const styles = StyleSheet.create({
  label: {fontSize: 16, color: '#020202'},
  input: {
    backgroundColor: '#E5E5E5',
    borderWidth: 1,
    borderColor: '#020202',
    padding: 4,
    borderRadius: 4,
    marginRight: 10,
    paddingLeft: 35,
    color: colors.text.black,
  },
});
