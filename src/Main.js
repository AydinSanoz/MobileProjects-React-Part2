import React from 'react';
import {SafeAreaView} from 'react-native';
import {createStore} from 'redux';
import {Provider} from 'react-redux';

import {ComponentA, ComponentB} from './pages';

import {reducer, initialState} from './context';

const store = createStore(reducer, initialState);

const Main = (props) => {
  return (
    <Provider store = {store}>
      <SafeAreaView style={{flex: 1}}>
        <ComponentA />
        <ComponentB />
      </SafeAreaView>
    </Provider>
  );
};

export default Main;
