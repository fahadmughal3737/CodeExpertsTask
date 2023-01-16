import React, { useState, useEffect } from 'react';

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
    FlatList, ActivityIndicator
} from 'react-native';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
//import AppIntroSlider to use it
import AppIntroSlider from 'react-native-app-intro-slider';
import { colors } from './styles/colors';
import { Box } from '../components/box';
import AntDesign from 'react-native-vector-icons/AntDesign'
import IonIcon from 'react-native-vector-icons/Ionicons'
import Material from 'react-native-vector-icons/MaterialCommunityIcons'
import { GetAllGithubUsers } from '../api/getAllUsersGithub';


export const Github = () => {
    const [load, setLoad] = useState(true)
    const [apiData, setApiData] = useState<any>([])

    type ItemProps = { title: any };

    const Item = ({ title }: ItemProps) => (
        <View style={{ margin: '2.5%', padding: '4%', backgroundColor: 'white', height: 150, elevation: 5, borderRadius: 10, flexDirection:'row' }} >
            <View style={{flex:0.5, }}>
                <View style={{ flexDirection: 'row' }}>
                    <Text style={{ color: 'black', fontSize: 17, fontWeight: 'bold' }}>{'Username: '}</Text>
                    <Text style={{ color: 'grey', fontSize: 17, fontWeight: 'bold' }}>{title.login}</Text>
                </View>
                <View style={{ flexDirection: 'row' }}>
                    <Text style={{ color: 'black', fontSize: 17, fontWeight: 'bold' }}>{'UserID: '}</Text>
                    <Text style={{ color: 'grey', fontSize: 17, fontWeight: 'bold' }}>{title.id}</Text>
                </View>
                <View style={{ flexDirection: 'row' }}>
                    <Text style={{ color: 'black', fontSize: 17, fontWeight: 'bold' }}>{'User Type: '}</Text>
                    <Text style={{ color: 'grey', fontSize: 17, fontWeight: 'bold' }}>{title.type}</Text>
                </View>
                <View style={{ flexDirection: 'row' }}>
                    <Text style={{ color: 'black', fontSize: 17, fontWeight: 'bold' }}>{'Site Admin: '}</Text>
                    <Text style={{ color: 'grey', fontSize: 17, fontWeight: 'bold' }}>{title.site_admin === false ? 'No' : 'Yes'}</Text>
                </View>
                <View style={{ flexDirection: 'row' }}>
                    <Text style={{ color: 'black', fontSize: 17, fontWeight: 'bold' }}>{'Url: '}</Text>
                    <Text style={{ color: 'grey', fontSize: 17, fontWeight: 'bold' }}>{title.url}</Text>
                </View>
            </View>
            
            <Image style={{flex:0.5, borderRadius:20,  }} resizeMode='contain' source={{uri: title.avatar_url}} />



        </View>
    );
    useEffect(() => {
        GetAllGithubUsers()
            .then((res: any) => {
                console.log('res', res)
                res.map((data: any, index: number) => {
                    apiData.push(data)
                })
                if (apiData.length > 0) {
                    setLoad(false)
                }
            })
            .catch((e: any) => {
                console.log('error', e)
            })
    })
    return (
        <View style={{ flex: 1, backgroundColor: 'white' }}>
            {load ?
                <ActivityIndicator size={'large'} style={{ flex: 1 }} color={colors.GREEN} />
                :
                <View style={{ padding: '5%' }}>
                    <FlatList
                        data={apiData}
                        renderItem={({ item }) => <Item title={item} />}
                    />
                </View>
            }
        </View>
    )
}