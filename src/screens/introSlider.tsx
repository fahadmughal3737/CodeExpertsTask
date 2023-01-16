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
} from 'react-native';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
//import AppIntroSlider to use it
import AppIntroSlider from 'react-native-app-intro-slider';
import { colors } from './styles/colors';
import { Box } from '../components/box';
import { styles } from './styles/style';
export const IntroSlider = (props:any) => {
    // var dotColor = colors.BLUE
    const [dotColor, setDotColor] = useState(colors.BLUE)
    const [showRealApp, setShowRealApp] = useState(false);
    const [boxes, setBoxes] = useState([
        {
            img: require('../assets/images/mcdonalds.png'),
            text:'McDonalds'
        },
        {
            img: require('../assets/images/starbucks.png'),
            text:'Starbucks'
        },
        {
            img: require('../assets/images/mcdonalds.png'),
            text:'McDonalds'
        },
        {
            img: require('../assets/images/starbucks.png'),
            text:'Starbucks'
        },
        {
            img: require('../assets/images/mcdonalds.png'),
            text:'McDonalds'
        },
        {
            img: require('../assets/images/starbucks.png'),
            text:'Starbucks'
        },
        {
            img: require('../assets/images/nando.png'),
            text:'Nando'
        },
        {
            img: require('../assets/images/mcdonalds.png'),
            text:'McDonalds'
        },
        {
            img: require('../assets/images/starbucks.png'),
            text:'Starbucks'
        },
        {
            img: require('../assets/images/nando.png'),
            text:'Nando'
        },
        {
            img: require('../assets/images/mcdonalds.png'),
            text:'McDonalds'
        },
        {
            img: require('../assets/images/starbucks.png'),
            text:'Starbucks'
        },
       
      
    
    ])
    const onDone = () => {
        setShowRealApp(true);
    };
    const onSkip = () => {
        setShowRealApp(true);
    };

    const RenderItem = ({ item }) => {
        return (

            <View style={{ flex: 1, backgroundColor: 'white' }}>
                <ImageBackground style={styles.sliderImage} imageStyle={{ borderBottomLeftRadius: 20, borderBottomRightRadius: 20 }} source={item.image.uri}>
                    <TouchableOpacity onPress={() => onSkip()} style={{ alignSelf: 'flex-end', marginRight: '5%', }}>
                        <Text style={styles.smallWhiteText}>Skip</Text>
                    </TouchableOpacity>
                    <Image style={{ flex: 0.8, width: '60%' }} source={item.insideImage.uri} resizeMode='contain' />

                </ImageBackground>
                <View style={{ flex: 0.3, padding: '5%', justifyContent: 'space-evenly' }}>
                    <Text style={{ fontSize: 45, fontWeight: 'bold', color: colors.NAVYBLUE }}>{item.title}</Text>

                    <Text style={{ fontSize: 18, color: 'black' }}>{item.text}</Text>



                </View>
            </View>
        );
    };
    const RenderNextButton = () => {
        return (
            <View style={{ backgroundColor: dotColor, marginBottom: '10%', justifyContent: 'center', alignItems: 'center', borderRadius: 30, right: 15, width: 50, height: 50 }}>
                <MaterialIcon name="keyboard-arrow-right" size={22} color='white' />
            </View>
        )
    }
    const RenderDoneButton = () => {
        return (
            <View style={{ backgroundColor: dotColor, marginBottom: '10%', justifyContent: 'center', alignItems: 'center', borderRadius: 30, right: 15, width: 50, height: 50 }}>
                <MaterialIcon name="keyboard-arrow-right" size={22} color='white' />
            </View>
        )
    }
    const SlideChange = (index: number) => {
        console.log('num test', index)
        // dotColor=colors.YELLOW
        if (index === 0) {
            setDotColor(colors.BLUE)
        }
        else if (index === 1) {
            setDotColor(colors.YELLOW)
        }
        else if (index === 2) {
            setDotColor(colors.PINK)
        }
    }
    return (
        <>
            {showRealApp ? (
                <View style={styles.sliderScreencontainer}>
                    <View style={styles.sliderAppbar}>
                        <TouchableOpacity onPress={() => setShowRealApp(false)} style={styles.sliderbackbtn}>
                            <MaterialIcon name="keyboard-arrow-left" size={22} color={colors.GREEN} />
                        </TouchableOpacity>
                        <Text style={styles.genericText}>Pick Your Favorites</Text>
                    </View>
                    <View style={{ flex: 0.78 }}>
                        <ScrollView style={{}}>
                        
                            <View style={{flexWrap:'wrap', flexDirection:'row', justifyContent:'space-between'}}>
                                {boxes.map((data: any, index: number) => {
                                    
                                    return (

                                        <Box text = {data.text} image={data.img} />
                                    )
                                })}
                            </View>

                        </ScrollView>
                    </View>
                    <View style={{ flex: 0.1, justifyContent:'center', }}>
                        <TouchableOpacity onPress={() =>{props.navigation.navigate('Home')}} style={styles.longBtn}>
                        <Text style={{ color: colors.GREEN, fontSize: 20, fontWeight: 'bold',  }}>Continue</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            ) : (

                <AppIntroSlider

                    data={slides}
                    renderItem={RenderItem}
                    onDone={onDone}
                    // showSkipButton={true}
                    // onSkip={onSkip}
                    dotStyle={{ backgroundColor: dotColor, opacity: 0.5 }}
                    renderNextButton={RenderNextButton}
                    renderDoneButton={RenderDoneButton}
                    activeDotStyle={{ backgroundColor: dotColor }}
                    // bottomButton={true}

                    onSlideChange={(index: number) => SlideChange(index)}

                />
            )}
        </>
    );
};



const slides = [
    {
        key: 's1',
        text: 'Lorem Ipsum color sit amet, consectetur adpiscing elit. sit amet, consectetur adpiscing elit.',
        title: 'A super helpful app feature',
        image: {
            uri:
                require('../assets/images/sliderblue.png'),
        },
        insideImage: {
            uri:
                require('../assets/images/blue.png'),
        },
        backgroundColor: '#20d2bb',
    },
    {
        key: 's2',
        text: 'Lorem Ipsum color sit amet, consectetur adpiscing elit. sit amet, consectetur adpiscing elit.',
        title: 'A super helpful app feature',
        image: {
            uri:
                require('../assets/images/slideryellow.png'),
        },
        insideImage: {
            uri:
                require('../assets/images/yellow.png'),
        },
        backgroundColor: '#febe29',
    },
    {
        key: 's3',
        text: 'Lorem Ipsum color sit amet, consectetur adpiscing elit. sit amet, consectetur adpiscing elit.',
        title: 'A super helpful app feature',
        image: {
            uri:
                require('../assets/images/sliderpink.png'),
        },
        insideImage: {
            uri:
                require('../assets/images/pink.png'),
        },
        backgroundColor: '#22bcb5',
    },
    

];