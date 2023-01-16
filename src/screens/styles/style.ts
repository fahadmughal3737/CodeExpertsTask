import React from 'react'
import { StyleSheet } from 'react-native'
import { colors } from './colors'
export const styles:any = StyleSheet.create({
    container: {
      flex:1
    }, 
    sliderImage:{ flex: 0.6, justifyContent: 'center', alignItems: 'center' },
    smallWhiteText:{ color: 'white', fontSize: 16, fontWeight: 'bold' },
    sliderScreencontainer:{ backgroundColor: colors.GREEN, flex: 1, padding: '3%' },
    sliderAppbar:{ flex: 0.13, flexDirection: 'row', alignItems: 'center', },
    sliderbackbtn:{ backgroundColor: 'white', justifyContent: 'center', alignItems: 'center', borderRadius: 30, width: 50, height: 50 },
    longBtn:{width:'100%', borderRadius:10, alignSelf:'center', height:'60%', backgroundColor:'white',  justifyContent:'center', alignItems:'center'},
    genericText:{ color: 'white', fontSize: 20, fontWeight: 'bold', textAlign: 'center', width: '80%' },
    mainHomeContainer:{ backgroundColor: 'white', padding: '3%' },
    mainHometxt:{ color: colors.NAVYBLUE, fontSize: 20, paddingLeft: '12%', fontWeight: 'bold', textAlign: 'center', width: '88%' },
    logoRight:{ backgroundColor: colors.GREEN, justifyContent: 'center', alignItems: 'center', borderRadius: 30, width: '12%', height: 50 },
    textinputcont:{ height: 60, marginVertical: '2.5%', flexDirection: 'row', alignItems: 'center', paddingHorizontal: '2.5%', width: '100%', backgroundColor: '#E7E7E7', borderRadius: 15 },
    mainBox:{ margin: '2.5%', backgroundColor: 'white', height: 150, elevation: 3, borderRadius: 10, flexDirection: 'row' },
    blueText:{ color: colors.NAVYBLUE, fontSize: 20, fontWeight: 'bold', },
    gretText:{ color: colors.NAVYBLUE, fontSize: 18, fontWeight: 'bold', marginLeft: '2.5%', },
    githubBtn:{ alignSelf: 'center', marginVertical: '5%', backgroundColor: colors.GREEN, width: '60%', height: 60, borderRadius: 15, justifyContent: 'center', alignItems: 'center' },
})
