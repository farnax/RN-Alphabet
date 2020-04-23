import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useSelector } from "react-redux";

import { THEME } from "../theme.js";

export const Letter = ({ letter, onOpen }) => {

  return (
    <TouchableOpacity activeOpacity={0.5} onPress={() => onOpen(letter)}>
      <View style={styles.letter}>
        <Text style={[styles.text, { color: letter.color }]}>{letter.text}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  letter: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: THEME.FILL_COLOR,
    width: 100,
    height: 100,
    borderWidth: 3,
    borderColor: THEME.MAIN_COLOR,
    borderRadius: 30,
    margin: 5,
    marginLeft: '9%',
  },
  text: {
    fontFamily: "source-bold",
    fontSize: 60,
  },
});
