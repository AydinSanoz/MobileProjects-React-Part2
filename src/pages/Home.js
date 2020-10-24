import React from 'react';
import {SafeAreaView, View, Text, Button} from 'react-native';
import {HomeStyles} from '../Styles'

const Home = (props) => {
    console.log("Home -> props", props)
    return(
        <SafeAreaView style = {HomeStyles.Container}>
            <View>
                <Text style = {HomeStyles.Text}>Home Page</Text>
            </View>
                <Button
                    title = 'Go'
                     style = {HomeStyles.Button}
                    onPress = {()=>{props.navigation.navigate('Reviews')}}
                />
        </SafeAreaView>
    )
}

export {Home} 