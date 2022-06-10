import {StatusBar} from 'expo-status-bar';
import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import Header from './header'
import {gStyle} from './style';
import * as Font from 'expo-font'
import MainMenu from './nav';


const fonts = () => Font.loadAsync({
    'sc-bold': require('./assets/Scada-Bold.ttf'),
    'sc-regular': require('./assets/Scada-Regular.ttf')

})


export default function App() {


    return (

        <MainMenu/>
    );

}

const styles = StyleSheet.create({
    main: {
        paddingTop: 50,
        height: 100,
        backgroundColor: 'silver',
    },
    text: {
        fontSize: 18,
        color: 'red',
        textAlign: 'center'
    }
});
