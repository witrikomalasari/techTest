import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {Button} from '../../Atoms';
import {colors, fonts} from '../../../Utils';

const CardPriceAndPhone = ({size, price, typeButton, titleButton, onPress}) => {
  return (
    <View style={styles.container}>
      <View style={styles.wrapText}>
        <Text style={styles.txt}>{size}</Text>
        <Text
          style={[
            styles.txt,
            {
              fontSize: 22,
              fontFamily: fonts.primary[900],
              color: colors.text.third,
            },
          ]}>
          {price}
        </Text>
      </View>
      <Button type={typeButton} title={titleButton} onPress={onPress} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  wrapText: {
    flex: 1,
  },
  txt: {
    fontSize: 12,
    fontFamily: fonts.primary[400],
    color: colors.text.blue,
  },
});

export default CardPriceAndPhone;
