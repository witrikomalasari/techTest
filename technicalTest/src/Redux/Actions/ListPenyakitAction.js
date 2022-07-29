import Axios from 'axios';
import {API_HOST, Auth} from '../../Config/Api';

export const getListPenyakit = page => async dispatch => {
  //   console.log('page', page);
  let urlApi = `${API_HOST.url}/diseases?per_page=15&page=${page}`;
  let headers = {
    Authorization: `Bearer ${Auth.Authorization}`,
    // 'Content-Type': 'application/json',
    // 'Access-Control-Allow-Origin': '*',
  };

  try {
    const res = await Axios.get(urlApi, {headers});
    // console.log('resultLISTPENYAKIT', JSON.stringify(res.data.data, null, 2));

    return dispatch({
      type: 'SET_LISTPENYAKIT',
      value: res?.data?.data,
    });
  } catch (e) {
    console.log('error data list penyakit');
  }
};

export const getLinkListPenyakit = id => async dispatch => {
  //   console.log('page', page);
  let urlApi = `https://app.jala.tech/diseases/${id}`;

  try {
    const res = await Axios.get(urlApi);
    // console.log('result', JSON.stringify(res, null, 2));
    return dispatch({
      type: 'SET_LINKLISTPENYAKIT',
      value: res?.data?.data,
    });
  } catch (e) {
    console.log('error LINK PENYAKIT');
  }
};

export const getWebViewListPenyakit = id => async dispatch => {
  // console.log('idlistpenyakit', id);
  let urlApi = `https://app.jala.tech/web_view/diseases/${id}`;

  try {
    const res = await Axios.get(urlApi);
    // console.log('resultWEBVIEW', JSON.stringify(res, null, 2));

    return dispatch({
      type: 'SET_WEBVIEWLISTPENYAKIT',
      value: res?.data?.data,
    });
  } catch (e) {
    console.log('error WEBVIEW LIST PENYAKIT');
  }
};
