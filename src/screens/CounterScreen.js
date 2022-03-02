import React, { useReducer, useState } from 'react';
import { Text, StyleSheet, View, Button } from 'react-native';


const reducer = (state,action) => {
    return state.curentCount + action.payload < 0 ? state 
    : { ...state, curentCount: state.curentCount + action.payload  }
}

const CounterScreen = props => {

    const [state, dispatch] = useReducer(reducer, { curentCount: 0 });

    return (
        <View>
            <Button onPress={() => dispatch({ payload: 1})} title='Increase'/>
            <Button onPress={() => dispatch({ payload: -1})} title='Decrease'/>
            <Text>Current Counter: {state.curentCount} </Text>
        </View>
    )
}

const style = StyleSheet.create({

})

export default CounterScreen