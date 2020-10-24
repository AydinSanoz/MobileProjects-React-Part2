import React from 'react';
import {SafeAreaView, View, Text, Button} from 'react-native';
import {RelativesStyles} from '../Styles'

const Relatives = (props) => {
    console.log("Relatives -> props", props)
    return(
        <SafeAreaView style = {RelativesStyles.Container}>
            <View>
                <Text style = {RelativesStyles.Text}>Relatives Page</Text>
            </View>
                <Button
                    title = 'Go'
                     style = {RelativesStyles.Button}
                    onPress = {()=>{props.navigation.navigate('Reviews')}}
                />
        </SafeAreaView>
    )
}

export {Relatives} 