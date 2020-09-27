import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from 'react-native';
import IconMatic from 'react-native-vector-icons/MaterialIcons';

const Profile = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.information}>
        <View style={styles.initialLogo}>
          <Text style={styles.textLogo}>NP</Text>
        </View>
        <View style={styles.dataProfile}>
          <Text style={styles.name}>Nama Pengguna</Text>
          <Text style={styles.textInfo}>08562272772</Text>
          <Text style={styles.textInfo}>namapengguna@gmail.com</Text>
        </View>
        <View style={styles.editLogo}>
          <TouchableOpacity onPress={() => navigation.navigate('EditProfile')}>
            <IconMatic name="edit" size={27} />
          </TouchableOpacity>
        </View>
      </View>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Home')}>
        <Text style={styles.textButton}>Log Out</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  information: {
    width: Dimensions.get('window').width,
    height: 150,
    flexDirection: 'row',
  },
  initialLogo: {
    width: 40,
    height: 40,
    backgroundColor: '#009714',
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 20,
    marginVertical: 22,
  },
  dataProfile: {
    marginVertical: 20,
  },
  textLogo: {
    fontWeight: 'bold',
    color: 'white',
  },
  name: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  textInfo: {
    fontSize: 17,
    color: 'grey',
  },
  editLogo: {
    marginVertical: 20,
    marginLeft: 95,
  },
  button: {
    borderWidth: 1,
    borderColor: 'red',
    borderRadius: 50,
    padding: 15,
    alignItems: 'center',
    width: '90%',
    backgroundColor: '#fff',
  },
  textButton: {
    color: 'red',
    fontSize: 15,
  },
});
