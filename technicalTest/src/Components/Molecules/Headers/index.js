import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {colors, fonts} from '../../../Utils';
import {Button} from '../../Atoms';

const Headers = ({type, icon, onPress, title, linkIcon, onPressIcon}) => {
  return (
    <View style={styles.container}>
      <Button type={type} icon={icon} onPress={onPress} />
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <Text style={styles.title}>{title}</Text>
        {linkIcon === 'white' && (
          <Button onPress={onPressIcon} icon="linkWhite" />
        )}
      </View>
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
