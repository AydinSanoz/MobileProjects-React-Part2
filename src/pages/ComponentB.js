import React from 'react';
import {View, Text} from 'react-native';
import {useSelector} from 'react-redux';



const ComponentB = () =>{
    const myCounter = useSelector(state => state.counter)
   return(
        <View style = {{flex:1, backgroundColor : '#efefed', alignItems: 'center'}}>
            <Text style = {{fontSize : 40}}>{myCounter}</Text>
        </View>
    
    )
}

export {ComponentB};