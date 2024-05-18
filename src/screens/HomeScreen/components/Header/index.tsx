import React from 'react';
import { View, Text } from 'react-native';
import { useColorScheme } from 'nativewind';
import { Bell, MessageCircle, Search } from 'lucide-react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { BlurView } from '@react-native-community/blur';

import { getSVGColor } from 'utils/helpers';

const Header = () => {
  const { top } = useSafeAreaInsets();
  const { colorScheme } = useColorScheme();
  return (
    <View className="w-full px-7 pb-6 flex flex-row justify-between items-center bg-background dark:bg-backgroundDark" style={{ paddingTop: top }}>
      <View className="flex flex-row" id="logo">
        <Text className="text-2xl dark:text-white font-bold">MeloMix</Text>
      </View>
      <View className="flex flex-row items-center gap-3">
        <Search color={getSVGColor(colorScheme)} />
        <Bell color={getSVGColor(colorScheme)} />
        <MessageCircle color={getSVGColor(colorScheme)} />
      </View>
    </View>
  );
};

export default Header;
