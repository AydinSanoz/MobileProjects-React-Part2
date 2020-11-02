import React from 'react';
import {TouchableOpacity, Text, StyleSheet, View} from 'react-native';

const MyButton = (props) => {
  return (
    <View style={styles.myButton} >
      <TouchableOpacity onPress={props.onPress}>
        <Text
          style={[styles.text,
          {
            color: props.color,
            backgroundColor: props.backColor,
            fontSize: props.fontSize,
            textAlign: props.textAlign,
            textDecorationLine : props.underline
          }
          ]}
        >
          {props.title}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export {MyButton};

const styles = StyleSheet.create({
  myButton: {
    margin: 10,
    padding: 10,
    borderRadius: 10,
  },
  text:{
    textDecorationLine: 'underline',
  }
});
