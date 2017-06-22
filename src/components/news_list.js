import m from 'mithril';

import NewsModel from '../models/news_model';
import NewsItem from './news_item';

const getIndex = (start, index, len) => index + len * (start - 1);

const NewsList = {
  view(vnode) {
    const start = vnode.attrs.start;
    const list = NewsModel.list;
    const len = NewsModel.list.length;

    return m('.news-list', [
      list.map((story, idx) => {
        return m(NewsItem, { story, idx: getIndex(start, idx, len) });
      })
    ]);
  }
};

export default NewsList;
