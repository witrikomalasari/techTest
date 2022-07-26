import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Dimensions, ScrollView, StyleSheet, Text, View} from 'react-native';
import {SceneMap, TabBar, TabView} from 'react-native-tab-view';
import {
  ImageNews,
  linkIcon,
  ProfileDummy1,
  ProfileDummy2,
  ProfileDummy3,
  SizeIcon,
  Udang,
} from '../../../Assets';
import {colors, fonts} from '../../../Utils';
import {Button, Gap} from '../../Atoms';
import CardNewsAndPenyakit from '../CardNewsAndPenyakit';
import CardSupplier from '../CardSupplier';
// import {useDispatch, useSelector} from 'react-redux';
// import {getFoodDataByTypes} from '../../../redux/action';
// import ItemListFood from '../ItemListFood';

const renderTabBar = props => (
  <TabBar
    {...props}
    indicatorStyle={styles.indicator}
    style={styles.tabBarStyle}
    tabStyle={styles.tabStyle}
    renderLabel={({route, focused}) => (
      <Text style={styles.tabText(focused)}>{route.title}</Text>
    )}
  />
);

const HargaUdang = () => {
  const navigation = useNavigation();

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={[styles.containerHargaUdang, {paddingTop: 14}]}>
        <Text
          style={{
            color: colors.secondary,
            fontFamily: fonts.primary[700],
            fontSize: 18,
            textAlign: 'center',
          }}>
          Harga Terbaru
        </Text>
        <CardSupplier
          // key={item.id}
          type="HargaUdang"
          image={ProfileDummy3}
          nameSupplier="Mina Udang Barokah"
          typeButtonVerification="ButtonVerification"
          date="16 january 2020"
          provinsi="Nusa Tenggara Barat"
          kota="Sumba"
          size="Size 200"
          price="IDR 160.000"
          onPress={() => navigation.navigate('HargaUdang')}
          typeButton="primary"
          titleButton="LIHAT DETAIL"
        />
        <CardSupplier
          // key={item.id}
          type="HargaUdang"
          image={ProfileDummy1}
          nameSupplier="Mina Udang Barokah"
          typeButtonVerification="ButtonVerification"
          date="16 january 2020"
          provinsi="Nusa Tenggara Barat"
          kota="Sumba"
          size="Size 200"
          price="IDR 160.000"
          onPress={() => navigation.navigate('HargaUdang')}
          typeButton="primary"
          titleButton="LIHAT DETAIL"
          disable
        />
        <CardSupplier
          // key={item.id}
          type="HargaUdang"
          image={ProfileDummy2}
          nameSupplier="Mina Udang Barokah"
          typeButtonVerification="ButtonVerification"
          date="16 january 2020"
          provinsi="Nusa Tenggara Barat"
          kota="Sumba"
          size="Size 200"
          price="IDR 160.000"
          onPress={() => navigation.navigate('HargaUdang')}
          typeButton="primary"
          titleButton="LIHAT DETAIL"
          disable
        />
        <CardSupplier
          // key={item.id}
          type="HargaUdang"
          image={ProfileDummy3}
          nameSupplier="Mina Udang Barokah"
          typeButtonVerification="ButtonVerification"
          date="16 january 2020"
          provinsi="Nusa Tenggara Barat"
          kota="Sumba"
          size="Size 200"
          price="IDR 160.000"
          onPress={() => navigation.navigate('HargaUdang')}
          typeButton="primary"
          titleButton="LIHAT DETAIL"
        />
      </View>
      <View
        style={{
          position: 'absolute',
          bottom: 8,
          marginHorizontal: 12,
          flexDirection: 'row',
        }}>
        <Button
          image={SizeIcon}
          title="Size"
          subTitle="100"
          type="FloatingButton"
          typeStyle="size"
          onPress={() => navigation.navigate('TambahPencatatan')}
        />
        <Button
          image={SizeIcon}
          title="Indonesia"
          type="FloatingButton"
          onPress={() => navigation.navigate('BuatTambak')}
        />
      </View>
    </ScrollView>
  );
};

const KabarUdang = () => {
  const navigation = useNavigation();

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.containerKabarUdang}>
        <Text
          style={{
            color: colors.secondary,
            fontFamily: fonts.primary[700],
            fontSize: 18,
            paddingVertical: 15,
          }}>
          Kabar Terbaru
        </Text>
        <CardNewsAndPenyakit
          image={ImageNews}
          title="Baruno: Alat Kualitas Air Pintar Handal dan Praktis"
          subTitle="Tahun 2019 telah berlalu, kini tahun 2020 telah memasuki minggu ketiga, memasuki tahun..."
          date="30 April 2020"
          symbol={linkIcon}
          onPress={() => navigation.navigate('KabarUdang')}
        />
        <CardNewsAndPenyakit
          image={ImageNews}
          title="Baruno: Alat Kualitas Air Pintar Handal dan Praktis"
          subTitle="Tahun 2019 telah berlalu, kini tahun 2020 telah memasuki minggu ketiga, memasuki tahun..."
          date="30 April 2020"
          symbol={linkIcon}
        />
        <CardNewsAndPenyakit
          image={ImageNews}
          title="Baruno: Alat Kualitas Air Pintar Handal dan Praktis"
          subTitle="Tahun 2019 telah berlalu, kini tahun 2020 telah memasuki minggu ketiga, memasuki tahun..."
          date="30 April 2020"
          symbol={linkIcon}
        />
      </View>
    </ScrollView>
  );
};

const InfoPenyakit = () => {
  const navigation = useNavigation();

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.containerInfoPenyakit}>
        <Text
          style={{
            color: colors.secondary,
            fontFamily: fonts.primary[700],
            fontSize: 18,
            paddingVertical: 15,
          }}>
          Daftar Penyakit
        </Text>
        <CardNewsAndPenyakit
          image={Udang}
          title="Black Spot Disease (Bintik Hitam)"
          subTitle="Tampak fisik pada udang ialah karapas berwarna kecoklatan dan adanya bercak hitam pada karapa..."
          date="30 April 2020"
          symbol={linkIcon}
          onPress={() => navigation.navigate('InfoPenyakit')}
        />
        <CardNewsAndPenyakit
          image={Udang}
          title="Black Spot Disease (Bintik Hitam)"
          subTitle="Tampak fisik pada udang ialah karapas berwarna kecoklatan dan adanya bercak hitam pada karapa..."
          date="30 April 2020"
          symbol={linkIcon}
        />
        <CardNewsAndPenyakit
          image={Udang}
          title="Black Spot Disease (Bintik Hitam)"
          subTitle="Tampak fisik pada udang ialah karapas berwarna kecoklatan dan adanya bercak hitam pada karapa..."
          date="30 April 2020"
          symbol={linkIcon}
        />
      </View>
    </ScrollView>
  );
};

const initialLayout = {width: Dimensions.get('window').width};

const HomeTopTab = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: '1', title: 'Harga Udang'},
    {key: '2', title: 'Kabar Udang'},
    {key: '3', title: 'Penyakit'},
  ]);

  const renderScene = SceneMap({
    1: HargaUdang,
    2: KabarUdang,
    3: InfoPenyakit,
  });

  return (
    <TabView
      renderTabBar={renderTabBar}
      navigationState={{index, routes}}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={initialLayout}
      style={styles.tabView}
    />
  );
};

export default HomeTopTab;

const styles = StyleSheet.create({
  tabView: {backgroundColor: colors.white},
  indicator: {
    backgroundColor: colors.primary,
    height: 4,
  },
  tabBarStyle: {
    backgroundColor: colors.white,
    elevation: 0,
    shadowOpacity: 0,
    borderBottomColor: colors.primary,
    borderBottomWidth: 1,
  },
  tabText: focused => ({
    fontFamily: fonts.primary['700'],
    fontSize: 14,
    color: focused ? colors.text.subTitle : colors.text.primary,
  }),

  containerHargaUdang: {
    marginHorizontal: 20,
  },
  containerKabarUdang: {
    marginHorizontal: 16,
  },
  containerInfoPenyakit: {
    marginHorizontal: 16,
  },
});
