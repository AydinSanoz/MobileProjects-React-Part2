import React, {useState} from 'react';
import {View, Text, Button} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';

const ComponentB = (props) => {
  const [isStudent, setIsStudent] = useState(false);
  const myCounter = useSelector((state) => {
    return state.counter;
  });
  const userName = useSelector((state) => state.userName);
  const dispatch = useDispatch();
  return (
    <View style={{flex: 1, backgroundColor: '#efefed', alignItems: 'center'}}>
      <Text style={{fontSize: 40}}>{myCounter}</Text>
      <Text style={{fontSize: 40}}>{userName}</Text>
      <Button
        title={props.title}
        onPress={() => {
          dispatch({
            type: 'SETUSERNAME',
            payload: {
              newUserName: 'Aydin',
            },
          });
          setIsStudent(true);
          
          
        }}
      />
    </View>
  );
};

export {ComponentB};
