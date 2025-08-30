import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HOME_ROUTES } from './routes';

// Static API-based stack using your array registry
const HomeStack = createNativeStackNavigator({
  screens: HOME_ROUTES.reduce((acc, r) => {
    acc[r.name] = { screen: r.component, options: r.options };
    return acc;
  }, {}),
  screenOptions: {
    headerBackTitleVisible: false,
    headerTitleAlign: 'center',
  },
});

export default HomeStack;
