import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Headers, HomeTopTab} from '../../Components';
// import {colors} from '../../Utils';

const JalaMedia = ({route = false}) => {
  const navigation = useNavigation();
  // console.log('iniROUTEJALAMEDIA', route.params);
  return (
    <View style={styles.page}>
      <Headers
        title="Jala Media"
        type="icon-only"
        icon="arrowBack"
        onPress={() => navigation.goBack()}
      />
      <HomeTopTab sizeValue={route.params ? route.params.sizeUdang : null} />
    </View>
  );
};

const styles = StyleSheet.create({
  page: {flex: 1},
});

export default JalaMedia;
