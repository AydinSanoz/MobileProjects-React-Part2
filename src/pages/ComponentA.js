import React from 'react';
import { Text, View } from 'react-native';
import {useSelector, useDispatch} from 'react-redux';


const ComponentA = () =>{
    
    const myCounter = useSelector(state => state.counter)
    return(
        <View style= {{flex:1,alignItems: 'center'}}>
            <Text style = {{ fontSize: 40}}>{myCounter}</Text>
        </View>
    )
}

export {ComponentA} ;