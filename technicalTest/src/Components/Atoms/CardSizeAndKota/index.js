import React from 'react';
import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Gap from '../Gap';

const {height: ScreenHeight} = Dimensions.get('window');

const CardSizeAndKota = ({onPress, type, title, height, price}) => {
  const List = () => {
    if (type === 'size' || type === 'region') {
      return <Text style={styles.txt}>{title}</Text>;
    }
    if (type === 'listHarga') {
      return (
        <View style={{flexDirection: 'row'}}>
          <Text style={styles.txt}>{title}</Text>
          <Gap width={15} />
          <Text style={styles.txt}>{price}</Text>
        </View>
      );
    }
  };

  return (
    <TouchableOpacity
      activeOpacity={0.7}
      style={styles.container(height)}
      onPress={onPress}>
      <List />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: height => ({
    paddingHorizontal: 16,
    justifyContent: 'center',
    height: ScreenHeight / height,
    // backgroundColor: 'pink',
  }),
  txt: {color: 'black', fontSize: 14},
});

export default CardSizeAndKota;
