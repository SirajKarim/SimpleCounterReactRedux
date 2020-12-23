import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { decrementAction, incrementAction,  resetAction } from './Store/Actions/Action';


export default function MyCounter() {
    const counter = useSelector( (state) => state.counter);
    const dispatch = useDispatch();
    return (
  
      <View style={styles.container}>
        <Text style = {{fontWeight: 'bold', fontSize: 65}}>{counter}</Text>
        <View style = {{flexDirection: 'row',}}>
          <Button onPress = { () => dispatch(incrementAction())} title = "+"/>
          <Button onPress = { () => dispatch(decrementAction())} title = "-" color="red"/>
          <Button onPress = { () => dispatch(resetAction())} title = "Reset" color="green"/>
        </View>
      </View>
     
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
  