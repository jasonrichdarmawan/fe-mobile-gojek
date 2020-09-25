import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {FlatList, TouchableOpacity} from 'react-native-gesture-handler';
import {SafeAreaView} from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/FontAwesome5';

const styles = StyleSheet.create({
  container: {
    paddingTop: 18,
    marginLeft: 18,
  },
  title: {
    fontWeight: 'bold',
  },
  divider: {
    borderBottomColor: 'silver',
    borderBottomWidth: 1,
    paddingBottom: 18,
  },
});

const data = [
  {
    id: 'iK4eKo40D9hGSg5SXTlIScmrcIC2',
    title: 'Bandung',
  },
  {
    id: 'KmqD7jWViJkBemrWKW9g',
    title: 'Jadetabek',
    body: 'GoSend Intercity has not arrived yet in Bogor.',
  },
  {
    id: '4iXtornTD4c2jCpyIQFa',
    title: 'Yogyakarta',
  },
  {
    id: 'yyoubEjNGrKpcq6Ewarf',
    title: 'Semarang',
  },
  {
    id: '3KZaN3IYrvoQyBuZABm6',
    title: 'Solo',
  },
];

function Item({title, body, navigate}) {
  return (
    <TouchableOpacity
      style={[styles.container, {flexDirection: 'row'}]}
      // TODO: navigate()
      onPress={() => navigate('GoSendSendAPackageTo', {title})}>
      <View style={{marginRight: 16}}>
        <Icon name="city" size={24} />
      </View>
      <View style={[styles.divider, {flex: 1}]}>
        <Text style={styles.title}>{title}</Text>
        {body && <Text style={{color: 'silver'}}>{body}</Text>}
      </View>
    </TouchableOpacity>
  );
}

export default function GoSendDestinationCity({navigation: {navigate}}) {
  const renderItem = ({item}) => (
    <Item title={item.title} body={item.body} navigate={navigate} />
  );

  return (
    <SafeAreaView>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
}
