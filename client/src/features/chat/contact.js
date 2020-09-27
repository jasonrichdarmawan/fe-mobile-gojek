import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

const ContactScreen = ({navigation}) => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text style={{fontWeight: 'bold', fontSize: 30}}>Contact Screen</Text>
      <TouchableOpacity onPress={() => navigation.navigate('ChatScreen')}>
        <Text style={{fontWeight: 'bold', fontSize: 20}}>Pilih No Tujuan</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ContactScreen;
