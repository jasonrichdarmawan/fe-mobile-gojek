import React from 'react';
import {View, Image} from 'react-native';
import GoSendCurrentCity from "../../components/GoSend/GoSendCurrentCity";
import GoSendSearchLocation from "../../components/GoSend/GoSendSearchLocation";

export default function GoSendWhereToPickUp({
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
        <GoSendSearchLocation navigate={navigate} navigateTo="GoSendPickUpDetails" nextRoute="null" />
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
