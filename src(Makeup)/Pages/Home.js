import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  ImageBackground,
} from 'react-native';

const Home = () => {
  return (
    <SafeAreaView style = {{flex:1}}>
      <View style={styles.container}>
        <Text style = {{fontSize: 40}}>Cosmos</Text>
        <Text style = {{fontSize : 60, fontWeight: 'bold'}}>Love Yourself Better</Text>
        <Text style = {{fontSize : 30, textDecorationLine : 'underline' }}>Go Shopping</Text>
    
      <Image
        style={styles.image}
        source={require('../../images/Makeup-PNG-Transparent.png')}
      />
      </View>
    </SafeAreaView>
  );
};

export {Home};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    // backgroundColor: '#BEB4AB',
   
  },
  image: {

    // height: Dimensions.get('window').height / 4,
    width : Dimensions.get('window').width,
    height : Dimensions.get('window').height/3,
    resizeMode: 'contain',
    
  },
});
