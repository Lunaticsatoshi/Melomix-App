import React from 'react';
import { View, StyleSheet } from 'react-native';
import { AudioWaveform, Dot, Headphones } from 'lucide-react-native';

import { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent } from '../../../../components/ui/card';
import { AvatarSet } from '../../../../components/Avatar';
import { Badge } from '../../../../components/ui/badge';
import { Text } from '../../../../components/ui/text';

const RoomCard = () => {
  const avatarArr = [
    {
      imageUri: 'https://github.com/shadcn.png',
      defaultSource: 'https://github.com/shadcn.png'
    },
    {
      imageUri: 'https://github.com/shadcn.png',
      defaultSource: 'https://github.com/shadcn.png'
    },
    {
      imageUri: 'https://github.com/shadcn.png',
      defaultSource: 'https://github.com/shadcn.png'
    }
  ];

  return (
    <Card className="bg-card dark:bg-card-dark flex flex-col justify-center border-card-border py-3 px-3 my-2">
      <CardHeader className="flex flex-row justify-between items-center py-2 mb-2">
        <View className="flex flex-row items-center">
          <AudioWaveform size={18} className="text-text-primary" />
          <CardTitle className="text-sm ml-2">Room Name</CardTitle>
        </View>
        <View className="flex flex-row items-center">
          <Dot size={28} />
          <Text className="dark:text-white font-bold">25k</Text>
        </View>
      </CardHeader>
      <CardContent className="flex flex-row justify-center items-center">
        <AvatarSet className='-mb-3' avatarArray={avatarArr} variant="sm" />
        <CardDescription numberOfLines={1} className="text-sm text-text-secondary ml-2">Utkarsh Agarwal, Satoshi, Shadcnquetrrtuqerubetrcbuyertb b7wrbt eurtynw yrtewn iryweiru </CardDescription>
      </CardContent>
      <CardFooter className="py-2 px-4">
        <Badge variant="secondary" className="flex flex-row justify-center items-center">
          <Headphones size={18} />
          <Text className='ml-2'>When i see you</Text>
        </Badge>
      </CardFooter>
    </Card>
  );
};

export default RoomCard;
