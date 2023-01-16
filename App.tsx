
import React, { useEffect, useState,createContext, useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
// import {createStackNavigator} from 'react-navigation';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {  Splash } from './src/screens/splash';
const Stack = createNativeStackNavigator();
import { store } from './src/state/store';
import Provider from 'redux'
import { IntroSlider,  } from './src/screens/introSlider';
import { Home } from './src/screens/home';
import { Github } from './src/screens/github';
export const UserContext = createContext({});

const App = () => {
  const [quantity, setQuantity] = useState(0)
  return (
    <UserContext.Provider  value = {{quantity, setQuantity}} >
      <NavigationContainer>
        <Stack.Navigator >
          <Stack.Screen name='Splash' component={Splash} options={{ headerShown: false }} />
          <Stack.Screen name='IntroSlider' component={IntroSlider} options={{ headerShown: false }} />
          <Stack.Screen name='Home' component={Home} options={{ headerShown: false }} />
          <Stack.Screen name='Github' component={Github} options={{ headerShown: false }} />


        </Stack.Navigator>
      </NavigationContainer>
    </UserContext.Provider>

  )
}
export default App;