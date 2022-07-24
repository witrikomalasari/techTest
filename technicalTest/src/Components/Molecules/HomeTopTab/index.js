import {useNavigation} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {Dimensions, ScrollView, StyleSheet, Text, View} from 'react-native';
import {SceneMap, TabBar, TabView} from 'react-native-tab-view';
import {
  ProfileDummy,
  ProfileDummy1,
  ProfileDummy2,
  ProfileDummy3,
} from '../../../Assets';
import {colors, fonts} from '../../../Utils';
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
    <ScrollView>
      <View
        style={[
          styles.containerHargaUdang,
          {paddingTop: 14, paddingBottom: 8},
        ]}>
        <Text
          style={{
            color: colors.secondary,
            fontFamily: fonts.primary['700'],
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
          titleButton="Lihat Detail"
        />
        <CardSupplier
          // key={item.id}
          type="HargaUdang"
          image={ProfileDummy}
          nameSupplier="Mina Udang Barokah"
          typeButtonVerification="ButtonVerification"
          date="16 january 2020"
          provinsi="Nusa Tenggara Barat"
          kota="Sumba"
          size="Size 200"
          price="IDR 160.000"
          onPress={() => navigation.navigate('HargaUdang')}
          typeButton="primary"
          titleButton="Lihat Detail"
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
          titleButton="Lihat Detail"
        />
      </View>
    </ScrollView>
  );
};

const KabarUdang = () => {
  return (
    <View style={styles.containerPopular}>
      <CardNewsAndPenyakit
      // key={item.id}
      // type="product"
      // name={item.name}
      // price={item.price}
      // rating={item.rate}
      // image={{uri: item.picturePath}}
      // onPress={() => navigation.navigate('FoodDetail', item)}
      />
    </View>
  );
};

const InfoPenyakit = () => {
  return (
    <View style={styles.containerRecommended}>
      <CardNewsAndPenyakit
      // key={item.id}
      // type="product"
      // name={item.name}
      // price={item.price}
      // rating={item.rate}
      // image={{uri: item.picturePath}}
      // onPress={() => navigation.navigate('FoodDetail', item)}
      />
    </View>
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
  // containerPopular: {paddingTop: 8, paddingHorizontal: 24},
  // containerRecommended: {paddingTop: 8, paddingHorizontal: 24},
});
