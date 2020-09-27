import * as React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Profile from '../features/profile/profile';
import Beranda from '../features/beranda/beranda';
import ContactScreen from '../features/chat/contact';

const Tab = createMaterialTopTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Feed"
      tabBarOptions={{
        activeTintColor: '#e91e63',
        labelStyle: {fontSize: 12},
        style: {backgroundColor: 'powderblue'},
      }}>
      <Tab.Screen
        name="Beranda"
        component={Beranda}
        options={{tabBarLabel: 'Beranda', title: 'My home'}}
      />
      <Tab.Screen
        name="Chat"
        component={ContactScreen}
        options={{tabBarLabel: 'Chat'}}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{tabBarLabel: 'Profile'}}
      />
    </Tab.Navigator>
  );
}
export default function TopNavigator() {
  return <MyTabs />;
}
