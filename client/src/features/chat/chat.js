import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

const ChatScreen = ({navigation}) => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text style={{fontWeight: 'bold', fontSize: 30}}>Chat Screen</Text>
      <TouchableOpacity onPress={() => navigation.navigate('TopNavigator')}>
        <Text style={{fontWeight: 'bold', fontSize: 20}}>Back</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ChatScreen;
