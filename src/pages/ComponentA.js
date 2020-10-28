import React from 'react';
import {View, Text, Button} from 'react-native';



const ComponentA = (props) => {
  return (
    <View style={{flex: 1}}>
      <Text>ComponentA</Text>
      <Button title = "Arttır"/>
      <Button title = "Azalt" />
      <Text>state</Text>
    </View>
  );
};

export {ComponentA};
