import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { listenerMiddleware } from '../listenerMiddleware';
import { Product } from '../../models/product';

interface ProductsState {
  products: Array<Product>;
}

const initialState: ProductsState = {
  products: [],
};

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    addProduct: (state, action: PayloadAction<Product>) => {
      state.products.push(action.payload);
    },
    removeProduct: (state, action: PayloadAction<string>) => {
      state.products = state.products.filter(
        product => product.id !== action.payload,
      );
    },
    modifyProduct: (state, action: PayloadAction<Product>) => {
      const productIndex = state.products.findIndex(
        product => product.id === action.payload.id,
      );

      state.products[productIndex] = action.payload;
    },
  },
});

listenerMiddleware.startListening({
  actionCreator: productsSlice.actions.modifyProduct,
  effect: async (action, listenerApi) => {
    console.log("i'm listening to modifyProduct: ", action.payload.name);
    listenerApi.cancelActiveListeners();
  },
});

export const { addProduct, removeProduct, modifyProduct } =
  productsSlice.actions;

export default productsSlice.reducer;
