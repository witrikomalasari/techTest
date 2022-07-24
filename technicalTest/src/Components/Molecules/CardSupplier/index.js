import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import React from 'react';
import ProfileSupplier from '../ProfileSupplier';
import {Button} from '../../Atoms';
import {colors, fonts} from '../../../Utils';

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
                    fontFamily: fonts.primary['700'],
                    paddingBottom: 4,
                  },
                ]}>
                {kota}
              </Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <View style={{flex: 1, backgroundColor: 'blue'}}>
                <Text>{size}</Text>
                <Text>{price}</Text>
              </View>
              <Button type={typeButton} title={titleButton} onPress={onPress} />
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
    paddingVertical: 20,
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
    paddingRight: 16,
  },
  txt: {
    fontSize: 12,
    fontFamily: fonts.primary['400'],
  },
});
