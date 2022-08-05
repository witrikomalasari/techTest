import React from 'react';
import {
  Dimensions,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {colors} from '../../../Utils';

const {height: ScreenHeight} = Dimensions.get('window');

const CardSizeAndKota = ({onPress, type, title, height, price, ...props}) => {
  // const handleToAttachHome = region => {
  //   props.navigation.navigate('JalaMedia', {
  //     region: region,
  //   });
  // };

  const renderText = ({item}) => {
    // console.log('item ini', item.province_name);
    //data bentuk {}
    if (type === 'size' || type === 'region') {
      return (
        <TouchableOpacity
          activeOpacity={0.7}
          style={styles.container(height)}
          // onPress={() => handleToAttachHome(item.id)}
        >
          <Text style={[styles.txt, {color: 'black'}]}>{item.full_name}</Text>
        </TouchableOpacity>
      );
    }
    // if (type === 'listHarga') {
    //   return (
    //     <TouchableOpacity style={{flexDirection: 'row'}}>
    //       <Text style={styles.txt}>{item.title}</Text>
    //       <Gap width={15} />
    //       <Text style={styles.txt}>{item.price}</Text>
    //     </TouchableOpacity>
    //   );
    // }
  };

  return (
    <View style={{flex: 1}}>
      {props.data.length > 0 ? (
        <FlatList
          {...props}
          data={props.data}
          renderItem={renderText}
          keyExtractor={(item, index) => index}
        />
      ) : (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Text style={styles.txt}>Opps...region not found!</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: height => ({
    paddingHorizontal: 16,
    justifyContent: 'center',
    height: ScreenHeight / height,
  }),
  txt: {color: 'black', fontSize: 14},
});

export default CardSizeAndKota;
