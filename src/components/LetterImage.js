import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Image, ActivityIndicator } from 'react-native';

import Firebase from '../firebase/firebase.js';
import { THEME } from '../theme.js';

export const LetterImage = ({id}) => {
  const [imageUrl, setImageUrl] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadImg = async id => {
      setLoading(true);
      setImageUrl('');
      const url = await Firebase.getImageUrl(id);
      setImageUrl(url);
      setLoading(false);
    }
    loadImg(id)
  }, [id]);

  if (loading) {
    return (
      <View style={styles.image}>
        <ActivityIndicator color={THEME.MAIN_COLOR} />
      </View>
    );
  }

  return (
    <Image
      source={{ uri: imageUrl }}
      resizeMode='contain'
      style={styles.image}
    />
  );
};

const styles = StyleSheet.create({
  image: {
    width: 200,
    height: 200
  }
})