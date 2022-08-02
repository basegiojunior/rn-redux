import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export enum RoutesList {
  Home = 'Home',
  Products = 'Products',
}

export type MainParamList = {
  [RoutesList.Home]: undefined;
  [RoutesList.Products]: undefined;
};

export type MainNavigationProps = NativeStackNavigationProp<MainParamList>;
