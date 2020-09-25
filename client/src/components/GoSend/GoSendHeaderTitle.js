import React from 'react';
import {Image} from 'react-native';

export default function GoSendHeaderTitle() {
  return (
    <Image
      source={require('../../../assets/GoSend_Icon.jpg')}
      resizeMethod="scale"
      style={{marginLeft: 8, height: 50, width: 100}}
    />
  );
}
