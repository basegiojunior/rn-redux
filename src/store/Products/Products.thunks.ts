import { createAsyncThunk } from '@reduxjs/toolkit';
import { Product } from '../../models/product';
import { sleep } from '../../utils/time';
import { productsSlice } from './Products.slice';

export const asyncAddProduct = createAsyncThunk(
  'products/addProduct',
  async (product: Product, thunkAPI) => {
    await sleep(2000);
    thunkAPI.dispatch(productsSlice.actions.addProduct(product));
  },
);
