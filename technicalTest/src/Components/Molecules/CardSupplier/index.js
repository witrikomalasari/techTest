import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {colors, fonts} from '../../../Utils';
import CardPriceAndPhone from '../CardPriceAndPhone';
import ProfileSupplier from '../ProfileSupplier';

const CardSupplier = ({
  image,
  nameSupplier,
  date,
  provinsi,
  kota,
  size,
  price,
  type,
  typeButton,
  typeButtonVerification,
  titleButton,
  disable,
  title,
  onPress,
}) => {
  const renderContent = () => {
    switch (type) {
      case 'HargaUdang':
        return (
          <>
            <ProfileSupplier
              image={image}
              nameSupplier={nameSupplier}
              disable={disable}
              title={title}
              type={typeButtonVerification}
            />
            <View style={{paddingBottom: 4}}>
              <Text
                style={[
                  styles.txt,
                  {color: colors.text.blue, paddingBottom: 4, paddingTop: 10},
                ]}>
                {date}
              </Text>
              <Text
                style={[
                  styles.txt,
                  {color: colors.text.third, paddingBottom: 4},
                ]}>
                {provinsi}
              </Text>
              <Text
                style={[
                  styles.txt,
                  {
                    color: colors.text.third,
                    fontSize: 18,
                    fontFamily: fonts.primary[700],
                    paddingBottom: 4,
                  },
                ]}>
                {kota}
              </Text>
              <CardPriceAndPhone
                typeButton={typeButton}
                titleButton={titleButton}
                price={price}
                size={size}
                onPress={onPress}
              />
            </View>
          </>
        );
    }
  };

  return <View style={styles.container}>{renderContent()}</View>;
};

export default CardSupplier;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    paddingTop: 14,
    paddingBottom: 11,
    marginVertical: 8,
    borderColor: colors.border.primary,
    borderRadius: 4,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    elevation: 5,
    borderWidth: 1,
    paddingLeft: 12,
    paddingRight: 10,
  },
  txt: {
    fontSize: 12,
    fontFamily: fonts.primary[400],
  },
});
