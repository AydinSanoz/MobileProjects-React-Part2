import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const MyButton = (props) => {
    return(
        <TouchableOpacity
            onPress = {props.onPress}
        
        >
            <Text style = {styles.text}> {props.title}</Text>
        </TouchableOpacity>
    )
}

export {MyButton};

const styles = StyleSheet.create({
    text:{
        fontSize: 30,
        textDecorationLine :'underline',


    }
})
