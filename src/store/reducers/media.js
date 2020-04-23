import { GET_SOUND_URL, CLAEN_SOUNDURL_STATE } from '../types.js';

const initialState = {
  soundUrl: []
};

export const mediaReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_SOUND_URL:
      return {
        ...state,
        soundUrl: [action.payload , ...state.soundUrl]
      };
      
    case CLAEN_SOUNDURL_STATE:
      return {
        ...state,
        soundUrl: []
      };

    default:
      return state;
  }
};
