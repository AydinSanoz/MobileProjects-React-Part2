import React from 'react';
import {SafeAreaView, View, Text, Button} from 'react-native';
import {ReviewsStyles} from '../Styles'

const Reviews = (props) =>{
    return(
        <SafeAreaView style = {ReviewsStyles.Container}>
            <View>
                <Text style = {ReviewsStyles.Text}> Review Page</Text>
            </View>
            <Button
                title = "Go"
                onPress = {()=>{props.navigation.navigate('Home')}}

            />
        </SafeAreaView>
    )
}

export {Reviews}