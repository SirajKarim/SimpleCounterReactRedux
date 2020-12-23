import React from 'react';
import { Button, Text, View } from 'react-native';
import { Provider} from 'react-redux';
import MyCounter from './MyCounter';
import store from './Store/store'

export default function App() {
  
  return (
    <Provider store = {store}>
      <MyCounter />
    </Provider>
  );
}

