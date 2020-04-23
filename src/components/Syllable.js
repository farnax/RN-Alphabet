import React, { useState } from 'react';
import { Text, StyleSheet, TouchableHighlight } from 'react-native';

import { THEME } from '../theme.js';

export const Syllable = ({ syllable, onPress }) => {
  const [scale, setScale] = useState(1);

  return(

    <TouchableHighlight 
      style={[styles.container, {transform: [{scale: scale}]}]}
      underlayColor={THEME.DANGER_COLOR}
      onPress={onPress}
      onPressIn={() => setScale(1.4)}
      onPressOut={() => setScale(1)}
      delayPressOut={1500}
      >
      <Text style={styles.text}>{syllable}</Text>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 70,
    height: 70,
    borderWidth: 1,
    borderColor: THEME.MAIN_COLOR,
    backgroundColor: THEME.FILL_COLOR,
    borderRadius: 35,
    margin: 15,
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    fontFamily: 'source-regular',
    fontSize: 30,
    color: THEME.MAIN_COLOR
  }
})