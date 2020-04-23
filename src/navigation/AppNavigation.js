import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { TabScreen } from './TabNavigation.js';

export const AppNavigation = () => {  
  return (
    <NavigationContainer>
      <TabScreen />
    </NavigationContainer>
  );
};