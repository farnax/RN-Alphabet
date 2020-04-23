import { GET_SOUND_URL, CLAEN_SOUNDURL_STATE } from '../types.js';
import Firebase from '../../firebase/firebase.js';
import Sound from '../../sound.js';

export const getSoundUrl = id => async dispatch => {
  const soundUrl = await Firebase.getAudioUrl(id);
    
  dispatch({
    type: GET_SOUND_URL,
    payload: soundUrl
  })
};

export const cleanSoundUrlsState = () => {
  return {
    type: CLAEN_SOUNDURL_STATE
  }
}