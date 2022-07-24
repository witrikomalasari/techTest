import React from 'react';
import {Text, View} from 'react-native';
import {Headers} from '../../Components';

const HargaUdang = ({navigation}) => {
  return (
    <View>
      <Headers
        title="Harga Udang"
        type="icon-only"
        icon="arrowBack"
        onPress={() => navigation.goBack()}
      />
      <Text>HargaUdang</Text>
    </View>
  );
};

export default HargaUdang;
