import React from 'react';
import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import {Udang, VerificationIcon} from '../../Assets';
import {CardCategory, Headers} from '../../Components';

const InfoPenyakit = ({navigation}) => {
  return (
    <>
      <Headers
        title="Kabar Udang"
        type="icon-only"
        icon="arrowBack"
        onPress={() => navigation.goBack()}
      />
      <View style={{backgroundColor: 'red'}}>
        <Text style={{color: 'black'}}>penyakit Paling Dicari</Text>
        <View style={{flexDirection: 'row'}}>
          <CardCategory title="Bintik Hitam" type="active" />
          <CardCategory title="Bintik Hitam" />
          <CardCategory title="Bintik Hitam" type="active" />
          <CardCategory title="Bintik Hitam" type="active" />
          <CardCategory title="Bintik Hitam" type="active" />
        </View>
        <ScrollView style={{marginHorizontal: 16}}>
          <View
            style={{
              flex: 1,
              backgroundColor: 'white',
              marginBottom: 15,
              borderRadius: 4,
              shadowColor: '#000',
              shadowOffset: {
                width: 0,
                height: 2,
              },
              shadowOpacity: 0.25,
              elevation: 5,
            }}>
            <Text style={styles.txt}>Black Spot Disease (Bintik Hitam)</Text>
            <View style={{flexDirection: 'row'}}>
              <Text style={styles.txt}>30 April 2020</Text>
              <Text style={styles.txt}>|</Text>
              <Text style={styles.txt}>JAlA</Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <View>
                <Text style={styles.txt}>210</Text>
                <Text style={styles.txt}>Share</Text>
              </View>
              <VerificationIcon />
              <VerificationIcon />
              <VerificationIcon />
              <VerificationIcon />
            </View>
          </View>
          <View
            style={{
              flex: 1,
              backgroundColor: 'white',
              marginBottom: 15,
              borderRadius: 4,
              shadowColor: '#000',
              shadowOffset: {
                width: 0,
                height: 2,
              },
              shadowOpacity: 0.25,
              elevation: 5,
            }}>
            <Text style={styles.txt}>Indikasi Penyakir</Text>
            <Text style={styles.txt}>
              Nama: Black Spot Disease atau bintik hitam pada udang
            </Text>
            <Text style={styles.txt}>
              Tanda-tanda klinis: tampak fisik pada udang ialah karapas berwarna
              kecoklatan dan adanya bercak hitam pada karapas udang.
            </Text>
            <Text style={styles.txt}>
              Metode diagnosa: adanya bercak-bercak hitam ditubuh udang,
              biasanya terjadi pasca panen.
            </Text>
            <Image source={Udang} />
          </View>
        </ScrollView>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  txt: {
    color: 'black',
  },
});

export default InfoPenyakit;
