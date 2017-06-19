import m from 'mithril';

import NewsModel from '../models/news_model';
import NewsItem from './news_item';

const getIndex = (start, index) => index + 30 * (start - 1);

const NewsList = {
  view(vnode) {
    const start = Number(vnode.attrs.start);
    const list = NewsModel.list;

    return m('.news-list', [
      list.map((story, idx) => {
        return m(NewsItem, { story, idx: getIndex(start, idx) });
      })
    ]);
  }
};

export default NewsList;
