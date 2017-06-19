import m from 'mithril';

import NewsModel from '../models/news_model';
import NewsList from '../components/news_list';
import LoadingIcon from '../components/loading_icon';

const pageToListType = {
  top: 'news',
  new: 'newest',
  jobs: 'jobs',
  ask: 'ask',
  show: 'show'
};

const NewsView = {
  oninit(vnode) {
    const { key, name } = vnode.attrs;
    vnode.state.page = key;
    vnode.state.name = name;

    let listType = pageToListType[name];
    NewsModel.load({ listType, key });
  },

  view(vnode) {
    let loading = NewsModel.loading.list;
    let { name, page } = vnode.state;

    return loading
      ? m(LoadingIcon)
      : m('div.news', [
          m(NewsList, { start: page }),
          m('div.pager', [
            m('a', {
              href: `/${name}/${++page}`,
              oncreate: m.route.link
            }, 'More...')
          ])
        ]);
  }
};

export default NewsView;
