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
  Gap,
  Headers,
  ProfileSupplier,
} from '../../Components';
import {getDetailHargaUdang} from '../../Redux/Actions/HomeAction';

const {height} = Dimensions.get('window');

const HargaUdang = props => {
  const dispatch = useDispatch();
  // console.log('route', JSON.stringify(route.params.data, null, 2));
  const {detailHarga} = useSelector(state => state.homeReducer);

  // console.log('resultDETAILHARGA', JSON.stringify(detailHarga, null, 2));

  const [listHarga, setListHarga] = useState([]);

  useEffect(() => {
    dispatch(getDetailHargaUdang());
    price(detailHarga);
  }, []);

  const {
    id,
    remark,
    region: {province_name, regency_name},
    creator: {name, phone, buyer},
    updated_at,
  } = props.route.params.data;

  // PERCOBAAN CARI LIST HARGA, DATA FROM API
  const price = detailHarga => {
    let harga = [];
    // let object;
    for (var keyObject in detailHarga) {
      if (detailHarga.hasOwnProperty(keyObject)) {
        let obj = keyObject + ' ' + detailHarga[keyObject];
        // console.log('ini coba jah', detailHarga(obj));
        let object = obj;
        // console.log('ini object', object);
        harga.push(object.includes('size_') && object);
        // harga.push(coba.filter(!Boolean));
      }
    }
    let hargaUdang = harga.filter(
      item =>
        typeof item !== 'boolean' && item.replace(item.includes('remark'), ''),
    );
    setListHarga(hargaUdang);
  };

  // console.log('ini list harga', listHarga);

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
          <ProfileSupplier image={ProfileDummy} nameSupplier={name} />
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
            <View style={{height: height * 0.98}}>
              {listHarga.map(item => {
                return (
                  <View
                    key={item.id}
                    style={{
                      flexDirection: 'row',
                      height: height / hitung,
                      // backgroundColor: 'lightblue',
                    }}>
                    <Text style={styles.txt}>
                      {item.substr(0, item.indexOf(' ')).replace('_', ' ')}
                    </Text>
                    <Gap width={15} />
                    <Text style={styles.txt}>
                      {`Rp. ${
                        item.slice(item.search(' ', 0)).substring(1) > 0
                          ? item.slice(item.search(' ', 0)).substring(1)
                          : 0
                      }`}
                    </Text>
                  </View>
                );
              })}
            </View>
            <Gap height={20} />
            <View style={{paddingBottom: 20}}>
              <Text style={styles.txt}>Catatan</Text>
              <Text style={[styles.txt, {textAlign: 'justify'}]}>
                {remark
                  ? remark
                  : 'Lorem i psum dolor sit amet, consectetur adipiscing elit ut aliquam'}
              </Text>
            </View>
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
