import React from 'react';
import { Platform } from 'react-native';
import { HeaderButton } from 'react-navigation-header-buttons';
import { AntDesign } from '@expo/vector-icons';

import { THEME } from '../theme.js';

export const HeaderIcon = props => (
  <HeaderButton
    {...props}
    IconComponent={AntDesign}
    iconSize={30}
    color={Platform.OS === 'android' ? '#fff' : THEME.MAIN_COLOR}
  />
);