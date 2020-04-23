import React, { useEffect, useLayoutEffect, useCallback, useState } from 'react';
import { View, Text, StyleSheet, TouchableHighlight } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { useDispatch, useSelector } from 'react-redux';

import { Syllable } from '../components/Syllable.js';
import { HeaderIcon } from '../components/HeaderIcon.js';
import { LetterImage } from '../components/LetterImage.js';
import { toggleBooked } from '../store/actions/letter.js';
import { getSoundUrl } from '../store/actions/media.js';
import { cleanSoundUrlsState } from '../store/actions/media.js';
import { playSound } from '../sound.js';
import { THEME } from '../theme.js';

export const LetterScreen = ({ navigation, route }) => {
  const letterId = route.params.letterId;    
  const letter = useSelector(state => 
    state.letter.allLetters.find(letter => letter.id === letterId)
  );
  const booked = useSelector(state => 
    state.letter.bookedLetters.some(letter => letter.id === letterId)
  );  
  
  const dispatch = useDispatch();
  
  const toggleHandler = useCallback(() => {
    dispatch(toggleBooked(letterId))
  }, [dispatch, letterId]);  
 

  const getSoundUrlHandler = useCallback((id) => {
    dispatch(getSoundUrl(id))
  }, [dispatch]);

  const soundUrls = useSelector(state => state.media.soundUrl);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    if(isPlaying) {
      playSound(soundUrls[0])  
    }
    setIsPlaying(false)
  }, [soundUrls]);

  useEffect(() => {
    return function clean() {
      dispatch(cleanSoundUrlsState())
    }
  }, [dispatch]);

  const playSoundHandler = () => {
    if(isPlaying && soundUrls[0] === soundUrls[1]) {
      playSound(soundUrls[0])
    }
  }

  useLayoutEffect(() => {

    const iconName = booked ? 'star' : 'staro';

    navigation.setOptions({
      headerRight: () => (
        <HeaderButtons HeaderButtonComponent={HeaderIcon}>
          <Item
            title='book'
            iconName={iconName}
            onPress={toggleHandler}
          />
        </HeaderButtons>
      )
    })
  }, [booked, toggleHandler]);
  
  return (
    <View style={styles.container}>
      <TouchableHighlight
        style={styles.title}
        underlayColor={THEME.DANGER_COLOR}
        onPress={() => {
          getSoundUrlHandler(letter.id)
          setIsPlaying(true)
          playSoundHandler()
          }}
        delayPressOut={1500}
      >
        <Text style={[{color: letter.color}, styles.text]}>{letter.text}</Text>
      </TouchableHighlight>
      <View style={styles.items}>
        {letter.syllable.map((l, index) => (
          <Syllable 
            syllable={l}
            key={l} 
            onPress={() => {
              getSoundUrlHandler(letter.id + '0' + index)
              setIsPlaying(true)
              playSoundHandler()
            }}
          />)
        )}
      </View>
      <LetterImage id={letter.id} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff'
  },
  title: {
    width: 150,
    height: 150,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 3,
    backgroundColor: THEME.FILL_COLOR,
    borderColor: THEME.MAIN_COLOR,
    borderRadius: 120,
    padding: 5,
    marginBottom: 70
  },
  text: {
    fontFamily: 'source-bold',
    fontSize: 90
  },
  items: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    paddingBottom: 40
  }
});



