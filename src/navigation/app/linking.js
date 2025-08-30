import { ROUTES } from '../shared/routeNames';

export default {
  prefixes: ['jobportal://', 'https://jobportal.app'],
  config: {
    screens: {
      [ROUTES.TABS]: {
        screens: {
          [ROUTES.HOME_STACK]: {
            screens: {
              [ROUTES.HOME]: '',
              [ROUTES.DETAILS]: 'details/:id?',
            },
          },
          [ROUTES.ACCOUNT_STACK]: {
            screens: {
              [ROUTES.ACCOUNT]: 'account',
              [ROUTES.SETTINGS]: 'account/settings',
            },
          },
        },
      },
    },
  },
};
