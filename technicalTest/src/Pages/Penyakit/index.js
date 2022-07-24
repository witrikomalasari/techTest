import React from 'react';
import {Text, View} from 'react-native';
import {Headers} from '../../Components';

const InfoPenyakit = ({navigation}) => {
  return (
    <View>
      <Headers
        title="Info Penyakit"
        type="icon-only"
        icon="arrowBack"
        onPress={() => navigation.goBack()}
      />
      <Text>InfoPenyakit</Text>
    </View>
  );
};

export default InfoPenyakit;
