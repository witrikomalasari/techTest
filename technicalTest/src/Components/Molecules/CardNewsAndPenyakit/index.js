import React from 'react';
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {LinkIcon} from '../../../Assets';
import {colors, fonts} from '../../../Utils';
import {Gap} from '../../Atoms';

const CardNewsAndPenyakit = ({image, title, subTitle, date, onPress}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity activeOpacity={0.7} onPress={onPress}>
        <View style={styles.content}>
          <Image
            source={image}
            style={{
              width: '100%',
              height: 160,
              borderTopLeftRadius: 8,
              borderTopRightRadius: 8,
              overflow: 'hidden',
              resizeMode: 'cover',
            }}
          />
        </View>
        <Gap height={10} />
        <View style={styles.wrap}>
          <Text style={styles.title}>{title}</Text>
          <Gap height={4} />
          <Text style={[styles.txt, {textAlign: 'justify'}]}>{subTitle}</Text>
          <Gap height={10} />
          <View style={{flexDirection: 'row'}}>
            <Text style={{flex: 1, color: 'black'}}>{date}</Text>
            <LinkIcon />
          </View>
        </View>
        <Gap height={10} />
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: colors.border.primary,
    marginBottom: 12,
  },
  content: {
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  wrap: {
    paddingHorizontal: 8,
    // backgroundColor: 'blue',
  },
  title: {
    color: colors.text.third,
    fontFamily: fonts.primary[900],
    fontSize: 18,
    // maxWidth: 300,
  },
  txt: {
    color: colors.text.primary,
    fontFamily: fonts.primary[400],
    fontSize: 14,
  },
});
export default CardNewsAndPenyakit;
