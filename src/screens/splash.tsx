import React from 'react'
import { View,  StyleSheet } from 'react-native'
import { colors } from './styles/colors'
import * as Animatable from 'react-native-animatable';
export const Splash = (props: any) => {

    setTimeout(() =>{
        props.navigation.replace('IntroSlider')
    }, 2000)

    return (
        <View style={styles.container}>
            <Animatable.Image animation="bounceIn" duration={2500} iterationCount={1} direction="alternate" style={{ flex: 0.2, }} resizeMode='contain' source={require('../assets/images/Logo.png')} />
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.GREEN,
        flex: 1,
        justifyContent:'center', alignItems:'center'
    }
})