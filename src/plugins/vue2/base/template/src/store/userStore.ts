import { defineStore } from 'pinia';
import { login, getUser } from '@/api/client/userClient';
import type { UserModel } from '@/api/model/userModel';

const initUser = () =>
  ({
    account: '',
    username: '',
    age: 0,
    email: '',
    name: '',
    introduction: '',
    phone: '',
    address: '',
    roles: [],
  }) as UserModel;

const userStore = defineStore({
  id: 'user',
  state: () => ({ user: initUser() }),
  getters: {
    getAccount: (state) => state.user.account,
    getUser: (state) => state.user,
    getRoles: (state) => state.user.roles,
  },
  actions: {
    login() {
      return login({
        username: 'test',
        password: '123',
      }).then((data) => {
        this.user.account = data.data.resultData.account;
        console.log(`${this.user.account}用户登录成功`);
      });
    },
    getUserInfo() {
      return getUser(this.user.account).then((data) => {
        this.user = data.data.resultData;
        console.log(`${this.user.account}用户登录成功`);
      });
    },
    reset() {
      this.user = initUser();
    },
  },
});

export default userStore;
