import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {colors, fonts} from '../../../Utils';
import FloatingButton from './FloatingButton';
import IconOnly from './IconOnly';
import ButtonVerification from './VerificationButton';

const Button = ({
  type,
  title,
  onPress,
  icon,
  disable,
  titleButtonText,
  image,
  subTitle,
  typeStyle,
  sizeBorderRadiusLeft,
  sizeBorderRadiusRight,
}) => {
  if (type === 'ButtonVerification') {
    // verifikasi
    return <ButtonVerification disable={disable} title={title} />;
  }

  if (type === 'icon-only') {
    // button panah back
    return <IconOnly icon={icon} onPress={onPress} />;
  }

  if (type === 'FloatingButton') {
    // button size dan indonesia
    return (
      <FloatingButton
        typeStyle={typeStyle}
        image={image}
        title={title}
        subTitle={subTitle}
        onPress={onPress}
      />
    );
  }

  if (type === 'text-button') {
    // button text
    return (
      <TouchableOpacity activeOpacity={0.7} onPress={onPress}>
        <Text style={{color: 'blue'}}>{titleButtonText}</Text>
      </TouchableOpacity>
    );
  }

  // if (disable) {
  //   return (
  //     <View style={styles.disablebg}>
  //       <Text style={styles.text(type)}>{title}</Text>
  //     </View>
  //   );
  // }

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
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
  }),
  text: type => ({
    fontSize: 14,
    textAlign: 'center',
    paddingVertical: 6,
    paddingHorizontal: 16,
    fontFamily: fonts.primary[700],
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
