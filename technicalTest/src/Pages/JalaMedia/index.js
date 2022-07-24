import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Headers, HomeTopTab} from '../../Components';
// import {colors} from '../../Utils';

const JalaMedia = props => {
  const navigation = useNavigation();
  const coba = props.route.params;
  console.log('coba', coba);

  return (
    <View style={styles.page}>
      <Headers
        title="Jala Media"
        type="icon-only"
        icon="arrowBack"
        onPress={() => navigation.goBack()}
      />
      <HomeTopTab />

      <View
        style={{
          backgroundColor: 'green',
          position: 'absolute',
          bottom: 20,
          flexDirection: 'row',
        }}>
        <TouchableOpacity
          activeOpacity={(0, 7)}
          onPress={() => navigation.navigate('TambahPencatatan')}>
          <View style={{width: 200, height: 60}}>
            <Text>Size</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={(0, 7)}
          onPress={() => navigation.navigate('BuatTambak')}>
          <View style={{width: 200, height: 60}}>
            <Text>Indonesia</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  page: {flex: 1},
});

export default JalaMedia;
