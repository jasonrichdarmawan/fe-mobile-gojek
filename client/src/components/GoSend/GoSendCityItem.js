import React from "react";
import {TouchableOpacity, View, StyleSheet, Text} from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome5';

const styles = StyleSheet.create({
  container: {
    paddingTop: 18,
    marginLeft: 18,
  },
  title: {
    fontWeight: 'bold',
  },
  divider: {
    borderBottomColor: 'silver',
    borderBottomWidth: 1,
    paddingBottom: 18,
  },
});

export default function GoSendCityItem({title, body, navigate, nextRoute}) {
  return (
    <TouchableOpacity
      style={[styles.container, {flexDirection: 'row'}]}
      // TODO: navigate()
      onPress={() =>
        navigate(nextRoute, {title, nextRoute: 'GoSendPickUpCity'})
      }>
      <View style={{marginRight: 16}}>
        <Icon name="city" size={24} />
      </View>
      <View style={[styles.divider, {flex: 1}]}>
        <Text style={styles.title}>{title}</Text>
        {body && <Text style={{color: 'silver'}}>{body}</Text>}
      </View>
    </TouchableOpacity>
  );
}