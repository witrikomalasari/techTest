import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {
  Dimensions,
  Modal,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {Button, CardSizeAndKota, Gap, Headers, Search} from '../../Components';
import {
  regionAction,
  searchFilterAction,
} from '../../Redux/Actions/SearchAction';

const {width: ScreenWidth} = Dimensions.get('window');

const BuatTambak = props => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [searchTextInput, setSearchTextInput] = useState('');
  const [isShow, setIsShow] = useState(false);
  const regions = [
    {id: 1, data: useSelector(state => state.regionReducer.regions)},
    // {id: 2, data: useSelector(state => state.regionReducer.searchRegion)},
  ];

  useEffect(() => {
    setIsShow(!isShow);
    dispatch(regionAction());
    // dispatch(searchFilterAction());
  }, []);

  // console.log('resultREGION', JSON.stringify(regions, null, 2));

  const searchByTextInput = region => {
    // console.log('searchByTextInput', region);
    let filteredRegions = region.filter(regi =>
      regi.full_name.includes(searchTextInput),
    );
    return filteredRegions;
  };

  const handleFilterRegion = region => {
    // console.log('handleFilterRegion', JSON.stringify(region, null, 2));

    let filteredRegions;
    if (searchTextInput.length > 0) {
      filteredRegions = searchByTextInput(region);
    }
    if (searchTextInput === 0) {
      filteredRegions = searchByTextInput(region);
    }
    if (!searchTextInput) {
      filteredRegions = searchByTextInput(region);
    }
    // console.log('search ini', filteredRegions);
    return filteredRegions;
  };

  // console.log('region', filteredRegions);

  const renderMapPerSection = regions.map((region, id) => {
    // data bentuk [{}]
    console.log('resultREGION woii', JSON.stringify(region.data, null, 2));

    return (
      <CardSizeAndKota
        // {...props}
        key={id}
        type="region"
        data={
          searchTextInput.length > 0
            ? handleFilterRegion(region.data)
            : region.data
        }
        height={14}
        // navigation={props.navigation}
      />
    );
  });

  return (
    <View style={styles.containerModal}>
      <Headers
        title="Buat Tambak"
        type="icon-only"
        icon="arrowBack"
        onPress={() => navigation.goBack()}
      />
      <Modal animationType="slide" transparent={true} visible={isShow}>
        <View style={styles.containerContent}>
          <View style={styles.titleContent}>
            <View style={styles.wrapTitle}>
              <Text style={styles.txt}>Kota/Kabupaten</Text>
              <Button
                titleButtonText="Tutup"
                type="text-button"
                onPress={() => {
                  setIsShow(!isShow);
                  navigation.navigate('JalaMedia');
                }}
              />
            </View>
            <Search
              placeholder="Cari"
              placeholderTextColor="black"
              value={searchTextInput}
              onChangeText={text => {
                // console.log('search', text);
                setSearchTextInput(text);
              }}
              onDelete={() => setSearchTextInput('')}
            />
            <Gap height={8} />
            <View style={styles.border}></View>
            <ScrollView
              // nestedScrollEnabled={true}
              showsVerticalScrollIndicator={false}
              // contentContainerStyle={{width: '100%'}}
            >
              <View style={styles.wrapRegion}>{renderMapPerSection}</View>
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
    // height: ScreenWidth * 1.75,
    height: '90%',
    position: 'absolute',
    bottom: 0,
    backgroundColor: 'white',
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
  },
  wrapTitle: {
    marginHorizontal: 16,
    marginTop: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  txt: {color: 'black'},
  border: {borderColor: 'lightgrey', borderWidth: 1},
  wrapRegion: {flex: 1},
});

export default BuatTambak;
