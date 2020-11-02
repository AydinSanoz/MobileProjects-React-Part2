import React from 'react';
import {SafeAreaView, View, Text, StyleSheet} from 'react-native';
import {MyInput, MyButton} from '../components';

const LoginPage = () => {
  return (
    <SafeAreaView style={{flex: 1, justifyContent : 'flex-start'}}>
      <View style={{flex: 1}}>
        <Text style={{fontSize: 30, textAlign : 'center'}}>Login</Text>

        
          <MyInput placeholder = "Enter Email..." bottom = '#ece1ff' />
       

        <View style = {{flexDirection :'row', borderBottomColor : '#ece1ff', borderBottomWidth : 2,}}>
          <MyInput  bottom = 'transparent' flex = {1} placeholder = "Password..." password />
          <MyButton underline = 'none' title = "Forgot ?" />

        </View>
       
        <View style = {styles.buttonContainer}>

          <MyButton color = 'white' textAlign = 'center' title="Log in" fontSize={20} />
        </View>
       
      </View>
      {/* <View style = {{flex:1}}>

      </View> */}
    </SafeAreaView>
  );
};

export {LoginPage};

const styles = StyleSheet.create({
    buttonContainer:{
        backgroundColor : '#000a12',
        margin : 10,
        padding: 1,
        
        
    }
})
