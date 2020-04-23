import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Platform } from 'react-native';

import { MainScreen } from '../screen/MainScreen.js';
import { LetterScreen } from '../screen/LetterScreen.js';
import { BookedScreen } from '../screen/BookedScreen.js';
import { THEME } from '../theme.js';

const LetterStack = createStackNavigator();
const BookedStack = createStackNavigator();

const screenOptions = {
  headerStyle: {
    backgroundColor: Platform.OS === "android" ? THEME.MAIN_COLOR : "#fff",
    borderBottomWidth: 1,
    borderBottomColor: "#FFDD33",
  },
  headerTintColor: Platform.OS === "android" ? "#fff" : THEME.MAIN_COLOR,
  headerTitleStyle: {
    fontSize: 24,
  },
};

export const LetterStackScreen = () => {
  return (
    <LetterStack.Navigator screenOptions={screenOptions}>
      <LetterStack.Screen
        name="Main"
        component={MainScreen}
        options={{ title: "Азбука" }}
      />
      <LetterStack.Screen
        name="Letter"
        component={LetterScreen}
        options={({ route }) => ({ title: `Буква ${route.params.title}` })}
      />
    </LetterStack.Navigator>
  );
};

export const BookedStackScreen = () => {
  return (
    <BookedStack.Navigator screenOptions={screenOptions}>
      <BookedStack.Screen
        name="Booked"
        component={BookedScreen}
        options={{ title: "Избранные буквы" }}
      />
      <BookedStack.Screen
        name="Letter"
        component={LetterScreen}
        options={({ route }) => ({ title: `Буква ${route.params.title}` })}
      />
    </BookedStack.Navigator>
  );
};