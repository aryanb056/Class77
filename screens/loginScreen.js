import React, { Component } from 'react'
import {Text,View,TextInput,StyleSheet,TouchableOpacity} from 'react-native'
export default class LoginScreen extends Component{
    render() {
        return(
        <View style= {styles.container}>
            <TextInput style = {styles.loginBox}
            placeholder='Username here'
            ></TextInput>
            
            <TextInput style = {styles.loginBox}
            placeholder= 'Password here'
            ></TextInput>

            <TouchableOpacity style = {styles.box}
            >
            
            <Text 
                >
                    Sign In
                    //toucchable opacity and style text
            </Text>
            </TouchableOpacity>

             </View>
       ) 
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    loginBox:{
        width: 100 ,
        height:100,
        borderWidth:2,
    },
    box:{
        width: 100,
        height: 100,
        backgroundColor:'red',

    },


  });

  