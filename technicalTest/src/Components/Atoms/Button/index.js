import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {colors, fonts} from '../../../Utils';
import IconOnly from './IconOnly';
import ButtonVerification from './VerificationButton';

const Button = ({type, title, onPress, icon, disable}) => {
  if (type === 'ButtonVerification') {
    // verifikasi
    return <ButtonVerification disable={disable} title={title} />;
  }

  if (type === 'icon-only') {
    // button panah back
    return <IconOnly icon={icon} onPress={onPress} />;
  }

  return (
    <TouchableOpacity style={styles.container(type)} onPress={onPress}>
      <Text style={styles.text(type)}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: type => ({
    backgroundColor:
      type === 'primary'
        ? colors.button.primary.background
        : colors.button.secondary.background,
    paddingVertical: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  }),
  text: type => ({
    fontSize: 18,
    textAlign: 'center',
    fontFamily: fonts.primary[600],
    color:
      type === 'primary'
        ? colors.button.primary.text
        : colors.button.secondary.text,
  }),
  disablebg: {
    paddingVertical: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    backgroundColor: colors.button.disable.background,
  },
  disableText: {
    fontSize: 18,
    textAlign: 'center',
    fontFamily: fonts.primary[600],
    color: colors.button.disable.text,
  },
});

export default Button;
