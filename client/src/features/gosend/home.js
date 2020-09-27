import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

const GosendHome = ({navigation}) => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text style={{fontWeight: 'bold', fontSize: 30}}>Go Send Screen</Text>
      <TouchableOpacity
        onPress={() => navigation.navigate('GoSendDestination')}>
        <Text style={{fontWeight: 'bold', fontSize: 20}}>Within City</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Innercity')}>
        <Text style={{fontWeight: 'bold', fontSize: 20}}>Innercity</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text style={{fontWeight: 'bold', fontSize: 20}}>Back</Text>
      </TouchableOpacity>
    </View>
  );
};

export default GosendHome;
