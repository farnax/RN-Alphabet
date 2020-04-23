import { LOAD_LETTERS, TOGGLE_BOOKED } from '../types.js';

const initialState = {
  allLetters: [],
  bookedLetters: [],
  loading: true
};

export const letterReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_LETTERS:
      return {
        ...state,
        allLetters: action.payload,
        bookedLetters: action.payload.filter(letter => letter.booked),
        loading: false
      }

    case TOGGLE_BOOKED:
      const allLetters = state.allLetters.map(letter => {
        if(letter.id === action.payload) {
          letter.booked = !letter.booked
        }
        return letter
      });

      return {
        ...state,
        allLetters,
        bookedLetters: allLetters.filter(letter => letter.booked)
      }
    default: 
      return state;
  }
};