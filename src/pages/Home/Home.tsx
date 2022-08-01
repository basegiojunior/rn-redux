import React from 'react';
import { Button, Text, View } from 'react-native';
import styles from './Home.style';
import { useAppDispatch, useAppSelector } from '../../hooks/reduxHooks';
import {
  addProduct,
  modifyProduct,
  removeProduct,
} from '../../store/Products/Products.slice';
import { Product } from '../../models/product';
import { asyncAddProduct } from '../../store/Products/Products.thunks';

export const Home: React.FC = () => {
  const products = useAppSelector(state => state.products);
  const dispatch = useAppDispatch();

  function generateNewProduct(): Product {
    const randomNumberAsString = Math.random().toString();

    return {
      id: randomNumberAsString,
      name: `Product ${randomNumberAsString}`,
      price: Math.round(Math.random() * 100),
    };
  }

  function onPressAddProduct() {
    dispatch(addProduct(generateNewProduct()));
  }

  function onPressAsyncAddProduct() {
    dispatch(asyncAddProduct(generateNewProduct()));
  }

  function onPressModifyFirstProductPrice() {
    dispatch(
      modifyProduct({
        id: products[0].id,
        name: products[0].name,
        price: Math.round(Math.random() * 100),
      }),
    );
  }

  function onPressRemoveFirstProduct() {
    dispatch(removeProduct(products[0].id));
  }

  return (
    <View style={styles.container}>
      {products.map(product => (
        <Text key={product.id}>
          {product.name}, {product.price}
        </Text>
      ))}

      <Button title="Add product" onPress={onPressAddProduct} />
      <Button title="Async add product" onPress={onPressAsyncAddProduct} />
      <Button
        title="Remove first product"
        onPress={onPressRemoveFirstProduct}
      />
      <Button
        title="Modify first product price"
        onPress={onPressModifyFirstProductPrice}
      />
    </View>
  );
};
