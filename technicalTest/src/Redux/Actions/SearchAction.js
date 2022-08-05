import Axios from 'axios';
import {API_HOST} from '../../Config';

export const regionAction = () => async dispatch => {
  let urlApi = `${API_HOST.url}/regions`;

  try {
    const res = await Axios.get(urlApi);
    // console.log('SET_REGIONbaru', JSON.stringify(res.data.data, null, 2));

    return dispatch({
      type: 'SET_REGIONS',
      value: res?.data?.data,
    });
  } catch (error) {
    console.log('fetch region error', error);
  }
};

export const searchFilterAction = region => async dispatch => {
  console.log('ini REGION ACTION', region);
  let urlApi = `${API_HOST.url}/regions?has=shrimp_prices&search=${region}`;

  try {
    const res = await Axios.get(urlApi);
    console.log('SEARCH', JSON.stringify(res.data.data, null, 2));

    if (region.length > 0) {
      return dispatch({
        type: 'SEARCH_FILTER',
        value: res?.data?.data,
      });
    }
  } catch (error) {
    console.log('search error', error);
  }
};
