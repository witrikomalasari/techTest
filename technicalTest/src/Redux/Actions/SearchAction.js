// import Axios from 'axios';
// import {API_HOST} from '../../Config';

// export const searchFilterAction = region => async dispatch => {
//   let urlApi = `${API_HOST.url}/regions?has=shrimp_prices&search=${region}`;

//   try {
//     const res = await Axios.get(urlApi);
//     // console.log('SEARCH', JSON.stringify(res, null, 2));
//     if (region.length > 0) {
//       return dispatch({
//         type: 'SEARCH_FILTER',
//         value: res?.data?.data,
//       });
//     }
//   } catch (error) {
//     console.log('search error', error);
//   }
// };
