import React from 'react';
import { Text, View, Button } from 'react-native';
import {useSelector, useDispatch} from 'react-redux';


const ComponentA = () =>{
    
    const myCounter = useSelector(state => state.counter)
    const dispatch = useDispatch()
    return(
        <View style= {{flex:1,alignItems: 'center'}}>
            <Text style = {{ fontSize: 40}}>{myCounter}</Text>
            <Button 
                title = "Arttır"
                onPress = {()=>dispatch({
                    type: "INCREASE"

                })}
            />
            <Button 
                title = "Azalt"
                onPress = {() => dispatch({type : "DECREASE"})}
            />
        </View>
    )
}

export {ComponentA} ;