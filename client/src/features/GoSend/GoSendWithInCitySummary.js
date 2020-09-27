import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
import GoBackButton from '../../components/GoBackButton';
import SearchLocationButton from '../../components/SearchLocationButton';
import * as Animatable from 'react-native-animatable';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome5';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import ButtonNavigate from '../../components/ButtonNavigate';
import GoSendDetailsSummary from "../../components/GoSend/GoSendDetailsSummary";

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    flex: 1,
  },
  map: {
    ...StyleSheet.absoluteFillObject,
    flex: 1,
  },
  details: {
    backgroundColor: 'white',
  },
  button: {
    padding: 10,
    borderWidth: 1,
    borderRadius: 6,
    borderColor: 'silver',
  },
  title: {
    fontWeight: 'bold',
  },
  divider: {
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});

const ButtonIcon = ({id, select, setSelect, title, fineprint}) => (
  <TouchableOpacity
    style={[styles.button, id === select && {borderColor: 'orange'}]}
    onPress={() => id !== select && setSelect(id)}>
    <View style={{flexDirection: 'row'}}>
      <View style={{justifyContent: 'center', marginRight: 10}}>
        <Icon name="box" size={16} color={id === select ? 'green' : 'silver'} />
      </View>
      <View style={{flex: 1}}>
        <Text style={id === select && styles.title}>{title}</Text>
        <Text style={{fontSize: 12}}>{fineprint}</Text>
      </View>
    </View>
  </TouchableOpacity>
);

export default function GoSendWithInCitySummary({route: {params}, navigation: {navigate, goBack}}) {
  const [select, setSelect] = React.useState(1);
  const {note} = params;
  return (
    <View style={styles.container}>
      <MapView
        provider={PROVIDER_GOOGLE}
        style={styles.map}
        // initialRegion={coordinate}
        // onRegionChangeComplete={handleRegionChange}
      />
      <GoBackButton goBack={goBack} />
      <SearchLocationButton />
      <View style={{flex: 1}}>
        <View style={{flex: 1}}></View>
        <Animatable.View animation="fadeInUp" style={styles.details}>
          <View style={{margin: 20, flexDirection: 'row'}}>
            <View style={{flex: 1}}>
              <ButtonIcon
                id={1}
                select={select}
                setSelect={setSelect}
                title="Instant"
                fineprint="1-2 JAM"
              />
            </View>
            <View style={{margin: 10}}></View>
            <View style={{flex: 1}}>
              <ButtonIcon
                id={2}
                select={select}
                setSelect={setSelect}
                title="SameDay"
                fineprint="Waktu: 8AM - 3PM"
              />
            </View>
          </View>
          <View style={styles.divider} />
          <View style={{margin: 20}}>
            <GoSendDetailsSummary icon={{name: 'arrow-up-box', color: 'blue'}} />
            <View style={{margin: 10}} />
            <GoSendDetailsSummary icon={{name: 'arrow-down-box', color: 'orange'}} />
          </View>
          <View style={styles.divider} />
          <View style={{margin: 20}}>
            <View style={{flexDirection: 'row'}}>
              <Icon
                name="sticky-note"
                size={24}
                color="green"
                style={{marginRight: 20}}
              />
              <Text>{note}</Text>
            </View>
          </View>
          <View style={[styles.divider, {marginLeft: 64}]} />
          <View style={{margin: 20}}>
            <View style={{flexDirection: 'row'}}>
              <View style={{flex: 1, flexDirection: 'row'}}>
                <Ionicons
                  name="shield-checkmark-sharp"
                  size={24}
                  color="green"
                  style={{marginRight: 20}}
                />
                <Text>Perlindungan standar</Text>
              </View>
              <Text>Gratis</Text>
            </View>
          </View>
          <View style={styles.divider} />
          <View style={{margin: 20}}>
            <ButtonNavigate textLeft="Pesan GoSend" textRight="Rp13.000" navigateToNextRoute={() => navigate('TopNavigator')}/>
          </View>
        </Animatable.View>
      </View>
    </View>
  );
}
