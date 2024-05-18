import React from 'react';
import { Pressable, Text, View, ScrollView, StyleSheet } from 'react-native';
import { styled, useColorScheme as useTailwindColorScheme } from 'nativewind';

import RoomCard from './components/RoomCards';

const HomeScreen = () => {
  const { colorScheme, toggleColorScheme } = useTailwindColorScheme();
  return (
    <View className="bg-background dark:bg-backgroundDark h-full">
      {/* <Text className="text-4xl dark:text-red-700 font-bold">For You</Text> */}
      <ScrollView className="flex px-6">
      <Pressable onPress={toggleColorScheme} className=" dark:bg-slate-800 mb-9">
        <Text selectable={false} className="dark:text-white">
          {`Try clicking me! ${colorScheme === 'dark' ? '🌙' : '🌞'}`}
        </Text>
      </Pressable>
        {'abcdefghijklmopq'.split('').map((p, i) => (
          <RoomCard key={i} />
        ))}
      </ScrollView>
    </View>
  );
};

export default HomeScreen;
