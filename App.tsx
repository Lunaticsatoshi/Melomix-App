/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { StatusBar } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { useColorScheme } from 'nativewind'

import { Colors } from 'react-native/Libraries/NewAppScreen';
import { NavigationContainer } from '@react-navigation/native';
// import {LINKING_PREFIX} from './utils/constants';

import AppNavigation from 'src/navigation/AppNavigation';

function App(): React.JSX.Element {
  const { colorScheme } = useColorScheme();
  const isDarkMode = colorScheme === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter
  };
 
  // const linking = {
  //   prefixes: [
  //     /* your linking prefixes */
  //     LINKING_PREFIX.URL_SCHEME,
  //   ],
  //   config: {
  //     /* configuration for matching screens with paths, might need later */
  //     screens: {},
  //   },
  // };

  return (
    <NavigationContainer>
      <SafeAreaProvider style={backgroundStyle}>
        <StatusBar
          barStyle={isDarkMode ? 'light-content' : 'dark-content'}
          backgroundColor={backgroundStyle.backgroundColor}
        />
        <AppNavigation />
      </SafeAreaProvider>
    </NavigationContainer>
  );
}

export default App;
