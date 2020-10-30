import React from 'react';
import { SafeAreaView, View, Text } from 'react-native';

const LoginPage = () =>{
    return(
        <SafeAreaView>
            <View>
                <Text style = {{fontSize: 30, justifyContent : 'center', alignItems : 'center'}}>LoginPage</Text>
            </View>
        </SafeAreaView>
    )
}

export {LoginPage};