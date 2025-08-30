import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeStack from '../home/HomeNavigator';
import { ROUTES } from '../shared/routeNames';
import MaterialDesignIcons from '@react-native-vector-icons/material-design-icons';
import AccountStack from '../account/AccountNavigator';

const TabNavigator = createBottomTabNavigator({
    // You can rely on theme-driven defaults; no need to specify colors here
    screenOptions: {
        headerShown: false, // each nested stack controls its own headers
    },
    screens: {
        [ROUTES.HOME_STACK]: {
            screen: HomeStack,
            options: {
                title: 'Home',
                tabBarIcon: ({ color, size }) => (
                    <MaterialDesignIcons name="home-outline" color={color} size={size ?? 24} />
                ),
            },
        },
        [ROUTES.ACCOUNT_STACK]: {
            screen: AccountStack,
            options: {
                title: 'Account',
                tabBarIcon: ({ color, size }) => (
                    <MaterialDesignIcons name="account-outline" color={color} size={size ?? 24} />
                ),
            },
        },
    },
});

export default TabNavigator;
