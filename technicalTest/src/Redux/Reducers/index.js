import {combineReducers} from 'redux';
import {homeReducer} from './HomeReducer';
import {kabarUdangReducer} from './KabarUdangReducer';
import {ListPenyakitReducer} from './listPenyakitReducer';
import {searchReducer} from './SearchReducer';

const reducer = combineReducers({
  homeReducer,
  kabarUdangReducer,
  ListPenyakitReducer,
  searchReducer,
});

export default reducer;
