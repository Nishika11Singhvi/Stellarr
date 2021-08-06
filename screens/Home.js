import React, { Component } from 'react';
import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, Image, ImageBackground, Platform, StatusBar } from 'react-native';

export default class HomeScreen extends Component 
{
    render() 
    {
        return (
            
                <View
                    style=
                    {{
                        flex: 1,
                        justifyContent: "center",
                        alignItems: "center"
                    }}>
                    <Text>Home Screen!</Text>
                </View>
        )
        
    }
}

const styles = StyleSheet.create(
{
    container : 
    {
        flex : 1,
    },
    container2 :
    {
        marginTop : Platform.OS == "android" ? StatusBar.currentHeight : 0
    },
    viewbuttons :
    {
        justifyContent : 'center',
        alignItems : 'center',
        flex : 0.8,
    },
    titleBar : 
    {
        justifyContent : 'center',
        alignItems : 'center',
        flex : 0.2,
        marginTop : 40
    },
    titleText :
    {
        fontSize : 60,
        fontFamily : 'century gothic',
        color : 'white',
        marginBottom : 0,
        marginTop : 90
    },
    titleText2 :
    {
        fontSize : 60,
        fontFamily : 'century gothic',
        color : 'white',
        marginBottom : 0,
        marginTop : -10
    },
    buttons :
    {
        backgroundColor : 'white',
        marginLeft : 30,
        marginRight : 50,
        marginTop : 30,
        marginBottom : 20,
        borderRadius : 80,
        height : 70,
        width : '70%'
    },
    buttons2 :
    {
        backgroundColor : 'white',
        marginLeft : 30,
        marginRight : 50,
        marginTop : 0,
        height : 70,
        marginBottom : 20,
        borderRadius : 80,
    },
    buttons3 :
    {
        backgroundColor : 'white',
        marginLeft : 30,
        marginRight : 50,
        marginTop : 0,
        marginBottom : 20,
        borderRadius : 80,
        height : 70
    },
    text1 :
    {
        fontSize : 20,
        padding : 4,
        fontFamily : 'courier',
        color : 'rgb(67,67,67)',
        marginTop : 15,
        marginLeft : 55,
        justifyContent : 'center',
        alignItems : 'center'
    },
    text01 :
    {
        fontSize : 20,
        padding : 4,
        fontFamily : 'courier',
        color : 'rgb(67,67,67)',
        marginTop : 15,
        marginLeft : 80,
        justifyContent : 'center',
        alignItems : 'center'
    },
    text2 :
    {
        fontSize : 10,
        color : 'rgba(155,155,155, 0.5)',
        position : 'absolute',
        right : 0,
        bottom : -15,
        zIndex : -5
    },
    imagestyle :
    {
        flex : 1,
        resizeMode : 'cover'
    },
    mainicon :
    {
        height : 120,
        width : 120,
        position : 'absolute', 
        right : 120,
        top : -30,
        resizeMode :'contain'
    },
    iconimage :
    {
        height : 100,
        width : 100,
        position : 'absolute', 
        right : -40,
        top : -20,
        resizeMode :'contain'
    }
})