import React from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome5';

const styles = StyleSheet.create({
  container: {
    paddingTop: 18,
    marginHorizontal: 18,
  },
  title: {
    fontWeight: 'bold',
  },
  button: {
    borderStyle: 'solid',
    borderColor: 'green',
    borderWidth: 1,
    borderRadius: 6,
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
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

function GoSendCurrentCity({title, goBack}) {
  return (
    <View style={[styles.container, {flexDirection: 'row'}]}>
      <View style={[{flex: 1, flexDirection: 'row'}]}>
        <View style={{marginRight: 16}}>
          <Icon name="city" size={24} />
        </View>
        <View>
          <Text style={styles.title}>{title}</Text>
        </View>
      </View>
      <TouchableOpacity style={styles.button} onPress={() => goBack()}>
        <Text style={{fontWeight: 'bold', color: 'green'}}>Change</Text>
      </TouchableOpacity>
    </View>
  );
}

function GoSendSearchLocation({navigate}) {
  return (
    <View style={styles.border}>
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
    </View>
  );
}

export default function GoSendSendAPackageTo({
  route,
  navigation: {navigate, goBack},
}) {
  const {title} = route.params;
  return (
    <View style={{flex: 1, flexDirection: 'column', backgroundColor: 'white'}}>
      <View style={{flex: 1}}>
        <GoSendCurrentCity title={title} goBack={goBack} />
      </View>
      <View style={{flex: 1}}>
        <GoSendSearchLocation navigate={navigate} />
      </View>
      <View
        style={{
          flex: 10,
          justifyContent: 'center',
          alignItems: 'center',
          margin: 18,
        }}>
        <Image source={require('../../../assets/GoSend_SendAPackageTo.jpg')} />
      </View>
    </View>
  );
}
