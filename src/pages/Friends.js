import React from 'react';
import {SafeAreaView, View, Text, Button} from 'react-native';
import {FriendsStyles} from '../Styles'

const Friends = (props) => {
    console.log("Friends -> props", props)
    return(
        <SafeAreaView style = {FriendsStyles.Container}>
            <View>
                <Text style = {FriendsStyles.Text}>Friends Page</Text>
            </View>
                <Button
                    title = 'Go'
                     style = {FriendsStyles.Button}
                    onPress = {()=>{props.navigation.navigate('Reviews')}}
                />
        </SafeAreaView>
    )
}

export {Friends} 