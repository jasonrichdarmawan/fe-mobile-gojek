import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Button,
  TouchableOpacity,
  Image,
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    marginTop: 18,
    marginHorizontal: 18,
  },
  title: {
    fontWeight: 'bold',
  },
  divider: {
    borderBottomColor: 'silver',
    borderBottomWidth: 1,
    marginVertical: 16,
  },
});

function GoSendHeaderView() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Where do you want to send a package?</Text>
      <Text>GoSend has more delivery options for you now! Check it out.</Text>
    </View>
  );
}

function GoSendWithinCity() {
  return (
    <TouchableOpacity
      style={{
        flexDirection: 'row',
      }}
      // TODO: navigate()
      onPress={() => console.log('GoSend_Dalam_kota')}>
      <View style={{marginHorizontal: 8}}>
        <Image source={require('../../../assets/GoSend_Dalam_kota.jpg')} />
      </View>
      <View style={{flex: 1}}>
        <Text style={styles.title}>Within City</Text>
        <Text>Instant or Same Day it is! Read at your service.</Text>
      </View>
    </TouchableOpacity>
  );
}

function GoSendIntercity() {
  return (
    <TouchableOpacity
      style={{flexDirection: 'row'}}
      // TODO: navigate()
      onPress={() => console.log('GoSend_Intercity')}>
      <View style={{marginHorizontal: 8}}>
        <Image source={require('../../../assets/GoSend_Intercity.jpg')} />
      </View>
      <View style={{flex: 1}}>
        <Text style={styles.title}>Intercity</Text>
        <Text>We can help you deliver things to other cities, too.</Text>
      </View>
    </TouchableOpacity>
  );
}

function GoSendNavigate({navigate}) {
  return (
    <View
      style={[
        styles.container,
        {
          padding: 16,
          borderRadius: 6,
          borderWidth: 1,
          borderColor: 'silver',
        },
      ]}>
      <GoSendWithinCity />

      <View style={styles.divider} />

      <GoSendIntercity />
    </View>
  );
}

export default function GoSendScreen({navigation: {navigate}}) {
  return (
    <View>
      <GoSendHeaderView />
      <GoSendNavigate navigate={navigate} />
    </View>
  );
}
