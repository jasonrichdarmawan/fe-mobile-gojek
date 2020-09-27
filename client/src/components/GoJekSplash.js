import React from 'react';
import {Image, Text, View, StyleSheet, ActivityIndicator} from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default function GoJekSplash({navigation: {navigate}}) {
  const [isFetching, setFetching] = React.useState(false);
  React.useState(() => {
    setTimeout(() => {
      setFetching(true);
    }, 2000);
    console.log('hi', isFetching)
  }, [isFetching]);

  if (isFetching) setTimeout(() => {navigate('Home')}, 2000)

  if (isFetching)
    return (
      <View style={styles.container}>
        <ActivityIndicator color="#999999" size="large" />
        <Text>Driver kami siap-siap dulu, ya...</Text>
      </View>
    );

  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/GoJekSplash.jpg')}
        style={{width: 320, height: 320}}
      />
    </View>
  );
}
