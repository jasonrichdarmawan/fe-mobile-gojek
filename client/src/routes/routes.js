import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';
import {TouchableOpacity, Text, View} from 'react-native';

import Home from '../features/Home/home';
import TopNavigator from '../routes/topnavigator';
import Beranda from '../features/Beranda/beranda';
import Profile from '../features/profile/profile';
import ContactScreen from '../features/chat/contact';
import EditProfile from '../features/profile/edit';
import NewsScreen from '../features/news/news';
import GoridecarHome from '../features/goridecar/home';
import GoridecarDestination from '../features/goridecar/destination';
import GoridecarPickup from '../features/goridecar/pickup';
import GoridecarSummary from '../features/goridecar/summary';
import ChatScreen from '../features/chat/chat';
import GosendHome from '../features/gosend/home';
import GosendDestination from '../features/gosend/destination';
import GosendPickup from '../features/gosend/pickup';
import GosendDetail from '../features/gosend/detail';
import GosendSummary from '../features/gosend/summary';
import InnerCity from '../features/gosend/innercity';
import InnerCityConfirm from '../features/gosend/confirm';
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
    <RootStack.Screen
      name="EditProfile"
      component={EditProfile}
      options={{
        headerShown: true,
        title: 'Edit Profile',
        headerRight: () => (
          <TouchableOpacity onPress={() => alert('Saved!')}>
            <View
              style={{
                backgroundColor: 'grey',
                width: 55,
                height: 30,
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 5,
                marginRight: 15,
              }}>
              <Text
                style={{
                  fontWeight: 'bold',
                  color: 'white',
                }}>
                Save
              </Text>
            </View>
          </TouchableOpacity>
        ),
      }}
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
    <RootStack.Screen
      name="ChatScreen"
      component={ChatScreen}
      options={{headerShown: false}}
    />
    {/* GoSend */}
    <RootStack.Screen
      name="GoSend"
      component={GosendHome}
      options={{headerShown: false}}
    />
    <RootStack.Screen
      name="GoSendDestination"
      component={GosendDestination}
      options={{headerShown: false}}
    />
    <RootStack.Screen
      name="GoSendPickup"
      component={GosendPickup}
      options={{headerShown: false}}
    />
    <RootStack.Screen
      name="GoSendDetails"
      component={GosendDetail}
      options={{headerShown: false}}
    />
    <RootStack.Screen
      name="GoSendSummary"
      component={GosendSummary}
      options={{headerShown: false}}
    />
    <RootStack.Screen
      name="Innercity"
      component={InnerCity}
      options={{headerShown: false}}
    />
    <RootStack.Screen
      name="InnercityConfirm"
      component={InnerCityConfirm}
      options={{headerShown: false}}
    />
  </RootStack.Navigator>
);

export default Routes;
