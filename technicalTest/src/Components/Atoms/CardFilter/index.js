import {View, Text} from 'react-native';
import React from 'react';

const CardFilter = () => {
  return (
    <TouchableOpacity
      key={id}
      activeOpacity={0.7}
      style={{
        paddingHorizontal: 16,
        justifyContent: 'center',
        height: ScreenHeight / hitung,
      }}
      onPress={() => {
        props.navigation.navigate('JalaMedia', {
          data: e,
        });
      }}>
      <Text style={{color: 'black', fontSize: 14}}>{e}</Text>
    </TouchableOpacity>
  );
};

export default CardFilter;
