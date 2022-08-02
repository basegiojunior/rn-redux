import React from 'react';
import { View } from 'react-native';
import styles from './Home.style';
import { useAppDispatch, useAppSelector } from '../../hooks/reduxHooks';
import {
  addProduct,
  modifyProduct,
  removeProduct,
} from '../../store/Products/Products.slice';
import { Product } from '../../models/product';
import { asyncAddProduct } from '../../store/Products/Products.thunks';
import { Button, Text } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { MainNavigationProps, RoutesList } from '../../routes/Routes.types';

export const Home: React.FC = () => {
  const products = useAppSelector(state => state.products);
  const dispatch = useAppDispatch();
  const { navigate } = useNavigation<MainNavigationProps>();

  function generateNewProduct(): Product {
    const randomNumberAsString = Math.random().toString();

    return {
      id: randomNumberAsString,
      name: `Produto ${Math.round(Math.random() * 100)}`,
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

  function onPressGoToProducts() {
    navigate(RoutesList.Products);
  }

  return (
    <View style={styles.container}>
      {products.map(product => (
        <View key={product.id} style={styles.productContainer}>
          <Text>Nome: {product.name}</Text>
          <Text>R$ {product.price}</Text>
        </View>
      ))}

      <Button
        style={styles.buttonContainer}
        mode="contained"
        onPress={onPressAddProduct}>
        Adicionar produto
      </Button>
      <Button
        style={styles.buttonContainer}
        mode="contained"
        onPress={onPressAsyncAddProduct}>
        Adicionar Produto Assincrono
      </Button>
      <Button
        style={styles.buttonContainer}
        mode="contained"
        onPress={onPressRemoveFirstProduct}>
        Remover primeiro
      </Button>
      <Button
        style={styles.buttonContainer}
        mode="contained"
        onPress={onPressModifyFirstProductPrice}>
        Modificar preço do primeiro produto
      </Button>

      <Button
        style={styles.buttonContainer}
        mode="contained"
        onPress={onPressGoToProducts}>
        Ir para página de produtos
      </Button>
    </View>
  );
};
