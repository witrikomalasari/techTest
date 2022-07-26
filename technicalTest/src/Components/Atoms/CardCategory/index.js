import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';
import {colors, fonts} from '../../../Utils';

const CardCategory = ({onPress, title, type}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={onPress}
      style={styles.container(type)}>
      <Text style={styles.txt(type)}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: type => ({
    width: 100,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:
      type === 'active' ? colors.button.primary.background : 'null',
    borderColor: colors.primary,
    borderRadius: 4,
    borderWidth: 2,
  }),
  txt: type => ({
    color: type === 'active' ? colors.text.white : colors.text.title,
    fontSize: 12,
    fontFamily: fonts.primary[700],
  }),
});

export default CardCategory;
