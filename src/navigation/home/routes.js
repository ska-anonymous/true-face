import HomeScreen from '@/screens/home/HomeScreen';
import DetailsScreen from '@/screens/home/DetailsScreen';
import { ROUTES } from '../shared/routeNames';

// Keep a small registry, easy to extend later
export const HOME_ROUTES = [
  { name: ROUTES.HOME, component: HomeScreen, options: { title: 'Home' } },
  { name: ROUTES.DETAILS, component: DetailsScreen, options: { title: 'Details' } },
];
