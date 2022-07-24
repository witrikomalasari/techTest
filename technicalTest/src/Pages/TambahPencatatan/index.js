import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {
  Dimensions,
  Modal,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {Headers} from '../../Components';

// const {width, height} = Dimensions.get('window');
const {width: ScreenWidth, height: ScreenHeight} = Dimensions.get('window');

const TambahPencatatan = props => {
  const navigation = useNavigation();
  const [isShow, setIsShow] = useState(false);
  const [looping, setLooping] = useState([
    20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150, 160, 170, 180,
    190, 200,
  ]);
  const [bar, setBar] = useState([]);

  useEffect(() => {
    setIsShow(!isShow);
  }, []);

  let hitung = looping.length;

  return (
    <View style={{flex: 1}}>
      <Headers
        title="Tambah Pencarian"
        type="icon-only"
        icon="arrowBack"
        onPress={() => navigation.goBack()}
      />
      <Modal animationType="slide" transparent={true} visible={isShow}>
        <View
          style={{
            flex: 1,
            backgroundColor: 'rgba(0, 68, 146, 0.8)',
          }}>
          <View
            style={{
              flex: 1,
              width: ScreenWidth,
              height: ScreenHeight * 0.9,
              position: 'absolute',
              bottom: 0,
              backgroundColor: 'white',
              borderTopLeftRadius: 16,
              borderTopRightRadius: 16,
              // padding: 15,
              // margin: 20,
              // marginTop: 15,
              // shadowColor: '#000',
              // shadowOffset: {
              //   width: 0,
              //   height: 2,
              // },
              // shadowOpacity: 0.25,
              // shadowRadius: 4,
              // elevation: 5,
            }}>
            <View
              style={{
                margin: 16,
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <Text style={{color: 'black'}}>Size</Text>
              <TouchableOpacity
                onPress={() => {
                  setIsShow(!isShow);
                  navigation.navigate('JalaMedia');
                }}>
                <Text style={{color: 'blue'}}>Tutup</Text>
              </TouchableOpacity>
            </View>
            <View style={{borderColor: 'lightgrey', borderWidth: 1}}></View>
            <ScrollView style={{flex: 1}}>
              {looping.map((e, id) => {
                // console.log('isi e', id);
                return (
                  <TouchableOpacity
                    key={id}
                    activeOpacity={0.7}
                    style={{
                      paddingHorizontal: 16,
                      justifyContent: 'center',
                      height: ScreenHeight / hitung,
                    }}
                    onPress={() => {
                      props.navigation.navigate('JalaMedia', {
                        data: e,
                      });
                    }}>
                    <Text style={{color: 'black', fontSize: 14}}>{e}</Text>
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

export default TambahPencatatan;
