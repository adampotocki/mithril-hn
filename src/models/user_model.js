import m from 'mithril';

import { apiUrl } from '../utils';

const UserModel = {
  loading: {
    current: true
  },

  current: {},

  load(id) {
    UserModel.loading.current = true;
    m.request({
      method: 'GET',
      url: `${apiUrl}/user/${id}`
    })
    .then(res => {
      UserModel.current = res;
      UserModel.loading.current = false;
    });
  }
};

export default UserModel;
