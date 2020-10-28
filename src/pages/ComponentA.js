import React, {useState} from 'react';
import { Text, View, Button, TextInput  } from 'react-native';
import {useSelector, useDispatch} from 'react-redux';


const ComponentA = () =>{
    const [userInput, setUserInput] =  useState('Meryem')
    console.log("ComponentA -> userInput", userInput)
    const myCounter = useSelector(state => state.counter)
    const userName = useSelector(state => {
        return state.userName
    })
    const dispatch = useDispatch()
    return(
        <View style= {{flex:1,alignItems: 'center'}}>
            <Text style = {{ fontSize: 40}}>{myCounter}</Text>
            <Text style = {{ fontSize: 40}}>{userName}</Text>
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
            <TextInput
                style = {{backgroundColor : '#eceece', margin:10, padding:10,alignSelf:'stretch',borderRadius:10}}
                onChangeText = {(val) => setUserInput(val)}
            />
            <Text style = {{fontSize : 30}}>{userInput}</Text>
            <Button
                title = "onPressUserInput"
                onPress = {() => dispatch({
                    type : "SETUSERNAME",
                    payload :{
                        newUserName : userInput,
                    }})}
            />
        
        </View>
    )
}

export {ComponentA} ;