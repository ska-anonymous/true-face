import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ACCOUNT_ROUTES } from './routes';

const AccountStack = createNativeStackNavigator({
  screens: ACCOUNT_ROUTES.reduce((acc, r) => {
    acc[r.name] = { screen: r.component, options: r.options };
    return acc;
  }, {}),
  screenOptions: {
    headerBackTitleVisible: false,
    headerTitleAlign: 'center',
  },
});

export default AccountStack;
