import React from 'react';
import {TouchableOpacity} from 'react-native';
import {ArrowBack} from '../../../Assets';

export default function IconOnly({onPress, icon}) {
  const Icon = () => {
    if (icon === 'arrowBack') {
      return <ArrowBack />;
    }
  };

  return (
    <TouchableOpacity onPress={onPress}>
      <Icon />
    </TouchableOpacity>
  );
}
