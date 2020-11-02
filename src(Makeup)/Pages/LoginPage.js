import React from 'react';
import {SafeAreaView, View, Text, StyleSheet} from 'react-native';
import auth from '@react-native-firebase/auth';
import {AppleButton} from '@invertase/react-native-apple-authentication';

import {MyInput, MyButton} from '../components';

const LoginPage = (props) => {
  const [email, setEmail] = React.useState('');
  const [name, setName] = React.useState('');
  const [surname, setSurname] = React.useState('');
  const [password, setPassword] = React.useState('');

  const logIn = () => {
    auth()
      .signInWithEmailAndPassword(email, password)
      .then((response) => {
        props.navigation.navigate('BottomTab');
        console.log(response);
      })
      .catch((error) => {
        console.log(error.code);
        alert(error.code);
      });
  };

  return (
    <SafeAreaView style={{flex: 1, justifyContent: 'flex-start'}}>
      <View style={{flex: 1}}>
        <Text style={{fontSize: 30, textAlign: 'center'}}>
          {props.route.params.login}
        </Text>

        <MyInput
          placeholder="Enter Email..."
          bottom="#ece1ff"
          onText={(text) => setEmail(text)}
        />

        <View style={styles.passwordContainer}>
          <MyInput
            bottom="transparent"
            flex={1}
            placeholder="Password..."
            password
            onText={(pass) => setPassword(pass)}
          />

          {props.route.params.login == 'Login' && (
            <MyButton underline="none" title="Forgot ?" />
          )}
        </View>

        <View style={styles.buttonContainer}>
          <MyButton
            backColor = {props.route.params.login == 'Login' ? '#000a12' : 'gray'}
            color="white"
            textAlign="center"
            title={props.route.params.login}
            fontSize={20}
            onPress={logIn}
          />
        </View>
       
      </View>
    </SafeAreaView>
  );
};

export {LoginPage};

const styles = StyleSheet.create({
  passwordContainer: {
    flexDirection: 'row',
    borderBottomColor: '#ece1ff',
    borderBottomWidth: 2,
  },
  buttonContainer: {
    margin: 10,
    padding: 1,
  },
});
