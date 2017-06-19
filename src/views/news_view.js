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
    page = Number(page);

    return loading
      ? m(LoadingIcon)
      : m('div.news', [
          m(NewsList, { start: page }),
          m('br'),
          m('div.page.has-text-centered', [
            (page >= 2) ? m('span', [
                  m('a', {
                    href: `/${name}/${page - 1}`,
                    oncreate: m.route.link
                  }, `Previous Page`),
                  m('span', ' | ')
                ]) : '',
            m('span', [
              m('a', {
                href: `/${name}/${page + 1}`,
                oncreate: m.route.link
              }, 'Next Page')
            ])
          ])
        ]);
  }
};

export default NewsView;
