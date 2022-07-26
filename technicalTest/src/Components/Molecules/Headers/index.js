import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {Button} from '../../Atoms';
import {colors, fonts} from '../../../Utils';

const Headers = ({type, icon, onPress, title}) => {
  return (
    <View style={styles.container}>
      <Button type={type} icon={icon} onPress={onPress} />
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  title: {
    flex: 1,
    fontSize: 18,
    fontFamily: fonts.primary[700],
    marginLeft: 16,
  },
});

export default Headers;
