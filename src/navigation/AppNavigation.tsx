import React from 'react';
import { Platform } from 'react-native';
import { Home, Heart, Plus, CalendarSearch, Bell, User, MessageCircle, Search } from 'lucide-react-native'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Colors } from '../utils/colors';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

import { HomeScreen } from '../screens/HomeScreen';
import { ProfileScreen } from '../screens/ProfileScreen';
import { FavoriteScreen } from '../screens/FavoriteScreen';
import { CreateRoomScreen } from '../screens/CreateRoomScreen';
import { ScheduleScreen } from '../screens/ScheduleScreen';

const HomeScreens = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Main" component={HomeScreen} options={{ headerShown: false }} />
      <Stack.Screen
        name="FavoriteScreen"
        component={FavoriteScreen}
        options={{ headerShown: false, animation: 'slide_from_bottom' }}
      />
      <Stack.Screen
        name="CreateRoomScreen"
        component={CreateRoomScreen}
        options={{ headerShown: false, animation: 'slide_from_bottom' }}
      />
      <Stack.Screen
        name="ScheduleScreen"
        component={ScheduleScreen}
        options={{ headerShown: false, animation: 'slide_from_bottom' }}
      />
      <Stack.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{ headerShown: false, animation: 'slide_from_bottom' }}
      />
    </Stack.Navigator>
  );
};

const TabNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let Icon: any;
          if (route.name === 'Home') {
            Icon = focused ? <Home fill={Colors.red400} /> : <Home color="black" />;
          } else if (route.name === 'Favorite') {
            Icon = focused ? <Heart fill={Colors.red400} /> : <Heart color="black" />;
          } else if (route.name === 'AddRoom') {
            Icon = focused ? <Plus height={26} width={26} fill={Colors.red400} /> : <Plus height={26} width={26} color="black" />;
          } else if (route.name === 'Schedule') {
            Icon = focused ? <CalendarSearch fill={Colors.red400} /> : <CalendarSearch color="black" />;
          } else if (route.name === 'Profile') {
            Icon = focused ? <User fill={Colors.red400} /> : <User color="black" />;
          }
          return <>{Icon}</>;
        },
        tabBarActiveTintColor: Colors.red400,
        tabBarInactiveTintColor: Colors.neutral900,
        tabBarLabelStyle: { fontSize: 12 },
        headerShown: false,
        tabBarStyle: {
          paddingVertical: 8,
          paddingHorizontal: 16,
          borderTopWidth: 1,
          borderTopColor: Colors.cream100
        },
        tabBarItemStyle: {
          paddingHorizontal: 8
        }
      })}>
      <Tab.Screen
        name="Home"
        component={HomeScreens}
        options={{ headerShown: false, tabBarHideOnKeyboard: Platform.OS === 'android' }}
      />
      <Tab.Screen name="Favorite" component={FavoriteScreen} options={{ headerShown: false }} />
      <Tab.Screen
        name="AddRoom"
        component={CreateRoomScreen}
        options={{ headerShown: false }}
        initialParams={{ showTopBar: true, topBarIcon: null, navigatedFromBottomTab: true }}
      />
      <Tab.Screen name="Schedule" component={ScheduleScreen} options={{ headerShown: false }} />
      <Tab.Screen name="Profile" component={ProfileScreen} options={{ headerShown: false }} />
    </Tab.Navigator>
  );
};

const AppNavigation = () => {
  return (
    <Stack.Navigator initialRouteName={'App'}>
      <Stack.Screen name="App" component={TabNavigation} options={{ headerShown: false }} />
      <Stack.Screen
        name="FavoriteScreen"
        component={FavoriteScreen}
        options={{ headerShown: false, animation: 'slide_from_bottom' }}
      />
      <Stack.Screen
        name="CreateRoomScreen"
        component={CreateRoomScreen}
        options={{ headerShown: false, animation: 'slide_from_bottom' }}
      />
      <Stack.Screen
        name="ScheduleScreen"
        component={ScheduleScreen}
        options={{ headerShown: false, animation: 'slide_from_bottom' }}
      />
      <Stack.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{ headerShown: false, animation: 'slide_from_bottom' }}
      />
    </Stack.Navigator>
  );
};

export default AppNavigation;
