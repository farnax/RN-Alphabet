import React from 'react';
import { useSelector } from 'react-redux';

import { LetterList } from '../components/LetterList.js';

export const BookedScreen = ({ navigation }) => {
  const openLetterHendler = letter => {
    navigation.navigate('Letter', {
      letterId: letter.id,
      title: letter.text,
      booked: letter.booked
    })
  };
  
  const bookedLetters = useSelector(state => state.letter.bookedLetters);

  return (
    <LetterList data={bookedLetters} onOpen={openLetterHendler} />
  );
};

