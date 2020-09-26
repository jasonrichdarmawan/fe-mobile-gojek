import React from 'react';
import {StyleSheet, TouchableOpacity, View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

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
  navigate,
  navigateTo,
  nextRoute,
}) {
  return (
    // TODO: navigate()
    <TouchableOpacity
      style={styles.border}
      onPress={() => navigate(navigateTo, {navigateTo: nextRoute, nextRoute})}>
      <View style={{flexDirection: 'row'}}>
        <View style={{flex: 1, flexDirection: 'row'}}>
          <View style={{marginRight: 16}}>
            <Icon name="box" size={16} color="orange" />
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
