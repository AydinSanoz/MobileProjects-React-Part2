import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const MyButton = (props) => {
    return(
        <TouchableOpacity
            onPress = {props.onPress}
        
        >
            <Text style = {{textDecorationLine: 'underline' , color : props.color, fontSize : props.fontSize}}> {props.title}</Text>
        </TouchableOpacity>
    )
}

export {MyButton};

