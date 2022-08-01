import {combineReducers} from 'redux';
import {homeReducer} from './HomeReducer';
import {kabarUdangReducer} from './KabarUdangReducer';
import {ListPenyakitReducer} from './listPenyakitReducer';
import {regionReducer} from './SearchReducer';

const reducer = combineReducers({
  homeReducer,
  kabarUdangReducer,
  ListPenyakitReducer,
  regionReducer,
});

export default reducer;
