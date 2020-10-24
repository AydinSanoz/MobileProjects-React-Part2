import React from 'react';
import {SafeAreaView, View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {Home, Reviews} from './pages'



const Stack = createStackNavigator();

function Router(){
    
    return (
        <NavigationContainer>
          <Stack.Navigator 
            initialRouteName = "Home"
            
          >
            <Stack.Screen name="Home" component={Home}/>
            <Stack.Screen name="Reviews" component={Reviews} />
          </Stack.Navigator>
        </NavigationContainer>
    );
        

}

export default Router;