import React from 'react'
import { Text, View, StyleSheet, FlatList} from 'react-native'

const ListScreen = () => {

    const friends = [
        { name: 'Friends #1', age: 'Age 30' },
        { name: 'Friends #2', age: 'Age 32'},
        { name: 'Friends #3', age: 'Age 36' },
        { name: 'Friends #4', age: 'Age 37' },
        { name: 'Friends #5', age: 'Age 31' },
        { name: 'Friends #6', age: 'Age 39' },
        { name: 'Friends #7', age: 'Age 37' },
        { name: 'Friends #8', age: 'Age 30'},
        { name: 'Friends #9', age: 'Age 36' }
    ]

    return (
        <FlatList 
            data={friends}
            keyExtractor={friend => friend.name}
            renderItem={({ item }) => {
                return (
                    <Text style={styles.textStyle}>{item.name} - {item.age}</Text>
                )
            }}
        />
    )
}


const styles = StyleSheet.create({
    textStyle : {
        marginVertical: 50
    }
})

export default ListScreen