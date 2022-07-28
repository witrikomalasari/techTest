import React from 'react';
import {TouchableOpacity} from 'react-native';
import {ArrowBack, LinkIcon, LinkWhite} from '../../../Assets';

export default function IconOnly({onPress, icon}) {
  const Icon = () => {
    if (icon === 'arrowBack') {
      return <ArrowBack />;
    }
    if (icon === 'linkBlack') {
      return <LinkIcon />;
    }
    if (icon === 'linkWhite') {
      return <LinkWhite />;
    }
  };

  return (
    <TouchableOpacity onPress={onPress}>
      <Icon />
    </TouchableOpacity>
  );
}
