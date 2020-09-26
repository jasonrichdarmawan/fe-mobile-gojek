import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import GoSendScreen from './src/features/GoSend/GoSendScreen';
import {Button} from 'react-native';
import GoSendHeaderTitle from './src/components/GoSend/GoSendHeaderTitle';
import GoSendDestinationCity from './src/features/GoSend/GoSendDestinationCity';
import GoSendSendAPackageTo from './src/features/GoSend/GoSendSendAPackageTo';
import GoSendDestinationDetails from './src/features/GoSend/GoSendDestinationDetails';
import GoSendPickUpDetails from './src/features/GoSend/GoSendPickUpDetails';
import GoSendPackageDetails from './src/features/GoSend/GoSendPackageDetails';

const nullComponent = ({navigation: {navigate}}) => {
  return <Button title="GoSend" onPress={() => navigate('GoSend')} />;
};

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="null" component={nullComponent} />
        <Stack.Screen
          name="GoSend"
          component={GoSendScreen}
          options={{
            headerTitleContainerStyle: {left: 30},
            headerTitle: () => <GoSendHeaderTitle />,
          }}
        />
        <Stack.Screen
          name="GoSendDestinationCity"
          component={GoSendDestinationCity}
          options={{title: 'Destination city'}}
        />
        <Stack.Screen
          name="GoSendSendAPackageTo"
          component={GoSendSendAPackageTo}
          options={{title: 'Send a package to...'}}
        />
        <Stack.Screen
          name="GoSendDestinationDetails"
          component={GoSendDestinationDetails}
          options={{headerShown: false, title: ''}}
        />
        <Stack.Screen
          name="GoSendPickUpDetails"
          component={GoSendPickUpDetails}
          options={{headerShown: false, title: ''}}
        />
        <Stack.Screen
          name="GoSendPackageDetails"
          component={GoSendPackageDetails}
          options={{headerShown: false, title: ''}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
