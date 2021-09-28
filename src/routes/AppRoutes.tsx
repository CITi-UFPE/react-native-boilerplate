import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import {

} from '../pages';

const { Navigator, Screen } = createStackNavigator();

const AppRoutes: React.FC = () => (
  <Navigator headerMode="none">
    <Screen name="Home" component={ } />
  </Navigator>
);

export default AppRoutes;