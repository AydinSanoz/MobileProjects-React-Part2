import React from 'react';
import {SafeAreaView, View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';


import {Home, Reviews} from './pages'






const Tab = createBottomTabNavigator();

function Router(){
    
    return (
        <NavigationContainer>
          <Tab.Navigator 
            initialRouteName = "Home"
            
          >
            <Tab.Screen name="Home" component={Home}/>
            <Tab.Screen name="Reviews" component={Reviews} />
          </Tab.Navigator>
        </NavigationContainer>
    );
        

}

export default Router;