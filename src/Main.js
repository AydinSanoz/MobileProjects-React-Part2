import React from 'react';
import {SafeAreaView, View, Text} from 'react-native';
import {ComponentA, ComponentB} from './pages';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import {reducer, initialState} from './context';

const store = createStore(reducer, initialState);

const Main = (props) => {
console.log("Main -> props", props)

  
  return (
    <Provider store = {store}>
      <SafeAreaView style={{flex: 1}}>
        <Text>{}</Text>
        <ComponentA />
        <ComponentB  title = 'PushMe'/>
      </SafeAreaView>
    </Provider>
  );
};

export default Main;
