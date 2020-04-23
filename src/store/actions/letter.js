import { LOAD_LETTERS, TOGGLE_BOOKED } from '../types.js';
import Firebase from '../../firebase/firebase.js';

export const loadLetters = () => async dispatch => {
  const letters = await Firebase.getLetters();
    
  dispatch({
    type: LOAD_LETTERS,
    payload: letters
  })
};

export const toggleBooked = id => {
  return {
    type: TOGGLE_BOOKED,
    payload: id
  }
}