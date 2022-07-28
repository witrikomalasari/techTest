import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import {SizeIcon} from '../../Assets';
import {Button, Headers, HomeTopTab} from '../../Components';
// import {colors} from '../../Utils';

const JalaMedia = props => {
  const navigation = useNavigation();

  // const coba = props.route.params;
  // console.log('coba', coba);

  return (
    <View style={styles.page}>
      <Headers
        title="Jala Media"
        type="icon-only"
        icon="arrowBack"
        onPress={() => navigation.goBack()}
      />
      <HomeTopTab />
    </View>
  );
};

const styles = StyleSheet.create({
  page: {flex: 1},
});

export default JalaMedia;
