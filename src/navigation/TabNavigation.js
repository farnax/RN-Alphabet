import React from 'react';
import { Platform } from 'react-native';
import { createBottomTabNavigator  } from '@react-navigation/bottom-tabs';
import { FontAwesome, AntDesign } from '@expo/vector-icons';

import { LetterStackScreen, BookedStackScreen } from './StackNavigation.js';
import { THEME } from '../theme.js';

const Tab = createBottomTabNavigator();
const screenOptions = ({ route }) => ({
  tabBarIcon: ({ color }) => {
    return route.name === "Letter" ? (
      <FontAwesome name="font" size={25} color={color} />
    ) : (
      <AntDesign name="star" size={25} color={color} />
    );
  },
});

export const TabScreen = () => {
  return(
    <Tab.Navigator
      screenOptions={screenOptions}
      tabBarOptions={{
        activeTintColor: Platform.OS === 'android' ? '#fff' : THEME.MAIN_COLOR,
        style: {backgroundColor: Platform.OS === 'android' ? 'THEME.MAIN_COLOR' : '#fff'}
      }}
    >
      <Tab.Screen
        name='Letter'
        component={LetterStackScreen}
        options={{tabBarLabel: 'Все'}}
      />
      <Tab.Screen
        name='Booked'
        component={BookedStackScreen}
        options={{tabBarLabel: 'Избранное'}}
      />
    </Tab.Navigator>
  );
};