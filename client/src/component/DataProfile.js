import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
} from 'react-native';

import IconMatic from 'react-native-vector-icons/MaterialIcons';

const DataProfile = (props) => (
  <View style={styles.container}>
    <Text style={styles.title}>{props.title}</Text>
    <View style={styles.containerTextInput}>
      <View style={styles.sectionStyle}>
        <TextInput style={styles.data} />
        <View style={{marginRight: 10, marginLeft: 15}}>
          <IconMatic name="close" size={25} color="black" />
        </View>
      </View>
    </View>
  </View>
);

export default DataProfile;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    padding: 5,
    borderBottomColor: 'grey',
    borderBottomWidth: 1,
  },
  dataContainer: {
    padding: 10,

    flexDirection: 'row',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 15,
    marginLeft: 17,
    marginTop: 5,
  },
  data: {
    flex: 1,
    marginLeft: 15,
    fontWeight: 'bold',
    fontSize: 20,
  },

  sectionStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    height: 50,
  },
});
