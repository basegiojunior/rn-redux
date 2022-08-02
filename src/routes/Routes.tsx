import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RoutesList } from './Routes.types';
import Home from '../pages/Home';
import Products from '../pages/Products';

const Stack = createNativeStackNavigator();

const MainRoutes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name={RoutesList.Home}
          component={Home}
          options={{ title: 'Início' }}
        />
        <Stack.Screen
          name={RoutesList.Products}
          component={Products}
          options={{ title: 'Produtos' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainRoutes;
