import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {LinkIcon} from '../../../Assets';
import {colors, fonts} from '../../../Utils';
import {Gap} from '../../Atoms';

const CardNewsAndPenyakit = ({image, title, subTitle, date, onPress}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      style={styles.container}
      onPress={onPress}>
      <Image
        source={image}
        style={{
          borderTopLeftRadius: 8,
          borderTopRightRadius: 8,
          overflow: 'hidden',
          resizeMode: 'cover',
        }}
      />
      <Gap height={10} />
      <View style={styles.wrap}>
        <Text style={styles.title}>{title}</Text>
        <Gap height={4} />
        <Text style={styles.txt}>{subTitle}</Text>
        <Gap height={10} />
        <View style={{flexDirection: 'row'}}>
          <Text style={{flex: 1, color: 'black'}}>{date}</Text>
          <LinkIcon />
        </View>
      </View>
      <Gap height={10} />
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: 'red',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: colors.border.primary,
    marginBottom: 12,
    // alignItems: 'center',
  },
  wrap: {
    paddingHorizontal: 8,
    // backgroundColor: 'blue',
  },
  title: {
    color: colors.text.third,
    fontFamily: fonts.primary[900],
    fontSize: 18,
    // maxWidth: 300,
  },
  txt: {
    color: colors.text.primary,
    fontFamily: fonts.primary[400],
    fontSize: 14,
  },
});
export default CardNewsAndPenyakit;
