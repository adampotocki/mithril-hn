import m from 'mithril';

import { apiUrl } from '../utils';

const NewsModel = {
  loading: {
    list: true,
    current: true
  },

  list: [],

  current: {},

  load(attrs) {
    const page = attrs.key || 1;
    const listType = attrs.listType || 'news';
    const id = attrs.id || undefined;

    if (id) {
      this.loading.current = true;
      m.request({
        method: 'GET',
        url: `${apiUrl}/item/${id}`
      })
      .then(res => {
        this.current = res;
        this.loading.current = false;
      });
    } else {
      this.loading.list = true;
      m.request({
        method: 'GET',
        url: `${apiUrl}/${listType}?page=${page}`
      })
      .then(res => {
        this.list = res;
        this.loading.list = false;
      });
    }
  }
};

export default NewsModel;
