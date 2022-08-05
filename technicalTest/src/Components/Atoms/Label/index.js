import {View, Text} from 'react-native';
import React from 'react';

const Label = ({label}) => {
  // const LabelText = () => {
  //   let result = '';
  //   for (let i = 0; i < arr.length; i++) {
  //     i === 0 && arr[i].length === 1
  //       ? (result += arr[i].toUpperCase())
  //       : (result += arr[i].charAt(0).toUpperCase());
  //     result += arr[i].substring(1).toLowerCase();
  //   }
  //   return result;
  // };

  // const LabelText = text => {
  //   let string = '';
  //   string = text.split(' ')[0].toUpperCase().substring(1);
  //   return string;
  // };

  return (
    <View>
      <Text>{LabelText(label)}</Text>
    </View>
  );
};

export default Label;
