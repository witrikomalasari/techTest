import Axios from 'axios';
import {API_HOST} from '../../Config';

export const getSupplierData = page => async dispatch => {
  console.log('page', page);
  let urlApi = `${API_HOST.url}/shrimp_prices?per_page=15&page=${page}&with=region,creator&region_id=`;

  try {
    const res = await Axios.get(urlApi);
    // console.log('result', JSON.stringify(res?.data.data, null, 2));
    return dispatch({
      type: 'SET_SUPPLIER',
      value: res?.data?.data,
    });
  } catch (e) {
    console.log('error data supplier');
  }
};

export const getDetailHargaUdang = (id, regionId) => async dispatch => {
  let urlApi = `${API_HOST.url}/shrimp_prices/${id}?with=region,creator&region_id=${regionId}`;
  // console.log('id', id);

  try {
    const res = await Axios.get(urlApi);
    // console.log(
    //   'resultDETAILHARGAbaruajah',
    //   JSON.stringify(res.data.data, null, 2),
    // );

    return dispatch({
      type: 'SET_DETAILHARGA',
      value: res?.data?.data,
    });
  } catch (error) {
    console.log('error data detail harga udang');
  }
};

export const getLinkHargaUdang = id => async dispatch => {
  let urlApi = `https://app.jala.tech/shrimp_prices/${id}`;
  // console.log('id', id); try {
  const res = await Axios.get(urlApi);
  // console.log('result', JSON.stringify(res?.data.data, null, 2));

  try {
    return dispatch({
      type: 'SET_LINKHARGAUDANG',
      value: res?.data?.data,
    });
  } catch (error) {
    console.log('error link harga udang');
  }
};
