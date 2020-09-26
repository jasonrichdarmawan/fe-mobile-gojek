import React from "react";
import {TouchableOpacity, StyleSheet, Dimensions} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

const styles = StyleSheet.create({
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
})

const SearchLocationButton = () => (
  <TouchableOpacity
    style={[styles.button, {position: 'absolute', top: 20, right: 20}]}
    // TODO: search location
    onPress={() => console.log('Search Location')}>
    {/* TODO: use gojek assets */}
    <Icon name="location-searching" size={18} color="blue" />
  </TouchableOpacity>
);

export default SearchLocationButton;