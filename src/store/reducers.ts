import { combineReducers } from 'redux';
import productsReducer from './features/products/productsSlice';

export const rootReducer = combineReducers({
  products: productsReducer,
});
