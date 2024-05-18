import React from 'react';
import { Platform, View, StyleSheet } from 'react-native';
import { Home, Radio, DiamondPlus, Activity } from 'lucide-react-native';
import { useColorScheme } from 'nativewind';
import { BlurView } from '@react-native-community/blur';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Colors } from 'utils/colors';
import { getSVGColor, getSVGActiveColor } from 'utils/helpers';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

import { HomeScreen } from 'screens/HomeScreen';
import { ProfileScreen } from 'screens/ProfileScreen';
import { FavoriteScreen } from 'screens/FavoriteScreen';
import { CreateRoomScreen } from 'screens/CreateRoomScreen';
import { ScheduleScreen } from 'screens/ScheduleScreen';

import { Avatar } from 'components/Avatar';
import Header from 'screens/HomeScreen/components/Header';

const HomeScreens = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Main" component={HomeScreen} options={{ header: () => <Header /> }} />
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
  const { colorScheme } = useColorScheme();
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => {
          let Icon: any;
          if (route.name === 'Home') {
            Icon = focused ? (
              <Home fill={Colors.primary} color={getSVGActiveColor(colorScheme)} />
            ) : (
              <Home color={getSVGColor(colorScheme)} />
            );
          } else if (route.name === 'Favorite') {
            Icon = focused ? (
              <Radio fill={Colors.primary} color={Colors.primary} />
            ) : (
              <Radio color={getSVGColor(colorScheme)} />
            );
          } else if (route.name === 'AddRoom') {
            Icon = focused ? (
              <DiamondPlus height={26} width={26} fill={Colors.primary} color={getSVGActiveColor(colorScheme)} />
            ) : (
              <DiamondPlus height={26} width={26} color={getSVGColor(colorScheme)} />
            );
          } else if (route.name === 'Schedule') {
            Icon = focused ? (
              <Activity fill={Colors.primary} color={Colors.primary} />
            ) : (
              <Activity color={getSVGColor(colorScheme)} />
            );
          } else if (route.name === 'Profile') {
            Icon = (
              <Avatar
                variant="md"
                imageUri="https://github.com/mrzachnugent.png"
                defaultSource="https://i.pravatar.cc/300"
              />
            );
          }
          return <>{Icon}</>;
        },
        tabBarActiveTintColor: Colors.red400,
        tabBarInactiveTintColor: Colors.neutral900,
        tabBarLabelStyle: { fontSize: 12 },
        headerShown: false,
        tabBarShowLabel: false,
        tabBarBackground: () => (
          <View className="bg-none absolute bottom-0 h-full w-full">
            <BlurView style={{ height: 100 }} blurType={colorScheme === 'dark' ? 'dark' : 'regular'} blurAmount={10}></BlurView>
          </View>
        ),
        tabBarStyle: {
          paddingVertical: 8,
          paddingHorizontal: 16,
          borderTopWidth: 0,
          position: 'absolute',
          bottom: 0,
          // backgroundColor: colorScheme === 'dark' ? Colors.backgroundDark : Colors.background
          backgroundColor: 'transparent'
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
