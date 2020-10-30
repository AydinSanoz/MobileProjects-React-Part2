import React from 'react';
import { SafeAreaView, Text, View } from 'react-native' ;
import { NavigationContainer, StackRouter } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


import {Home, Login, LoginPage} from './Pages';


const Stack = createStackNavigator();  


const Makeup = () => {
    return(
        <NavigationContainer>
            <Stack.Navigator screenOptions= {{headerShown : false}}>
                <Stack.Screen name = "Home" component= {Home}/>
                <Stack.Screen name = "Login" component= {Login}/>
                <Stack.Screen name = "LoginPage" component= {LoginPage}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Makeup;