import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';


export default function MyCounter() {
    const counter = useSelector( (state) => state.counter);
    const dispatch = useDispatch();
    return (
  
      <View style={styles.container}>
        <Text style = {{fontWeight: 'bold', fontSize: 65}}>{counter}</Text>
        <View style = {{flexDirection: 'row',}}>
          <Button onPress = { () => dispatch({type: 'Increment'})} title = "+"/>
          <Button onPress = { () => dispatch({type: 'Decrement'})} title = "-" color="red"/>
          <Button onPress = { () => dispatch({type: 'Reset'})} title = "Reset" color="green"/>
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
  