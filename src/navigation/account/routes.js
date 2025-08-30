import AccountScreen from '@screens/account/AccountScreen';
import SettingsScreen from '@screens/account/SettingsScreen';
import { ROUTES } from '../shared/routeNames';

export const ACCOUNT_ROUTES = [
  { name: ROUTES.ACCOUNT, component: AccountScreen, options: { title: 'Account' } },
  { name: ROUTES.SETTINGS, component: SettingsScreen, options: { title: 'Settings' } },
];
