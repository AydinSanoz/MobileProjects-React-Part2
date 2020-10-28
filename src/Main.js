import React from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import { ComponentA, ComponentB } from './pages';



const Main = () => {
  return (
    <SafeAreaView style = {{flex:1}}>
        <ComponentA />
        <ComponentB />
    </SafeAreaView>
  );
};

export default Main;
