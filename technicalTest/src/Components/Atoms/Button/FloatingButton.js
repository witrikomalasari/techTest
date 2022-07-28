import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {colors} from '../../../Utils';

const FloatingButton = ({onPress, typeStyle, image, title, subTitle}) => {
  return (
    <TouchableOpacity activeOpacity={0.7} onPress={onPress}>
      <Image source={image} />
      <View style={styles.subContainer(typeStyle)}>
        <Text>{title}</Text>
        <Text>{subTitle}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  subContainer: typeStyle => ({
    // flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:
      typeStyle === 'size'
        ? colors.button.secondary.background
        : colors.button.primary.background,
    width: typeStyle === 'size' ? 136 : 200,
    height: 44,
    borderTopLeftRadius: typeStyle === 'size' ? 60 : 0,
    borderBottomLeftRadius: typeStyle === 'size' ? 60 : 0,
    borderTopRightRadius: typeStyle !== 'size' ? 60 : 0,
    borderBottomRightRadius: typeStyle !== 'size' ? 60 : 0,
  }),
});

export default FloatingButton;
