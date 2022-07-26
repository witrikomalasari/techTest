import {useNavigation} from '@react-navigation/native';
import moment from 'moment';
import React, {useEffect, useState} from 'react';
import {
  Dimensions,
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {SceneMap, TabBar, TabView} from 'react-native-tab-view';
import {useDispatch, useSelector} from 'react-redux';
import {ImageNews, linkIcon, SizeIcon, Udang} from '../../../Assets';
import {API_HOST} from '../../../Config';
import {
  getDetailHargaUdang,
  getSupplierData,
} from '../../../Redux/Actions/HomeAction';
import {
  getKabarUdang,
  getWebViewKabarUdang,
} from '../../../Redux/Actions/KabarUdangAction';
import {
  getListPenyakit,
  getWebViewListPenyakit,
} from '../../../Redux/Actions/ListPenyakitAction';
import {colors, fonts} from '../../../Utils';
import {Button} from '../../Atoms';
import CardNewsAndPenyakit from '../CardNewsAndPenyakit';
import CardSupplier from '../CardSupplier';

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
  // const sizeUdang = props.route.params;
  // console.log('isi PROPS HARGA UDANG', sizeUdang);
  // console.log('ISINPROPSHARGAUDANG', props);
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const {dataSupplier} = useSelector(state => state.homeReducer);

  // console.log('dataSupplier', JSON.stringify(dataSupplier, null, 2));
  // console.log('ISI SIZEVALUE', sizeValue);
  const [page, setPage] = useState(1);
  const [datas, setDatas] = useState([
    // {
    //   // sesuaikan penamaannya dengan penamaan di API
    //   id: '',
    //   image: '',
    //   namaSupplier: '',
    //   date: '',
    //   privinsi: '',
    //   kota: '',
    //   size: '',
    //   price: '',
    // },
  ]);

  useEffect(() => {
    dispatch(getSupplierData(page));
    // coba(dataSupplier);
  }, [page]);

  const renderReview = ({item}) => {
    // console.log('ITEMSUPPLIER', JSON.stringify(item.creator.avatar, null, 2));

    return (
      <CardSupplier
        key={item.id}
        type="HargaUdang"
        image={{uri: `${API_HOST.storage}/${item.creator.avatar}`}}
        nameSupplier={item.creator.name}
        typeButtonVerification="ButtonVerification"
        date={moment(item.updated_at).format('DD MMMM YYYY')}
        provinsi={item.region.province_name}
        kota={
          item.region.regency_name
            ? item.region.regency_name
            : item.region.province_name
        }
        size={'Size '} // ROUTE PARAMS
        price={'IDR '} //
        onPress={async () => {
          try {
            dispatch(getDetailHargaUdang(item.id, item.creator.region_id));
            navigation.navigate('DetailHargaUdang', {
              data: item,
            });
          } catch (error) {
            console.log('error lihat detail harga', error);
          }
        }}
        typeButton="primary"
        titleButton="LIHAT DETAIL"
        disable={item.creator.buyer}
        isShow={true}
      />
    );
  };

  const handleOnEnd = () => {
    setPage(page + 1);
    setDatas([...dataSupplier, ...datas]);
  };

  // console.log('data ajah', datas);
  return (
    <>
      <View style={[styles.containerHargaUdang, {paddingTop: 14}]}>
        <Text style={styles.wrapData}>Harga Terbaru</Text>

        {dataSupplier.length > 0 && (
          <FlatList
            keyExtractor={(item, index) => index}
            data={[...dataSupplier, ...datas]}
            renderItem={renderReview}
            showsVerticalScrollIndicator={false}
            // pagingEnabled={true}
            onEndReached={handleOnEnd}
            onEndReachedThreshold={0.5}
            showDefaultLoadingIndicators={true}
            // activityIndicatorColor={'blue'}
            // HeaderLoadingIndicator=
            // FooterLoadingIndicator=
          />
        )}
      </View>

      <View
        style={{
          position: 'absolute',
          top: initialLayout.height * 0.76,
          // bottom: 8,
          marginHorizontal: 12,
          flexDirection: 'row',
        }}>
        <Button
          image={SizeIcon}
          title="Size"
          // subTitle={100}
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
    </>
  );
};

const KabarUdang = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const {kabarUdang} = useSelector(state => state.kabarUdangReducer);

  // console.log('KABAR UDANG+AVATAR', JSON.stringify(kabarUdang, null, 2));
  // const {image} = kabarUdang[0];
  // console.log('imageianin', image);

  const [page, setPage] = useState(1);

  useEffect(() => {
    dispatch(getKabarUdang(page));
  }, []);

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
        {kabarUdang.length > 0 && (
          <FlatList
            keyExtractor={(item, index) => index}
            data={kabarUdang}
            renderItem={item => {
              // console.log(
              //   'KABARUDANGDONGK',
              //   JSON.stringify(
              //     `${API_HOST.storage}/${item.item.image}`,
              //     null,
              //     2,
              //   ),
              // );
              return (
                <CardNewsAndPenyakit
                  image={
                    item.item.image
                      ? {
                          uri: `${API_HOST.storage}/${item.item.image}`,
                        }
                      : ImageNews
                  }
                  title={item.item.title}
                  subTitle={item.item.excerpt}
                  date={moment(item.item.updated_at).format('DD MMMM YYYY')}
                  symbol={linkIcon}
                  onPress={() => {
                    navigation.navigate('KabarUdang', {
                      KabarUdang: item.item.id,
                    });
                    dispatch(getWebViewKabarUdang(item.item.id));
                  }}
                />
              );
            }}
            showsVerticalScrollIndicator={false}
            pagingEnabled={true}
            // onEndReached={handleOnEnd}
            // onEndReachedThreshold={0.1}
          />
        )}
      </View>
    </ScrollView>
  );
};

const InfoPenyakit = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const {listPenyakit} = useSelector(state => state.ListPenyakitReducer);

  // console.log('listPenyakitBARU', JSON.stringify(listPenyakit, null, 2));

  const [page, setPage] = useState(1);

  useEffect(() => {
    dispatch(getListPenyakit(page));
  }, []);

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
        {listPenyakit.length > 0 && (
          <FlatList
            keyExtractor={(item, index) => index}
            data={listPenyakit}
            renderItem={item => {
              // console.log(
              //   'listPenyakitBARUAKA',
              //   JSON.stringify(item.item, null, 2),
              // );
              return (
                <CardNewsAndPenyakit
                  image={
                    item.item.image
                      ? {
                          uri: `${API_HOST.storage}/${item.item.image}`,
                        }
                      : Udang
                  }
                  title={item.item.full_name}
                  subTitle={item.item.meta_description}
                  date={moment(item.item.updated_at).format('DD MMMM YYYY')}
                  symbol={linkIcon}
                  onPress={async () => {
                    await dispatch(getWebViewListPenyakit(item.item.id));
                    navigation.navigate('InfoPenyakit', {
                      listInfoPenyakit: item.item.id,
                    });
                  }}
                />
              );
            }}
            showsVerticalScrollIndicator={false}
            pagingEnabled={true}
            // onEndReached={handleOnEnd}
            // onEndReachedThreshold={0.1}
          />
        )}
      </View>
    </ScrollView>
  );
};

const initialLayout = {
  width: Dimensions.get('window').width,
  height: Dimensions.get('window').height,
};

const HomeTopTab = props => {
  // console.log('ini props HOME TOP TAB', props);

  const {sizeValue} = props;
  console.log('sizeVALUE', sizeValue);

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
      sceneContainerStyle={styles.tabView}
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
    fontFamily: fonts.primary[700],
    fontSize: 14,
    color: focused ? colors.text.subTitle : colors.text.primary,
  }),

  containerHargaUdang: {
    marginHorizontal: 20,
  },
  wrapData: {
    color: colors.secondary,
    fontFamily: fonts.primary[700],
    fontSize: 18,
    textAlign: 'center',
    paddingBottom: 15,
  },
  btnText: {
    color: 'white',
    fontSize: 15,
    textAlign: 'center',
  },
  containerKabarUdang: {
    marginHorizontal: 16,
  },
  containerInfoPenyakit: {
    marginHorizontal: 16,
  },
});
