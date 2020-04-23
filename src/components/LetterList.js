import React from 'react';
import { View, StyleSheet, FlatList, ImageBackground } from 'react-native';

import { Letter } from './Letter.js';

export const LetterList = ({ data, onOpen }) => {
  return (
    <View style={styles.wrapper}>
      <ImageBackground
        source={require('../../assets/mainsceen_bg.png')}
        resizeMode='cover'
        style={{width: '100%'}}
      >
        <FlatList
          data={data}
          keyExtractor={letter => letter.id.toString()}
          renderItem={({ item }) => <Letter letter={item} onOpen={onOpen}/>}
          horizontal={false}
          numColumns={3}
        />
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: '#fff'
  }
});