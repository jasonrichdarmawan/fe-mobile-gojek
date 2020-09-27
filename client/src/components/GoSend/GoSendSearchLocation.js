import React from 'react';
import {StyleSheet, TouchableOpacity, View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const styles = StyleSheet.create({
  border: {
    marginTop: 16,
    marginHorizontal: 18,
    borderStyle: 'solid',
    borderColor: 'silver',
    borderWidth: 1,
    borderRadius: 6,
    paddingVertical: 16,
    paddingHorizontal: 8,
  },
});

export default function GoSendSearchLocation({
  icon: {name, color},
  navigate,
  navigateTo,
  nextRoute,
}) {
  return (
    // TODO: navigate()
    <TouchableOpacity
      style={styles.border}
      onPress={() => navigate(navigateTo, {navigateTo: nextRoute})}>
      <View style={{flexDirection: 'row'}}>
        <View style={{flex: 1, flexDirection: 'row'}}>
          <View style={{marginRight: 16}}>
            <MaterialCommunityIcons name={name} size={24} color={color} />
          </View>
          <View>
            <Text>Search for a location</Text>
          </View>
        </View>
        <View>
          <Icon name="search" size={16} />
        </View>
      </View>
    </TouchableOpacity>
  );
}
