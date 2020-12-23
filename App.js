import React from 'react';
import { Button, Text, View } from 'react-native';
import { Provider} from 'react-redux';
import MyCounter from './MyCounter';
import store from './Store/store';
import reduxStore from './Store/store';
import {PersistGate} from 'redux-persist/integration/react'

export default function App() {
  const {store, persistor} = reduxStore();
  return (
    <Provider store = {store}>
      <PersistGate loading = {null} persistor = {persistor}>
      <MyCounter />
      </PersistGate>
    </Provider>
  );
}

