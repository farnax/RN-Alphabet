import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import { letterReducer } from './reducers/letter.js';
import { mediaReducer } from './reducers/media.js';

export default createStore(
  combineReducers({ letter: letterReducer, media: mediaReducer }),
  applyMiddleware(thunk)
);