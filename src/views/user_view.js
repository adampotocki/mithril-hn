import m from 'mithril';

import UserModel from '../models/user_model';
import LoadingIcon from '../components/loading_icon';

const UserView = {
  oninit(vnode) {
    UserModel.load(vnode.attrs.name);
  },
  view(vnode) {
    const user = UserModel.current || undefined;
    const loading = UserModel.loading.current;

    if (!user) return 'No user';

    return loading
      ? m(LoadingIcon)
      : [
        m('section.user', [
          m('h2', `User: ${user.id}`),
          m('div', `Created: ${user.created}`),
          m('div', `Karma: ${user.karma}`),
          m('div', m.trust(user.about)),
          m('div', [
            m('a', {
              href: `https://news.ycombinator.com/submitted?id=${user.id}`
            }, 'submissions'),
            m('span', ' | '),
            m('a', {
              href: `https://news.ycombinator.com/threads?id=${user.id}`
            }, 'comments'),
            m('span', ' | '),
            m('a', {
              href: `https://news.ycombinator.com/favorites?id=${user.id}`
            }, 'favorites')
          ])
        ])
    ];
  }
};

export default UserView;
