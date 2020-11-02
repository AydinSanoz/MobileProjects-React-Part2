import React from 'react';
import {SafeAreaView, View, Text, StyleSheet} from 'react-native';
import auth from '@react-native-firebase/auth';
import {MyInput, MyButton} from '../components';

const LoginPage = (props) => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const logIn = () => {
    auth()
      .signInWithEmailAndPassword(
        email,
        password,
      )
      .then((response) => {
        props.navigation.navigate('BottomTab')
        console.log(response);
      })
      .catch((error) => {
        console.log(error.code)
        alert(error.code)
      });
  };

  return (
    <SafeAreaView style={{flex: 1, justifyContent: 'flex-start'}}>
      <View style={{flex: 1}}>
        <Text style={{fontSize: 30, textAlign: 'center'}}>Login</Text>

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
          <MyButton underline="none" title="Forgot ?" />
        </View>

        <View style={styles.buttonContainer}>
          <MyButton
            color="white"
            textAlign="center"
            title="Log in"
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
    backgroundColor: '#000a12',
    margin: 10,
    padding: 1,
  },
});
