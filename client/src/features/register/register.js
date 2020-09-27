import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

const RegisterScreen = ({navigation}) => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text style={{fontWeight: 'bold', fontSize: 30}}>Register Screen</Text>
      <TouchableOpacity onPress={() => navigation.navigate('LoginScreen')}>
        <Text style={{fontWeight: 'bold', fontSize: 20}}>Register</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text style={{fontWeight: 'bold', fontSize: 20}}>Back</Text>
      </TouchableOpacity>
    </View>
  );
};

export default RegisterScreen;
