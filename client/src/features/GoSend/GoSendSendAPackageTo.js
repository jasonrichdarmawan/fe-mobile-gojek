import React from 'react';
import {View, Image} from 'react-native';
import GoSendCurrentCity from '../../components/GoSend/GoSendCurrentCity';
import GoSendSearchLocation from '../../components/GoSend/GoSendSearchLocation';

export default function GoSendSendAPackageTo({
  route: {params},
  navigation: {navigate, goBack},
}) {
  const {title} = params;
  return (
    <View style={{flex: 1, flexDirection: 'column', backgroundColor: 'white'}}>
      <View style={{flex: 1}}>
        <GoSendCurrentCity title={title} goBack={goBack} />
      </View>
      <View style={{flex: 1}}>
        <GoSendSearchLocation
          icon={{name: 'arrow-down-box', color: 'orange'}}
          navigate={navigate}
          navigateTo="GoSendDestinationDetails"
          nextRoute="GoSendPickUpCity"
        />
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
