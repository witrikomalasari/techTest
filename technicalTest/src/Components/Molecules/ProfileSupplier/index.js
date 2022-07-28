import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {colors, fonts} from '../../../Utils';
import {Button} from '../../Atoms';

const ProfileSupplier = ({image, nameSupplier, title, type, disable}) => {
  return (
    <View style={styles.container}>
      <Image source={image} style={styles.photoContainer} />
      <View style={{flex: 1, marginLeft: 8}}>
        <Text
          style={{
            fontSize: 12,
            fontFamily: fonts.primary[400],
            color: colors.text.blue,
            paddingBottom: 3,
          }}>
          Supplier
        </Text>
        <Text
          style={{
            fontSize: 14,
            fontFamily: fonts.primary[400],
            color: colors.text.third,
          }}>
          {nameSupplier}
        </Text>
      </View>
      {!disable ? <Button type={type} title={title} disable={disable} /> : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    // backgroundColor: 'lightblue',
  },
  photoContainer: {
    width: 32,
    height: 32,
    borderRadius: 32,
  },
});

export default ProfileSupplier;
