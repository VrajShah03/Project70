import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
export default class ReadStoryScreen extends React.Component{
    render(){
        return(
            <View style={StyleSheet.container}>
                <Text>Read Story</Text>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    },
    displayText:{
      fontSize: 15,
      textDecorationLine: 'underline'
    },
    scanButton:{
      backgroundColor: '#2196F3',
      padding: 10,
      margin: 10
    },
    buttonText:{
      fontSize: 20,
    }
  });