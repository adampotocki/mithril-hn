import m from 'mithril';

import { apiUrl } from '../utils';

const UserModel = {
  loading: {
    current: true
  },

  current: {},

  load(id) {
    this.loading.current = true;
    console.log(id)
    m.request({
      method: 'GET',
      url: `${apiUrl}/user/${id}`
    })
    .then(res => {
      this.current = res;
      this.loading.current = false;
    });
  }
};

export default UserModel;
