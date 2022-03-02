import React from 'react';
import {View, Text, StyleSheet } from 'react-native';

const ComponentScreen = () => {
    
    const name = 'Stephen';

    return <View>
        <Text style={styles.header}>Getting started with react native!</Text>
        <Text style={styles.body}>My name is {name}</Text>
    </View>
}

const styles = StyleSheet.create({
    header: {
        fontSize:45
    },
    body: {
        fontSize:20
    }
})

export default ComponentScreen;

