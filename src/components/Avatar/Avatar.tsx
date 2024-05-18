import React from 'react';
import { View, Image, Text } from 'react-native';

import { Avatar, AvatarFallback, AvatarImage } from 'components/ui/avatar';
import { cn } from 'utils/helpers';

import { AvatarSetProps, Variant, AvatarProps } from './types';

const FallbackAvatar = () => {
  return (
    <View className="flex h-full w-full items-center justify-center rounded-full bg-muted">
      <Text>FallbackAvatar</Text>
    </View>
  );
};

const getVariantSize = (variant: Variant): number => {
  switch (variant) {
    case 'xl':
      return 80;
    case 'lg':
      return 50;
    case 'lmd':
      return 40;
    case 'md':
      return 30;
    case 'sm':
      return 20;
  }
};
export const AvatarSet = ({ avatarArray, variant, className }: AvatarSetProps) => {
  if (avatarArray.length === 1) {
    return (
      <CustomAvatar imageUri={avatarArray[0].imageUri} defaultSource={avatarArray[0].defaultSource} variant={variant} />
    );
  }

  return (
    <View className={cn('flex flex-row-reverse gap-2 items-center justify-center', className)}>
      {avatarArray.map((avatar, index) => (
        <CustomAvatar
          key={index}
          imageUri={avatar.imageUri}
          defaultSource={avatar.defaultSource}
          variant={variant}
          className={`w-5 h-5 rounded-full ${
            index === avatarArray.length - 1 ? '' : '-ml-4'
          } shadow-md border-2 border-card-border`}
          margins={{ marginLeft: index === avatarArray.length - 1 ? 0 : -8 }}
        />
      ))}
    </View>
  );
};
const CustomAvatar = ({ imageUri, defaultSource, variant, className, margins }: AvatarProps) => {
  return (
    <Avatar
      alt="avatar"
      className={cn('w-5 h-5 rounded-full shadow-mdl', className)}
      style={{ height: getVariantSize(variant), width: getVariantSize(variant), ...margins }}>
      <AvatarImage source={{ uri: imageUri }} defaultSource={{ uri: defaultSource }} />
      <AvatarFallback>
        <FallbackAvatar />
      </AvatarFallback>
    </Avatar>
  );
};

export default CustomAvatar;
