import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {BuatTambak, HargaUdang, JalaMedia, TambahPencatatan} from '../../Pages';

const Stack = createStackNavigator();

const Router = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="JalaMedia"
        component={JalaMedia}
        options={{headerShown: false}}
      />
      <Stack.Screen name="HargaUdang" component={HargaUdang} />
      <Stack.Screen name="BuatTambak" component={BuatTambak} />
      <Stack.Screen name="TambahPencatatan" component={TambahPencatatan} />
    </Stack.Navigator>
  );
};

export default Router;
