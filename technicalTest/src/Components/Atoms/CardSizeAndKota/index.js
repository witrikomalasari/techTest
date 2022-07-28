import React from 'react';
import {
  Dimensions,
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {colors} from '../../../Utils';
import Gap from '../Gap';

const {height: ScreenHeight} = Dimensions.get('window');

const CardSizeAndKota = ({
  onPress,
  type,
  title,
  height,
  price,
  nestedScrollEnabled,
  ...props
}) => {
  // const handleToAttachHome = region => {
  //   props.navigation.navigate('JalaMedia', {
  //     region: region,
  //   });
  // };

  const renderText = ({item}) => {
    if (type === 'size' || type === 'region') {
      return (
        <TouchableOpacity
          activeOpacity={0.7}
          style={styles.container(height)}
          // onPress={() => handleToAttachHome(item.id)}
        >
          <Text style={styles.txt}>{title}</Text>
        </TouchableOpacity>
      );
    }
    if (type === 'listHarga') {
      return (
        <TouchableOpacity style={{flexDirection: 'row'}}>
          <Text style={styles.txt}>{title}</Text>
          <Gap width={15} />
          <Text style={styles.txt}>{price}</Text>
        </TouchableOpacity>
      );
    }
  };

  return (
    <View style={{flex: 1}}>
      {props.data.length > 0 ? (
        <FlatList
          {...props}
          data={props.data}
          renderItem={renderText}
          keyExtractor={(item, index) => index}
          nestedScrollEnabled={nestedScrollEnabled}
        />
      ) : (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Text style={{color: colors.white, fontSize: 16}}>
            Opps...Movie not found!
          </Text>
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
    // backgroundColor: 'pink',
  }),
  txt: {color: 'black', fontSize: 14},
});

export default CardSizeAndKota;
