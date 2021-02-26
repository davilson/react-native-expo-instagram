import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { AntDesign, Ionicons, FontAwesome, Feather } from '@expo/vector-icons';

import instaLogo from '../assets/logo.png';

import Home from '../screens/Feed';
import ComingSoon from '../screens/ComingSoon';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

import { Avatar, Logo, Header, Action } from './styles';
import { ImageSourcePropType } from 'react-native';

function BottomTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      tabBarOptions={{
        showLabel: false,
        activeTintColor: '#272A27',
        inactiveTintColor: '#272A27',
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ color, size, focused }) => (
            <Ionicons
              name={focused ? 'ios-home-sharp' : 'ios-home-outline'}
              size={size}
              color={color}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={ComingSoon}
        options={{
          tabBarIcon: ({ color, size, focused }) => (
            <Ionicons
              name={focused ? 'search-sharp' : 'search-outline'}
              size={size}
              color={color}
            />
          ),
        }}
      />
      <Tab.Screen
        name="New"
        component={ComingSoon}
        options={{
          tabBarIcon: ({ color, size, focused }) => (
            <FontAwesome
              name={focused ? 'plus-square' : 'plus-square-o'}
              size={size}
              color={color}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Activities"
        component={ComingSoon}
        options={{
          tabBarLabel: 'Updates',
          tabBarIcon: ({ color, size, focused }) => (
            <AntDesign
              name={focused ? 'heart' : 'hearto'}
              size={size}
              color={color}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ComingSoon}
        options={{
          tabBarLabel: 'Updates',
          tabBarIcon: () => (
            <Avatar
              source={{ uri: 'https://picsum.photos/id/1005/200/200' }}
              resizeMode="cover"
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

function StackRoute() {
  return (
    <Stack.Navigator
      headerMode="screen"
      screenOptions={{
        header: () => (
          <Header>
            <Logo
              resizeMode="contain"
              source={instaLogo as ImageSourcePropType}
            />
            <Action onPress={() => {}}>
              <Feather name="send" size={24} color="black" />
            </Action>
          </Header>
        ),
      }}
    >
      <Stack.Screen name="Home" component={BottomTabs} />
    </Stack.Navigator>
  );
}

export default StackRoute;
