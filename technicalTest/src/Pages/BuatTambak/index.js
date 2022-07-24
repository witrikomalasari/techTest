import React from 'react';
import {Text, View} from 'react-native';
import {Headers} from '../../Components';

const BuatTambak = ({navigation}) => {
  return (
    <View>
      <Headers
        title="Buat Tambak"
        type="icon-only"
        icon="arrowBack"
        onPress={() => navigation.goBack()}
      />
      <Text>BuatTambak</Text>
    </View>
  );
};

export default BuatTambak;
