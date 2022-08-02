import React from 'react';
import { View } from 'react-native';
import styles from './Products.style';
import { useAppSelector } from '../../hooks/reduxHooks';
import { Text } from 'react-native-paper';

export const Products: React.FC = () => {
  const products = useAppSelector(state => state.products);

  return (
    <View style={styles.container}>
      {products.map(product => (
        <View key={product.id} style={styles.productContainer}>
          <Text>Nome: {product.name}</Text>
          <Text>R$ {product.price}</Text>
        </View>
      ))}
    </View>
  );
};
