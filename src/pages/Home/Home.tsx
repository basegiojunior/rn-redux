import React from 'react';
import { Button, Text, View } from 'react-native';
import styles from './Home.style';
import { useAppDispatch, useAppSelector } from '../../hooks/reduxHooks';
import {
  addProduct,
  modifyProduct,
  removeProduct,
} from '../../store/features/products/productsSlice';

export const Home: React.FC = () => {
  const { products } = useAppSelector(state => state.products);
  const dispatch = useAppDispatch();

  function onPressAddProduct() {
    const randomNumberAsString = Math.random().toString();
    dispatch(
      addProduct({
        id: randomNumberAsString,
        name: `Product ${randomNumberAsString}`,
        price: Math.round(Math.random() * 100),
      }),
    );
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
