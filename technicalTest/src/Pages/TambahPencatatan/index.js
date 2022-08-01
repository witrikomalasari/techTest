import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {
  Dimensions,
  Modal,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {Button, Headers} from '../../Components';

const {width: ScreenWidth, height: ScreenHeight} = Dimensions.get('window');

const TambahPencatatan = props => {
  const navigation = useNavigation();
  const [isShow, setIsShow] = useState(false);
  const [sizeUdang, setSizeUdang] = useState([]);

  useEffect(() => {
    setIsShow(!isShow);
    size(200);
  }, []);

  const size = nums => {
    let temp = [];
    for (let i = 20; i <= nums; i += 10) {
      temp.push(i);
      // console.log('temp', i);
    }
    console.log('temp', temp);
    setSizeUdang(temp);
  };

  let hitung = sizeUdang.length;

  // console.log('loopingSizeUdang', sizeUdang);

  return (
    <View style={styles.containerModal}>
      <Headers
        title="Tambah Pencarian"
        type="icon-only"
        icon="arrowBack"
        onPress={() => navigation.goBack()}
      />
      <Modal animationType="slide" transparent={true} visible={isShow}>
        <View style={styles.containerContent}>
          <View style={styles.titleContent}>
            <View style={styles.wrapTitle}>
              <Text style={styles.txt}>Size</Text>
              <Button
                titleButtonText="Tutup"
                type="text-button"
                onPress={() => {
                  setIsShow(!isShow);
                  navigation.navigate('JalaMedia');
                }}
              />
            </View>
            <View style={styles.border}></View>
            <ScrollView style={styles.wrapSize}>
              {sizeUdang.map((e, id) => {
                // console.log('isi e', id);
                return (
                  <TouchableOpacity
                    // onPress={() => handleToFilterBySize(item.id)}
                    activeOpacity={0.7}
                    style={{
                      paddingHorizontal: 16,
                      justifyContent: 'center',
                      height: ScreenHeight / hitung,
                    }}>
                    <Text style={styles.txt}>{e}</Text>
                  </TouchableOpacity>
                );
              })}
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
    height: ScreenHeight * 0.9,
    position: 'absolute',
    bottom: 0,
    backgroundColor: 'white',
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
  },
  wrapTitle: {
    margin: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  txt: {color: 'black'},
  border: {borderColor: 'lightgrey', borderWidth: 1},
  wrapSize: {flex: 1},
});

export default TambahPencatatan;
