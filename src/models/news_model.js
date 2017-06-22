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
    const page = attrs.page || 1;
    const listType = attrs.listType || 'news';
    const id = attrs.id || undefined;

    if (id) {
      NewsModel.loading.current = true;
      m.request({
        method: 'GET',
        url: `${apiUrl}/item/${id}`
      })
      .then(res => {
        NewsModel.current = res;
        NewsModel.loading.current = false;
      });
    } else {
      NewsModel.loading.list = true;
      m.request({
        method: 'GET',
        url: `${apiUrl}/${listType}?page=${page}`
      })
      .then(res => {
        NewsModel.list = res;
        NewsModel.loading.list = false;
      });
    }
  }
};

export default NewsModel;
