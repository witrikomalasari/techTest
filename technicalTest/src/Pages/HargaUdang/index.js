import moment from 'moment';
import React, {useEffect, useState} from 'react';
import {
  Alert,
  Dimensions,
  Linking,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {ProfileDummy} from '../../Assets';
import {
  Button,
  CardPriceAndPhone,
  CardSizeAndKota,
  Gap,
  Headers,
  ProfileSupplier,
} from '../../Components';
import {getDetailHargaUdang} from '../../Redux/Actions/HomeAction';

const {width, height} = Dimensions.get('window');

const HargaUdang = props => {
  const dispatch = useDispatch();
  // console.log('route', JSON.stringify(route.params.data, null, 2));
  const {detailHarga} = useSelector(state => state.homeReducer);

  // console.log('resultDETAILHARGA', JSON.stringify(detailHarga, null, 2));

  useEffect(() => {
    dispatch(getDetailHargaUdang());
  }, []);

  const {
    id,
    remark,
    region: {province_name, regency_name},
    creator: {name, phone, buyer},
    updated_at,
  } = props.route.params.data;

  // PERCOBAAN CARI LIST HARGA, DATA FROM API
  // const [listHarga, setListHarga] = useState([]);
  // const price = () => {
  //   let harga = [];
  //   for (var keyObject in detailHarga) {
  //     if (detailHarga.hasOwnProperty(keyObject)) {
  //       let obj = keyObject + ' ' + detailHarga[keyObject];
  //       harga.push(obj);
  //       // console.log(key + " " + hargas[key]);
  //     }
  //   }
  //   // let hargaUdang = [];
  //   for (let i = 0; i < harga.length; i++) {
  //     if (harga[i].includes('size')) {
  //       // hargaUdang.push(harga[i]);
  //       setListHarga(harga[i]);
  //     }
  //   }
  // };

  // console.log('ini list harga', listHarga);

  // USESTATE HARDCODE KRN BELUM BERHASIL
  const [listHarga, setListHarga] = useState([
    {id: 1, size: 'Size 20', price: 'Rp. 97.000'},
    {id: 2, size: 'Size 21', price: 'Rp. 97.000'},
    {id: 3, size: 'Size 22', price: 'Rp. 97.000'},
    {id: 4, size: 'Size 23', price: 'Rp. 97.000'},
    {id: 5, size: 'Size 24', price: 'Rp. 97.000'},
    {id: 6, size: 'Size 25', price: 'Rp. 97.000'},
    {id: 7, size: 'Size 26', price: 'Rp. 97.000'},
    {id: 8, size: 'Size 27', price: 'Rp. 97.000'},
    {id: 9, size: 'Size 28', price: 'Rp. 97.000'},
    {id: 10, size: 'Size 29', price: 'Rp. 97.000'},
    {id: 11, size: 'Size 30', price: 'Rp. 97.000'},
    {id: 12, size: 'Size 31', price: 'Rp. 97.000'},
    {id: 13, size: 'Size 32', price: 'Rp. 97.000'},
    {id: 14, size: 'Size 33', price: 'Rp. 97.000'},
    {id: 15, size: 'Size 34', price: 'Rp. 97.000'},
    {id: 16, size: 'Size 35', price: 'Rp. 97.000'},
    {id: 17, size: 'Size 36', price: 'Rp. 97.000'},
    {id: 18, size: 'Size 37', price: 'Rp. 97.000'},
    {id: 19, size: 'Size 38', price: 'Rp. 97.000'},
    {id: 20, size: 'Size 39', price: 'Rp. 97.000'},
    {id: 21, size: 'Size 40', price: 'Rp. 97.000'},
    {id: 22, size: 'Size 41', price: 'Rp. 97.000'},
    {id: 23, size: 'Size 42', price: 'Rp. 97.000'},
    {id: 24, size: 'Size 43', price: 'Rp. 97.000'},
  ]);

  let hitung = listHarga.length;

  const call = phone => {
    // console.log('callNumber ----> ', phone);
    let phoneNumber = phone;
    if (Platform.OS !== 'android') {
      phoneNumber = `telprompt:${phone}`;
    } else {
      phoneNumber = `tel://${phone}`;
    }
    // console.log(typeof phoneNumber);
    Linking.canOpenURL(phoneNumber)
      .then(supported => {
        if (!supported) {
          Alert.alert('Phone number is not available');
        } else {
          return Linking.openURL(phoneNumber);
        }
      })
      .catch(err => console.log(err));
  };

  return (
    <>
      <Headers
        title="Harga Udang"
        type="icon-only"
        icon="arrowBack"
        linkIcon="white"
        onPress={() => props.navigation.goBack()}
        // onPressIcon
      />
      <View style={{flex: 1}}>
        <View
          style={{
            paddingVertical: 15,
            backgroundColor: 'white',
            paddingHorizontal: 16,
          }}>
          <Text style={styles.txt}>{province_name}</Text>
          <Text style={styles.txt}>{regency_name}</Text>
        </View>
        <Gap height={4} />
        <View
          style={{
            flex: 1,
            backgroundColor: 'white',
            marginBottom: 24,
            paddingHorizontal: 16,
          }}>
          <View style={{flexDirection: 'row'}}>
            <Text style={[styles.txt, {flex: 1}]}>
              {moment(updated_at).format('DD MMMM YYYY')}
            </Text>
            <Button type="ButtonVerification" disable={buyer} />
          </View>
          <Gap height={6} />
          <ProfileSupplier image={ProfileDummy} nameSupplier={name} disable />
          <Gap height={6} />
          <CardPriceAndPhone
            size="Kontak"
            price={phone}
            typeButton="primary"
            titleButton="Hubungi"
            onPress={() => call(phone)}
          />
          <Gap height={10} />
          <Text style={styles.txt}>DAFTAR HARGA</Text>
          <Gap height={10} />
          <ScrollView>
            <View style={{height: height * 0.7}}>
              {listHarga.map(item => {
                return (
                  <View style={{flexDirection: 'row'}}>
                    <Text style={styles.txt}>{item.size}</Text>
                    <Gap width={15} />
                    <Text style={styles.txt}>{item.price}</Text>
                  </View>
                );
              })}
            </View>
            <Gap height={10} />
            <Text style={styles.txt}>Catatan</Text>
            <Text style={styles.txt}>
              {remark
                ? remark
                : 'Lorem i psum dolor sit amet, consectetur adipiscing elit ut aliquam'}
            </Text>
          </ScrollView>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  txt: {
    color: 'black',
    // flex: 1,
  },
});

export default HargaUdang;
