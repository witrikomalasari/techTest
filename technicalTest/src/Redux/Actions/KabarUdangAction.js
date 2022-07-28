import Axios from 'axios';
import {API_HOST, Auth} from '../../Config';

export const getKabarUdang = page => async dispatch => {
  let urlApi = `${API_HOST.url}/posts?per_page=15&page=${page}&with=creator`;
  let headers = {
    Authorization: `Bearer ${Auth.Authorization}`,
  };

  try {
    const res = await Axios.get(urlApi, {headers});
    // console.log('resultKABARUDANG', JSON.stringify(res, null, 2));

    return dispatch({
      type: 'SET_KABARUDANG',
      value: res?.data?.data,
    });
  } catch (e) {
    console.log('error data page kbar udang');
  }
};

export const getLinkKabarUdang = id => async dispatch => {
  let urlApi = `https:app.jala.tech/posts/${id}`;

  try {
    const res = await Axios.get(urlApi);
    // console.log('result', JSON.stringify(res, null, 2));
    return dispatch({
      type: 'SET_LINKKABARUDANG',
      value: res?.data?.data,
    });
  } catch (e) {
    console.log('error link kabar udang');
  }
};

export const getWebViewKabarUdang = id => async dispatch => {
  let urlApi = `https:app.jala.tech/web_view/posts/${id}`;

  try {
    const res = await Axios.get(urlApi);
    // console.log('resultWEBVIEWDONK', JSON.stringify(res.data, null, 2));

    return dispatch({
      type: 'SET_WEBVIEWKABARUDANG',
      value: res?.data?.data,
    });
  } catch (e) {
    console.log('error web view');
  }
};
