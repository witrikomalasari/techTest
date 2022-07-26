import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {VerificationIcon} from '../../../Assets';
import {colors, fonts} from '../../../Utils';

export default function ButtonVerification({disable}) {
  const Icon = () => {
    if (disable) {
      return (
        <View>
          <Text style={styles.title(disable)}>Belum terverifikasi</Text>
        </View>
      );
    }

    if (!disable) {
      return (
        <View style={{flexDirection: 'row'}}>
          <VerificationIcon />
          <Text style={styles.title(disable)}>Terverifikasi</Text>
        </View>
      );
    }
  };

  return (
    <View style={styles.container(disable)}>
      <Icon />
    </View>
  );
}

const styles = StyleSheet.create({
  container: disable => ({
    // flex: 1,
    height: 20,
    width: disable ? 110 : 90,
    alignItems: 'center',
    paddingTop: 1,
    marginRight: 16,
    backgroundColor: disable
      ? colors.button.disable.background
      : colors.button.third.background,
    borderRadius: 27,
  }),
  title: disable => ({
    textAlign: 'center',
    fontSize: 12,
    paddingTop: 2,
    paddingRight: 5,
    paddingLeft: 5,
    fontFamily: fonts.primary[400],
    color: colors.button.disable.text,
  }),
});
