import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

const LoginScreen = ({navigation}) => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text style={{fontWeight: 'bold', fontSize: 30}}>Login Screen</Text>
      <TouchableOpacity onPress={() => navigation.navigate('OtpScreen')}>
        <Text style={{fontWeight: 'bold', fontSize: 20}}>Go To OTP</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text style={{fontWeight: 'bold', fontSize: 20}}>Back</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginScreen;
