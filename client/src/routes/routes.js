import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';

import Home from '../features/Home/Home';
import TopNavigator from '../routes/topnavigator';
import GoridecarHome from '../features/goridecar/home';
import GoridecarDestination from '../features/goridecar/destination';
import GoridecarPickup from '../features/goridecar/pickup';
import GoridecarSummary from '../features/goridecar/summary';
import Login from '../features/Home/Login';
import Register from '../features/Home/Register';
import OTP from '../features/Home/OTP';
import Konten from '../features/Beranda/Konten';
import GoJekSplash from '../components/GoJekSplash';

const RootStack = createStackNavigator();

const Routes = () => (
  <RootStack.Navigator>
    {/* Login Register */}
    <RootStack.Screen
      name="initial"
      component={GoJekSplash}
      options={{headerShown: false}}
    />
    <RootStack.Screen
      name="Home"
      component={Home}
      options={{headerShown: false}}
    />
    <RootStack.Screen
      name="LoginScreen"
      component={Login}
      options={{headerShown: false}}
    />
    <RootStack.Screen
      name="OtpScreen"
      component={OTP}
      options={{headerShown: false}}
    />
    <RootStack.Screen
      name="RegisterScreen"
      component={Register}
      options={{headerShown: false}}
    />
    {/* Beranda */}
    <RootStack.Screen
      name="TopNavigator"
      component={TopNavigator}
      options={{headerShown: false}}
    />
    <RootStack.Screen
      name="NewsScreen"
      component={Konten}
      options={{title: 'Gojek'}}
    />
    {/* Go Ride/ Car / BlueBird */}
    <RootStack.Screen
      name="GoRideCar"
      component={GoridecarHome}
      options={{headerShown: false}}
    />
    <RootStack.Screen
      name="Destination"
      component={GoridecarDestination}
      options={{headerShown: false}}
    />
    <RootStack.Screen
      name="Pickup"
      component={GoridecarPickup}
      options={{headerShown: false}}
    />
    <RootStack.Screen
      name="Summary"
      component={GoridecarSummary}
      options={{headerShown: false}}
    />
    {/* GoSend */}
  </RootStack.Navigator>
);

export default Routes;
