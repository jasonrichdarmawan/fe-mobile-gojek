import React from 'react';
import { Animated, Text, TouchableOpacity, View } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';

export default function MyTabBar({state, descriptors, navigation, position}) {
  return (
    <View
      style={{
        flexDirection: 'row',
        padding: 15,
        backgroundColor: 'deepskyblue',
      }}>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };
        // modify inputRange for custom behavior
        const inputRange = state.routes.map((_, i) => i);

        return (
          <TouchableOpacity
            key={index}
            accessibilityRole="button"
            accessibilityStates={isFocused ? ['selected'] : []}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{flex: 1, alignItems: 'center'}}>
            <Animated.View
              style={{
                flexDirection: 'row',
              }}>
              <AntDesign
                name={
                  label === 'Beranda'
                    ? 'home'
                    : label === 'Chat'
                    ? 'wechat'
                    : label === 'Profile' && 'user'
                }
                size={16}
                color="white"
                style={{marginHorizontal: 10}}
              />
              <Text style={{fontWeight: 'bold', color: 'white'}}>{label}</Text>
            </Animated.View>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}
