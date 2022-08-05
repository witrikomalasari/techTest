import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {
  BuatTambak,
  DetailHargaUdang,
  JalaMedia,
  TambahPencatatan,
} from '../../Pages';
import KabarUdang from '../../Pages/KabarUdang';
import InfoPenyakit from '../../Pages/Penyakit';

const Stack = createStackNavigator();

const Router = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="JalaMedia"
        component={JalaMedia}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="DetailHargaUdang"
        component={DetailHargaUdang}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="BuatTambak"
        component={BuatTambak}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="TambahPencatatan"
        component={TambahPencatatan}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="KabarUdang"
        component={KabarUdang}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="InfoPenyakit"
        component={InfoPenyakit}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default Router;
