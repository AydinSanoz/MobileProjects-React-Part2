import React from 'react';
import {SafeAreaView, View, Text} from 'react-native';
import {RouterStyles} from './Styles'


const Router = () => {
    return(
        <SafeAreaView>
            <View>
                <Text style= {RouterStyles.Text}>Welcome on board</Text>
            </View>
        </SafeAreaView>
    )
}

export default Router;