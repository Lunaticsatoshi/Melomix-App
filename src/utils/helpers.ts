import { type ClassValue, clsx } from 'clsx';
import { PressableStateCallbackType } from 'react-native';
import { twMerge } from 'tailwind-merge';

import { Colors } from './colors';
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
export function isTextChildren(children: React.ReactNode | ((state: PressableStateCallbackType) => React.ReactNode)) {
  return Array.isArray(children) ? children.every(child => typeof child === 'string') : typeof children === 'string';
}

export const getSVGColor = (colorScheme: string) => {
  if (colorScheme === 'dark') {
    return Colors.white;
  }
  return Colors.black;
}

export const getSVGActiveColor = (colorScheme: string) => {
  if (colorScheme === 'dark') {
    return Colors.black;
  }
  return Colors.white;
}