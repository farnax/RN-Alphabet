import { Audio } from 'expo-av';

export const playSound = async url => {
  const soundObject = new Audio.Sound();
  try {
    await soundObject.loadAsync({uri: url});
    await soundObject.playAsync();
  } catch (e) {
    console.log(e);
  }
};
