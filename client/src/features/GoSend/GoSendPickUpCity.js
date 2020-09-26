import React from 'react';
import {FlatList} from 'react-native-gesture-handler';
import {SafeAreaView} from 'react-native-safe-area-context';
import GoSendCityItem from "../../components/GoSend/GoSendCityItem";

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

export default function GoSendPickUpCity({navigation: {navigate}}) {
  const renderItem = ({item}) => (
    <GoSendCityItem title={item.title} body={item.body} navigate={navigate} navigateTo="GoSendWhereToPickUp" />
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