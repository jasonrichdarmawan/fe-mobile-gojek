import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Home from './src/features/Home/Home';
import GoJekSplash from './src/components/GoJekSplash';
import Register from './src/features/Home/Register';
import Login from './src/features/Home/Login';
import OTP from './src/features/Home/OTP';
import Beranda from './src/features/Beranda/Beranda';
import Konten from './src/features/Beranda/Konten';

const nullComponent = () => null;

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Beranda">
        <Stack.Screen
          name="initial"
          component={GoJekSplash}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Register"
          component={Register}
          options={{title: ''}}
        />
        <Stack.Screen name="Login" component={Login} options={{title: ''}} />
        <Stack.Screen name="OTP" component={OTP} options={{title: ''}} />
        <Stack.Screen
          name="Beranda"
          component={Beranda}
          options={{headerShown: false}}
        />
        <Stack.Screen name="Konten" component={Konten} options={{title: ''}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
