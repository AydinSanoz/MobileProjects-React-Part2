import React from 'react';
import {SafeAreaView, View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {Cities, Restaurants} from './Pages';

function HomeScreen() {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home Screen</Text>
    </View>
  );
}

const Stack = createStackNavigator();

function Router() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Cities" component={Cities} options = {{headerShown: true}} />
        <Stack.Screen name="Restaurants" component={Restaurants} options = {{headerShown: true}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Router;
