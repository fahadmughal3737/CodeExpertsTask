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
    ScrollView,
    TextInput,
    FlatList
} from 'react-native';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
//import AppIntroSlider to use it
import AppIntroSlider from 'react-native-app-intro-slider';
import { colors } from './styles/colors';
import { Box } from '../components/box';
import AntDesign from 'react-native-vector-icons/AntDesign'
import IonIcon from 'react-native-vector-icons/Ionicons'
import Material from 'react-native-vector-icons/MaterialCommunityIcons'
import { styles } from './styles/style';
export const Home = (props: any) => {
    const [small, setSmall] = useState([
        {
            text: 'Burgers',
            smalltext: 'Lorem Ipsum color sit amet, consectetur adpiscing elit. sit amet, consectetur adpiscing elit.',
            img: require('../assets/images/mcdonaldsmall.png'),
            key: 2

        },
        {
            text: 'Pizza',
            smalltext: 'Lorem Ipsum color sit amet, consectetur adpiscing elit. sit amet, consectetur adpiscing elit.',
            img: require('../assets/images/burgerking.png'),
            key: 4

        },
        {
            text: 'Steak',
            smalltext: 'Lorem Ipsum color sit amet, consectetur adpiscing elit. sit amet, consectetur adpiscing elit.',
            img: require('../assets/images/tgismall.png'),
            key: 5

        },
        {
            text: 'Burgers',
            smalltext: 'Lorem Ipsum color sit amet, consectetur adpiscing elit. sit amet, consectetur adpiscing elit.',
            img: require('../assets/images/nandosmall.png'),
            key: 1
        },
        {
            text: 'Steak',
            smalltext: 'Lorem Ipsum color sit amet, consectetur adpiscing elit. sit amet, consectetur adpiscing elit.',
            img: require('../assets/images/tgismall.png'),
            key: 5

        },
        {
            text: 'Burgers',
            smalltext: 'Lorem Ipsum color sit amet, consectetur adpiscing elit. sit amet, consectetur adpiscing elit.',
            img: require('../assets/images/nandosmall.png'),
            key: 1
        },

    ])

    return (
        <ScrollView style={styles.mainHomeContainer}>
            <View style={{ height: 100, flexDirection: 'row', alignItems: 'center' }}>

                <Text style={styles.mainHometxt}>Home</Text>
                <View style={styles.logoRight}>
                    <Image style={{ flex: 0.4, width: '100%', height: '100%' }} source={require('../assets/images/smalllogo.png')} resizeMode='contain' />
                </View>
            </View>
            <View style={styles.textinputcont}>
                <TextInput style={{ flex: 0.98, color: 'grey' }} placeholderTextColor={'grey'} placeholder='Search for a restaurant of dish' />
                <AntDesign name='search1' size={22} color={'grey'} />
            </View>

            <View style={{ marginVertical: '2.5%', }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: '2.5%', }}>
                    <Text style={styles.blueText}>Your Picks</Text>
                    <TouchableOpacity>
                        <Text style={styles.blueText}>Show All</Text>
                    </TouchableOpacity>
                </View>

                {small.map((title: any, index: number) => {
                    return (
                        <View style={styles.mainBox} >

                            <View style={{ flex: 0.35, justifyContent: 'center', alignItems: 'center', }}>
                                <Image style={{ flex: 0.7 }} source={title.img} resizeMode='contain' />
                            </View>
                            <View style={{ flex: 0.65, padding: '5%' }}>
                                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', }}>
                                    <Text style={styles.blueText}>{title.text}</Text>
                                    <IonIcon name='heart-outline' size={25} color='grey' />
                                </View>
                                <Text style={{ color: 'lightgrey', width: '80%', marginVertical: '2%', fontWeight: '600' }}>{title.smalltext}</Text>
                                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                    <Material name='silverware-fork-knife' size={25} color='#08C0CA' />

                                    <Text style={styles.greyText}>23 Dishes</Text>


                                </View>
                            </View>
                        </View>
                    );

                })}
                <TouchableOpacity onPress={() => props.navigation.navigate('Github')} style={styles.githubBtn}>
                    <Text style={{ fontSize: 18, fontWeight: '600', color: 'white' }}>Dummy Button for GitHUB API</Text>
                </TouchableOpacity>
                <View style={{ height: 60 }}>

                </View>


            </View>
        </ScrollView>
    )
}
