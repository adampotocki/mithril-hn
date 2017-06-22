import m from 'mithril';

import NewsModel from '../models/news_model';
import NewsList from '../components/news_list';
import LoadingIcon from '../components/loading_icon';

const listTypes = {
  top: 'news',
  new: 'newest',
  show: 'show',
  ask: 'ask',
  jobs: 'jobs'
};

const NewsView = {
  oninit(vnode) {
    vnode.state.page = ~~vnode.attrs.key;
    vnode.state.name = vnode.attrs.name;

    NewsModel.load({
      listType: listTypes[vnode.state.name],
      page: vnode.state.page
    });
  },

  view(vnode) {
    const loading = NewsModel.loading.list;
    const name = vnode.state.name;
    const page = vnode.state.page;

    return loading
      ? m(LoadingIcon)
      : m('div.news', [
          !NewsModel.list.length
            ? m('span.has-text-centered', [
                m('p','No articles on this page')
              ])
            : [
              m(NewsList, { start: page }),
              m('br'),
              m('div.page.has-text-centered', [
                (page >= 2)
                  ? m('span', [
                        m('a', {
                          href: `/${name}/${page - 1}`,
                          oncreate: m.route.link
                        }, `Previous Page`),
                        m('span', ' | ')
                      ])
                  : '',
                m('span', [
                  m('a', {
                    href: `/${name}/${page + 1}`,
                    oncreate: m.route.link
                  }, 'Next Page')
                ])
              ])
            ]
        ]);
  }
};

export default NewsView;
