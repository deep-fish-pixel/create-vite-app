import { defineMock } from 'vite-plugin-mock-dev-server';
import user from './data/user';

export default defineMock([
  {
    url: '/api/user/login',
    delay: 1000,
    body: {
      resultCode: 'WL-0000',
      resultData: {
        account: 'mark2022',
      },
      resultDesc: '',
    },
  },
  {
    url: '/api/user/list',
    body: user,
  },
  {
    url: '/api/user/:userId',
    body({ params }) {
      const userId: string = params.userId;
      return {
        resultCode: 'WL-0000',
        resultData: user[userId],
        resultDesc: '',
      };
    },
  },
]);
