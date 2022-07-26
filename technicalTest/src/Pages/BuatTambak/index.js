import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {
  Dimensions,
  KeyboardAvoidingView,
  Modal,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {
  Button,
  CardSizeAndKota,
  Gap,
  Headers,
  Search,
  TextInput,
} from '../../Components';

const {width: ScreenWidth, height: ScreenHeight} = Dimensions.get('window');

const BuatTambak = props => {
  const navigation = useNavigation();
  const [isShow, setIsShow] = useState(false);
  const [region, setRegion] = useState([
    {id: 1, region: 'Aceh Simeulue'},
    {id: 2, region: 'Aceh, Simeulue, Tupah Selatan'},
    {id: 3, region: 'Aceh, Simeulue, Teupah Selatan, Labuhan Bajau'},
    {id: 4, region: 'Aceh, Simeulue, Teupah Selatan, Pulau Bengkalak'},
    {id: 5, region: 'Aceh, Simeulue, Teupah Selatan, Badegong'},
    {id: 6, region: 'Aceh, Simeulue, Teupah Selatan, Kebun Baru'},
    {id: 7, region: 'Aceh, Simeulue, Teupah Selatan, Ulul Mayang'},
    {id: 8, region: 'Aceh, Simeulue, Teupah Selatan, Pasir Tinggi'},
    {id: 9, region: 'Aceh Simeulue'},
    {id: 10, region: 'Aceh, Simeulue, Tupah Selatan'},
    {id: 11, region: 'Aceh, Simeulue, Teupah Selatan, Labuhan Bajau'},
    {id: 12, region: 'Aceh, Simeulue, Teupah Selatan, Pulau Bengkalak'},
    {id: 13, region: 'Aceh, Simeulue, Teupah Selatan, Badegong'},
    {id: 14, region: 'Ach, Simeulue, Teupah Selatan, Kebun Baru'},
    {id: 15, region: 'Aceh, Simeulue, Teupah Selatan, Ulul Mayang'},
    {id: 16, region: 'Aceh, Simeulue, Teupah Selatan, Pasir Tinggi'},
    {id: 17, region: 'Aceh Simeulue'},
    {id: 18, region: 'Aceh, Simeulue, Tupah Selatan'},
    {id: 19, region: 'Aceh, Simeulue, Teupah Selatan, Labuhan Bajau'},
    {id: 20, region: 'Aceh, Simeulue, Teupah Selatan, Pulau Bengkalak'},
    {id: 21, region: 'Aceh, Simeulue, Teupah Selatan, Badegong'},
    {id: 22, region: 'Aceh, Simeulue, Teupah Selatan, Kebun Baru'},
    {id: 23, region: 'Aceh, Simeulue, Teupah Selatan, Ulul Mayang'},
    {id: 24, region: 'Aceh, Simeulue, Teupah Selatan, Pasir Tinggi'},
    {id: 25, region: 'Aceh Simeulue'},
    {id: 26, region: 'Aceh, Simeulue, Tupah Selatan'},
    {id: 27, region: 'Aceh, Simeulue, Teupah Selatan, Labuhan Bajau'},
    {id: 28, region: 'Aceh, Simeulue, Teupah Selatan, Pulau Bengkalak'},
    {id: 29, region: 'Aceh, Simeulue, Teupah Selatan, Badegong'},
    {id: 30, region: 'Aceh, Simeulue, Teupah Selatan, Kebun Baru'},
    {id: 31, region: 'Aceh, Simeulue, Teupah Selatan, Ulul Mayang'},
    {id: 32, region: 'Aceh, Simeulue, Teupah Selatan, Pasir Tinggi'},
    {id: 33, region: 'Aceh Simeulue'},
    {id: 34, region: 'Aceh, Simeulue, Tupah Selatan'},
    {id: 35, region: 'Aceh, Simeulue, Teupah Selatan, Labuhan Bajau'},
    {id: 36, region: 'Aceh, Simeulue, Teupah Selatan, Pulau Bengkalak'},
    {id: 37, region: 'Aceh, Simeulue, Teupah Selatan, Badegong'},
    {id: 38, region: 'Ach, Simeulue, Teupah Selatan, Kebun Baru'},
    {id: 39, region: 'Aceh, Simeulue, Teupah Selatan, Ulul Mayang'},
    {id: 40, region: 'Aceh, Simeulue, Teupah Selatan, Pasir Tinggi'},
    {id: 41, region: 'Aceh Simeulue'},
    {id: 42, region: 'Aceh, Simeulue, Tupah Selatan'},
    {id: 43, region: 'Aceh, Simeulue, Teupah Selatan, Labuhan Bajau'},
    {id: 44, region: 'Aceh, Simeulue, Teupah Selatan, Pulau Bengkalak'},
    {id: 45, region: 'Aceh, Simeulue, Teupah Selatan, Badegong'},
    {id: 46, region: 'Aceh, Simeulue, Teupah Selatan, Kebun Baru'},
    {id: 47, region: 'Aceh, Simeulue, Teupah Selatan, Ulul Mayang'},
    {id: 48, region: 'Aceh, Simeulue, Teupah Selatan, Pasir Tinggi'},
  ]);

  useEffect(() => {
    setIsShow(!isShow);
  }, []);

  let hitung = region.length;

  return (
    <View style={styles.containerModal}>
      <Headers
        title="Buat Tambak"
        type="icon-only"
        icon="arrowBack"
        onPress={() => navigation.goBack()}
      />
      <Modal animationType="slide" transparent={true} visible={isShow}>
        <View style={styles.containerContent}>
          <View style={styles.titleContent}>
            <View style={styles.wrapTitle}>
              <Text style={styles.txt}>Kota/Kabupaten</Text>
              <Button
                titleButtonText="Tutup"
                type="text-button"
                onPress={() => {
                  setIsShow(!isShow);
                  navigation.navigate('JalaMedia');
                }}
              />
            </View>
            <Search placeholder="Cari" placeholderTextColor="black" onDelete />
            <Gap height={8} />
            <View style={styles.border}></View>
            <ScrollView>
              <View style={styles.wrapRegion}>
                {region.map(e => {
                  // console.log('isi e', id);
                  return (
                    <CardSizeAndKota
                      key={e.id}
                      type="region"
                      title={e.region}
                      height={hitung - 24}
                      onPress={() => {
                        props.navigation.navigate('JalaMedia', {
                          region: e,
                        });
                      }}
                    />
                  );
                })}
              </View>
            </ScrollView>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  containerModal: {flex: 1},
  containerContent: {flex: 1, backgroundColor: 'rgba(0, 68, 146, 0.8)'},
  titleContent: {
    flex: 1,
    width: ScreenWidth,
    // height: ScreenWidth * 1.75,
    height: '90%',
    position: 'absolute',
    bottom: 0,
    backgroundColor: 'white',
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
  },
  wrapTitle: {
    marginHorizontal: 16,
    marginTop: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  txt: {color: 'black'},
  border: {borderColor: 'lightgrey', borderWidth: 1},
  wrapRegion: {flex: 1},
});

export default BuatTambak;
