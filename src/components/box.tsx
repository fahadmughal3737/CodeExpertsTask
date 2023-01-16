import React, { useState } from 'react';

// import all the components we are going to use
import {
    SafeAreaView,
    StyleSheet,
    View,
    Text,
    Image,
    Button,
    TouchableOpacity,
    ImageBackground,
} from 'react-native';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
//import AppIntroSlider to use it
import AppIntroSlider from 'react-native-app-intro-slider';
import { colors } from '../screens/styles/colors';

export const Box = (props: any) => {
    return (
        <View style={{ width:200, justifyContent:'center', alignItems:'center'}}>
            <TouchableOpacity style={{ height: 125, width: 200, justifyContent:'center', alignItems:'center', borderRadius: 20, backgroundColor: 'white' }}>
                <Image style={{ flex: 0.4, width: '50%', height: '100%', }} resizeMode='contain' source={props.image} />
            </TouchableOpacity>
            <Text style={{ color: 'white', marginVertical:'5%', fontSize: 20, fontWeight: 'bold', textAlign: 'center', width: '80%' }}>{props.text}</Text>

        </View>
    )
}