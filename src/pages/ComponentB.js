import React from 'react';
import {View, Text} from 'react-native';

const ComponentB = (props) => {
  return (
      <View style = {{flex:1, backgroundColor : '#efefef'}}>
        <Text>Component_B</Text>
      </View>
  );
};
export {ComponentB};
