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
import GoSendScreen from '../features/GoSend/GoSendScreen';
import GoSendHeaderTitle from '../components/GoSend/GoSendHeaderTitle';
import GoSendDestinationCity from '../features/GoSend/GoSendDestinationCity';
import GoSendSendAPackageTo from '../features/GoSend/GoSendSendAPackageTo';
import GoSendDestinationDetails from '../features/GoSend/GoSendDestinationDetails';
import GoSendPickUpDetails from '../features/GoSend/GoSendPickUpDetails';
import GoSendPackageDetails from '../features/GoSend/GoSendPackageDetails';
import GoSendWithInCitySummary from '../features/GoSend/GoSendWithInCitySummary';
import GoSendPickUpCity from '../features/GoSend/GoSendPickUpCity';
import GoSendWhereToPickUp from '../features/GoSend/GoSendWhereToPickUp';
import GoSendPackageSize from '../features/GoSend/GoSendPackageSize';
import GoSendInterCityPackageDetails from '../features/GoSend/GoSendInterCityPackageDetails';
import GoSendInterCitySummary from '../features/GoSend/GoSendInterCitySummary';

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
    <RootStack.Screen
      name="GoSend"
      component={GoSendScreen}
      options={{
        headerTitleContainerStyle: {left: 30},
        headerTitle: () => <GoSendHeaderTitle />,
      }}
    />
    <RootStack.Screen
      name="GoSendDestinationCity"
      component={GoSendDestinationCity}
      options={{title: 'Destination city'}}
    />
    <RootStack.Screen
      name="GoSendPickUpCity"
      component={GoSendPickUpCity}
      options={{title: 'Pick Up City'}}
    />
    <RootStack.Screen
      name="GoSendSendAPackageTo"
      component={GoSendSendAPackageTo}
      options={{title: 'Send a package to...'}}
    />
    <RootStack.Screen
      name="GoSendWhereToPickUp"
      component={GoSendWhereToPickUp}
      options={{title: 'Paketnya diambil di mana?'}}
    />
    <RootStack.Screen
      name="GoSendDestinationDetails"
      component={GoSendDestinationDetails}
      options={{headerShown: false, title: ''}}
    />
    <RootStack.Screen
      name="GoSendPickUpDetails"
      component={GoSendPickUpDetails}
      options={{headerShown: false}}
    />
    <RootStack.Screen
      name="GoSendPackageDetails"
      component={GoSendPackageDetails}
      options={{headerShown: false}}
    />
    <RootStack.Screen
      name="GoSendWithInCitySummary"
      component={GoSendWithInCitySummary}
      options={{headerShown: false}}
    />
    <RootStack.Screen
      name="GoSendPackageSize"
      component={GoSendPackageSize}
      options={{headerShown: false}}
    />
    <RootStack.Screen
      name="GoSendInterCityPackageDetails"
      component={GoSendInterCityPackageDetails}
      options={{title: 'Rincian paket'}}
    />
    <RootStack.Screen
      name="GoSendInterCitySummary"
      component={GoSendInterCitySummary}
      options={{title: 'Detail order'}}
    />
  </RootStack.Navigator>
);

export default Routes;
