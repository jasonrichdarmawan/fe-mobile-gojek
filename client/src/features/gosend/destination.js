import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

const GosendDestination = ({navigation}) => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text style={{fontWeight: 'bold', fontSize: 30}}>Destination</Text>
      <TouchableOpacity onPress={() => navigation.navigate('GoSendPickup')}>
        <Text style={{fontWeight: 'bold', fontSize: 20}}>Next</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text style={{fontWeight: 'bold', fontSize: 20}}>Back</Text>
      </TouchableOpacity>
    </View>
  );
};

export default GosendDestination;
