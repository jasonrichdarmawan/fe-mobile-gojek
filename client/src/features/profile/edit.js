import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import DataProfile from '../../components/DataProfile';

const EditProfile = ({navigation}) => {
  return (
    <View style={{marginTop: 40}}>
      <DataProfile title="Full Name" />
      <DataProfile title="Email" />
      <DataProfile title="Phone Number" />
    </View>
  );
};

export default EditProfile;
