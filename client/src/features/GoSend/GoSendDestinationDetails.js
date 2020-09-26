import React from 'react';
import GoSendDetails from '../../components/GoSend/GoSendDetails';

export default function GoSendDestinationDetails({navigation}) {
  return (
    <GoSendDetails
      title="Detail pengiriman paket"
      color="orange"
      navigation={navigation}
      nextRoute="GoSendPickUpDetails"
    />
  );
}
