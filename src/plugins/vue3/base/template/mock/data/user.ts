import { UserModel } from '../../src/api/model/userModel';

export default {
  mark2022: {
    account: 'mark2022',
    username: 'mark',
    age: 20,
    email: '123@11.com',
    name: 'mark',
    introduction: 'string',
    phone: '13733333333',
    address: 'string',
    roles: [],
  },
  john996: {
    account: 'john996',
    username: 'john',
    age: 30,
    email: '123@11.com',
    name: 'mark',
    introduction: 'string',
    phone: '13733333333',
    address: 'string',
    roles: [],
  },
} as Record<string, UserModel>;
