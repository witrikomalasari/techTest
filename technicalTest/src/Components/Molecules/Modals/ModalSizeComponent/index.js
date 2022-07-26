import React from 'react';
import {Modal, Text, View} from 'react-native';

const ModalSizeComponent = () => {
  return (
    <View>
      <Text>ModalSizeComponent</Text>
      <Modal animationType="slide" transparent={true} visible={isShow}>
        <View
          style={{
            flex: 1,
            backgroundColor: 'rgba(0, 68, 146, 0.8)',
          }}>
          <View
            style={{
              flex: 1,
              width: ScreenWidth,
              height: ScreenHeight * 0.9,
              position: 'absolute',
              bottom: 0,
              backgroundColor: 'white',
              borderTopLeftRadius: 16,
              borderTopRightRadius: 16,
            }}>
            <View
              style={{
                margin: 16,
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <Text style={{color: 'black'}}>Size</Text>
              <Button
                titleButtonText="Tutup"
                type="text-button"
                onPress={() => {
                  setIsShow(!isShow);
                  navigation.navigate('JalaMedia');
                }}
              />
            </View>
            <View style={{borderColor: 'lightgrey', borderWidth: 1}}></View>
            <ScrollView showsVerticalScrollIndicator={false} style={{flex: 1}}>
              {looping.map((e, id) => {
                // console.log('isi e', id);
                return (
                  <TouchableOpacity
                    key={id}
                    activeOpacity={0.7}
                    style={{
                      paddingHorizontal: 16,
                      justifyContent: 'center',
                      height: ScreenHeight / hitung,
                    }}
                    onPress={() => {
                      props.navigation.navigate('JalaMedia', {
                        data: e,
                      });
                    }}>
                    <Text style={{color: 'black', fontSize: 14}}>{e}</Text>
                  </TouchableOpacity>
                );
              })}
            </ScrollView>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default ModalSizeComponent;
