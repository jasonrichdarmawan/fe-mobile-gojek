import React from 'react';
import GoSendDetails from '../../components/GoSend/GoSendDetails';

export default function GoSendDestinationDetails({
  route: {params},
  navigation,
}) {
  const {navigateTo, nextRoute} = params;
  return (
    <GoSendDetails
      title="Detail pengiriman paket"
      color="orange"
      navigation={navigation}
      navigateTo={navigateTo}
      nextRoute={nextRoute}
    />
  );
}
