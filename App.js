import 'react-native-gesture-handler';
import React, { useState } from 'react';
import { AppLoading } from 'expo';
import { Provider } from 'react-redux';

import { bootstrap } from './src/bootstrap.js';
import { AppNavigation } from './src/navigation/AppNavigation.js';
import store from './src/store/index.js';

export default function App() {
  const [isReady, setIsReady] = useState(false);

  if(!isReady) {
    return (
      <AppLoading
        startAsync={bootstrap}
        onFinish={() => setIsReady(true)}
        onError={err => console.log(err)}
      />
    )
  }
  return (
    <Provider store={store}>
      <AppNavigation />
    </Provider>
  )
};
