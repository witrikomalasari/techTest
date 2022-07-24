import React from 'react';
import {Text, View} from 'react-native';
import {Headers} from '../../Components';

const KabarUdang = ({navigation}) => {
  return (
    <View>
      <Headers
        title="Kabar Udang"
        type="icon-only"
        icon="arrowBack"
        onPress={() => navigation.goBack()}
      />
      <Text>KabarUdang</Text>
    </View>
  );
};

export default KabarUdang;
