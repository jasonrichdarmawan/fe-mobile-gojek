import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

const GosendDetail = ({navigation}) => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text style={{fontWeight: 'bold', fontSize: 30}}>Detail Packet</Text>
      <TouchableOpacity onPress={() => navigation.navigate('GoSendSummary')}>
        <Text style={{fontWeight: 'bold', fontSize: 20}}>Next</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text style={{fontWeight: 'bold', fontSize: 20}}>Back</Text>
      </TouchableOpacity>
    </View>
  );
};

export default GosendDetail;
