import React from 'react';
import { createStaticNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import TabNavigator from '../tabs/TabNavigator';
import { defaultScreenOptions } from './options';
import linking from './linking';
import { ROUTES } from '../shared/routeNames';
import useUI from '@/hooks/useUI';

// Root uses the static stack and mounts the Tab host.
// This remains stable as you add more feature stacks to the tabs later.
const RootStack = createNativeStackNavigator({
  screens: {
    [ROUTES.TABS]: {
      screen: TabNavigator,
      options: { headerShown: false },
    },
  },
  screenOptions: defaultScreenOptions,
});

const Navigation = createStaticNavigation(RootStack, { linking });

export default function AppNavigator() {
  const { theme } = useUI()
  return <Navigation theme={theme} />;
}
