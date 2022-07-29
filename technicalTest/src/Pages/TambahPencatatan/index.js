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
import {Button, CardSizeAndKota, Headers} from '../../Components';

const {width: ScreenWidth, height: ScreenHeight} = Dimensions.get('window');

const TambahPencatatan = props => {
  const navigation = useNavigation();
  const [isShow, setIsShow] = useState(false);
  const [looping, setLooping] = useState([
    20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150, 160, 170, 180,
    190, 200,
  ]);
  useEffect(() => {
    setIsShow(!isShow);
    // sizeUdang(200);
  }, []);

  // const sizeUdang = nums => {
  //   let temp = [];
  //   for (let i = 10; i < nums; i + 10) {
  //     temp.push(nums[i]);
  //   }
  //   // console.log('temp', temp);
  //   setLooping([...temp]);
  // };

  let hitung = looping.length;
  // console.log('looping', looping);
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
              {looping.map((e, id) => {
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
