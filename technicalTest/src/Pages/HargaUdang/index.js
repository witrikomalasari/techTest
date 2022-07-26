import React, {useState} from 'react';
import {
  Alert,
  Linking,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {ProfileDummy} from '../../Assets';
import {
  Button,
  CardPriceAndPhone,
  CardSizeAndKota,
  Gap,
  Headers,
  ProfileSupplier,
} from '../../Components';
import call from 'react-native-phone-call';

const HargaUdang = ({navigation}) => {
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

  // const args = {
  //   number: '9093900003', // String value with the number to call
  //   prompt: false, // Optional boolean property. Determines if the user should be prompted prior to the call
  //   skipCanOpen: true, // Skip the canOpenURL check
  // };

  // call(args).catch(console.error);

  const callNumber = phone => {
    console.log('callNumber ----> ', phone);
    let phoneNumber = phone;
    if (Platform.OS !== 'android') {
      phoneNumber = `telprompt:${phone}`;
    } else {
      phoneNumber = `tel://${phone}`;
    }
    console.log(typeof phoneNumber);
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
    <View style={styles.page}>
      <Headers
        title="Harga Udang"
        type="icon-only"
        icon="arrowBack"
        onPress={() => navigation.goBack()}
      />

      <View style={{paddingVertical: 15, backgroundColor: 'white'}}>
        <Text style={styles.txt}>Nusa Tenggara Barat</Text>
        <Text style={styles.txt}>Sumba</Text>
      </View>
      <Gap height={4} />
      <View style={{flex: 1, backgroundColor: 'white', marginBottom: 24}}>
        <View style={{flexDirection: 'row'}}>
          <Text style={[styles.txt, {flex: 1}]}>16 Januari 2020</Text>
          <Button type="ButtonVerification" />
        </View>
        <Gap height={6} />
        <ProfileSupplier
          image={ProfileDummy}
          nameSupplier="Mina Udang Barokah"
        />
        <Gap height={6} />
        <CardPriceAndPhone
          size="Kontak"
          price="+6285853662XXX"
          typeButton="primary"
          titleButton="Hubungi"
          onPress={() => callNumber('+628979198132')}
        />
        <Text style={styles.txt}>DAFTAR HARGA</Text>
        <ScrollView>
          {listHarga.map(e => {
            return (
              <CardSizeAndKota
                type="listHarga"
                key={e.id}
                title={e.size}
                price={e.price}
                height={hitung}
              />
            );
          })}
          <Text style={styles.txt}>Catatan</Text>
          <Text style={styles.txt}>
            Lorem i psum dolor sit amet, consectetur adipiscing elit ut aliquam
          </Text>
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  page: {
    flex: 1,
    // backgroundColor: 'red',
  },
  txt: {
    color: 'black',
    // flex: 1,
  },
});

export default HargaUdang;
