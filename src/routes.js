import m from 'mithril';

import Layout from './layout';
import NewsView from './views/news_view';
import ItemView from './views/item_view';
import UserView from './views/user_view';

export default {
  '/top/:key': {
    view: vnode => {
      vnode.attrs.name = 'top';
      return m(Layout, m(NewsView, vnode.attrs));
    }
  },
  '/new/:key': {
    view: vnode => {
      vnode.attrs.name = 'new';
      return m(Layout, m(NewsView, vnode.attrs));
    }
  },
  '/show/:key': {
    view: vnode => {
      vnode.attrs.name = 'show';
      return m(Layout, m(NewsView, vnode.attrs));
    }
  },
  '/ask/:key': {
    view: vnode => {
      vnode.attrs.name = 'ask';
      return m(Layout, m(NewsView, vnode.attrs));
    }
  },
  '/jobs/:key': {
    view: vnode => {
      vnode.attrs.name = 'jobs';
      return m(Layout, m(NewsView, vnode.attrs));
    }
  },
  '/item/:id': {
    view: vnode => m(Layout, m(ItemView, vnode.attrs))
  },
  '/user/:name': {
    view: vnode => m(Layout, m(UserView, vnode.attrs))
  }
};
