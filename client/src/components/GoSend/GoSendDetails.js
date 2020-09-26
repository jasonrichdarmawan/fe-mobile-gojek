import React from 'react';
import {
  Dimensions,
  TouchableOpacity,
  StyleSheet,
  View,
  Text,
  TextInput,
} from 'react-native';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
import Icon from 'react-native-vector-icons/FontAwesome5';
import * as Animatable from 'react-native-animatable';
import ButtonNavigate from "../ButtonNavigate";

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'center',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  button: {
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: 'white',
    borderRadius:
      Math.round(
        Dimensions.get('window').width + Dimensions.get('window').height,
      ) / 2,
    padding: 8,
  },
  title: {
    fontWeight: 'bold',
  },
  input: {
    borderWidth: 1,
    borderColor: 'silver',
    borderRadius: 6,
    marginVertical: 5,
  },
  buttonNavigate: {
    borderWidth: 1,
    borderColor: 'green',
    borderRadius: 6,
    backgroundColor: 'green',
    padding: 16,
    alignItems: 'center',
    marginTop: 10,
  },
});

const GoBackButton = ({goBack}) => (
  <TouchableOpacity
    style={[styles.button, {position: 'absolute', top: 20, left: 20}]}
    onPress={() => goBack()}>
    <Icon name="arrow-left" size={18} color="black" />
  </TouchableOpacity>
);

const SearchLocationButton = () => (
  <TouchableOpacity
    style={[styles.button, {position: 'absolute', top: 20, right: 20}]}
    // TODO: search location
    onPress={() => console.log('Search Location')}>
    {/* TODO: use gojek assets */}
    <Icon name="search-location" size={18} color="blue" />
  </TouchableOpacity>
);

const TextInputIcon = ({icon, placeholder}) => (
  <View style={[styles.input, {flexDirection: 'row'}]}>
    <View style={{margin: 16}}>
      <Icon name={icon} size={16} color="silver" />
    </View>
    <TextInput style={{flex: 1}} placeholder={placeholder} />
  </View>
);

const Address = ({color, subdistrict, formatted_address}) => (
  <View style={{marginTop: 20, marginBottom: 10, flexDirection: 'row'}}>
    <View style={{marginRight: 16}}>
      <Icon name="box" size={24} color={color} />
    </View>
    <View style={{flex: 1}}>
      <Text style={styles.title}>{subdistrict}</Text>
      <Text ellipsizeMode="tail" numberOfLines={2}>
        {formatted_address}
      </Text>
    </View>
  </View>
);

const Details = ({navigateToNextRoute, title, color, address: {subdistrict, formatted_address}}) => {
  // console.log(address);
  return (
    <Animatable.View
      style={{
        height: '50%',
        width: '100%',
        backgroundColor: 'white',
        padding: 20,
        flex: 1,
      }}
      animation="fadeInUp">
      <Text style={styles.title}>{title}</Text>
      <Address
        subdistrict={subdistrict}
        formatted_address={formatted_address}
        color={color}
      />
      <View style={{flexDirection: 'column'}}>
        <TextInputIcon icon="home" placeholder="Detail lokasi (cth: patokan)" />
        <TextInputIcon icon="user" placeholder="Nama penerima" />
        <TextInputIcon icon="whatsapp" placeholder="Nomor telepon" />
      </View>
      <ButtonNavigate text="Lanjut" navigateToNextRoute={navigateToNextRoute} />
    </Animatable.View>
  );
};

export default function GoSendDetails({nextRoute, title, color, navigation: {navigate, goBack}}) {
  const [coordinate, setCoordinate] = React.useState({
    latitude: -6.1754,
    longitude: 106.8272,
    latitudeDelta: 0.015,
    longitudeDelta: 0.0121,
  });

  const [address, setAddress] = React.useState({
    subdistrict: '',
    formatted_address: '',
  });

  const handleRegionChange = (region) => {
    setCoordinate(region);
  };

  const fetchCityName = ({latitude, longtitude}) => {
    fetch(
      `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longtitude}&key=AIzaSyBt7wxG0Y0nPWVY6MHbIyCaHA8GZ7239p0`,
    )
      .then((response) => response.json())
      .then((data) => {
        const results = data.results[0];
        const address_components = results.address_components;
        const formatted_address = results.formatted_address;
        const getName = (zone) =>
          address_components.filter((item) =>
            item.types[0] === zone ? true : false,
          )[0].long_name;
        setAddress({
          subdistrict: getName('administrative_area_level_3'),
          formatted_address: formatted_address,
        });
      });
  };

  React.useEffect(() => {
    // only fetch once for every X times of coordinate changes after 1s.
    const timeout = setTimeout(() => {
      fetchCityName({
        latitude: coordinate.latitude,
        longtitude: coordinate.longitude,
      });
      // console.log('fetch')
    }, 1000);
    return () => clearTimeout(timeout);
  }, [coordinate]);

  // console.log('re-render')

  return (
    // TODO: fix bug keyboard view, note: original gojek is the same.
    <View style={{flex: 1}}>
      <View style={{flex: 1}}>
        <View style={styles.container}>
          <MapView
            provider={PROVIDER_GOOGLE}
            style={styles.map}
            initialRegion={coordinate}
            onRegionChangeComplete={handleRegionChange}
          />

          {/* TODO: use gojek assets */}
          <Icon
            name="map-marker-alt"
            size={36}
            color="orange"
            style={{top: -20}}
          />

          <GoBackButton goBack={goBack} />
          <SearchLocationButton />
        </View>
      </View>
      <View style={{flex: 1}}>
        <Details address={address} title={title} color={color} navigateToNextRoute={() => navigate(nextRoute)} />
      </View>
    </View>
  );
}