import React from 'react';
import GoSendDetails from '../../components/GoSend/GoSendDetails';

export default function GoSendPickUpDetails({navigation}) {
  return (
    <GoSendDetails
      title="Detail pengambilan paket"
      color="blue"
      navigation={navigation}
      nextRoute="GoSendPackageDetails"
    />
  );
}
