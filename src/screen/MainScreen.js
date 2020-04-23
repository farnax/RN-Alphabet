import React, { useEffect } from 'react';
import { View, StyleSheet, ActivityIndicator } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import { LetterList } from '../components/LetterList.js';
import { loadLetters } from '../store/actions/letter.js';
import { THEME } from '../theme.js';

export const MainScreen = ({ navigation }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadLetters())
  }, [dispatch]);

  const allLetters = useSelector(state => state.letter.allLetters);
  const loading = useSelector(state => state.letter.loading);

  const openLetterHendler = letter => {
    navigation.navigate('Letter', {
      letterId: letter.id,
      title: letter.text,
      booked: letter.booked
    })
  };
  
  if(loading) {
    return (
      <View style={styles.wrapper}>
        <ActivityIndicator color={THEME.MAIN_COLOR} />
      </View>
    )
  }
  return <LetterList data={allLetters} onOpen={openLetterHendler}/>
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff'
  }
});



