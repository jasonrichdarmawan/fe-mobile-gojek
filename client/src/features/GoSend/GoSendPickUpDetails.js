import React from 'react';
import GoSendDetails from '../../components/GoSend/GoSendDetails';

export default function GoSendPickUpDetails({navigation, route: {params}}) {
  const {navigateTo, nextRoute} = params;
  return (
    <GoSendDetails
      title="Detail pengambilan paket"
      color="blue"
      navigation={navigation}
      navigateTo={navigateTo ? navigateTo : nextRoute}
      nextRoute={nextRoute}
    />
  );
}
