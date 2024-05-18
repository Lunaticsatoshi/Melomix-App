import { StyleProp, ViewStyle } from "react-native";

export type Variant = 'xl' | 'lg' | 'lmd' | 'md' | 'sm';

export type AvatarProps = {
  imageUri: string;
  defaultSource: string;
  variant: Variant;
  className?: string;
  margins?: {
    marginTop?: number;
    marginBottom?: number;
    marginLeft?: number;
    marginRight?: number;
  }
};

export type AvatarSetProps = {
  avatarArray: Pick<AvatarProps, 'imageUri' | 'defaultSource'>[];
  variant: Variant;
  className?: string;
}