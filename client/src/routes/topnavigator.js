import * as React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Profile from '../features/profile/profile';
import Beranda from '../features/Beranda/Beranda';
import MyTabBar from '../components/MyTabBar';

const Tab = createMaterialTopTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      tabBar={(props) => <MyTabBar {...props} />}>
      <Tab.Screen
        name="Beranda"
        component={Beranda}
        options={{tabBarLabel: 'Beranda', title: 'My home'}}
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
