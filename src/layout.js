import m from 'mithril';
import './layout.css';

const Nav = [
  {
    name: 'Top',
    route: '/top/1'
  },
  {
    name: 'New',
    route: '/new/1'
  },
  {
    name: 'Show',
    route: '/show/1'
  },
  {
    name: 'Ask',
    route: '/ask/1'
  },
  {
    name: 'Jobs',
    route: '/jobs/1'
  }
];

const Header = {
  view(vnode) {
    return [
      m('nav.nav.has-shadow', [
        m('.nav-left', [
          m('a.nav-item', {
            href: '/top/1',
            oncreate: m.route.link
          }, [
            m('img.logo', {
              src: './images/logo.svg',
              alt: 'Mithril Logo'
            })
          ])
        ]),
        m('.nav-toggle', [
          m('span', ''),
          m('span', ''),
          m('span', '')
        ]),
        m('.nav-right.nav-menu', [
          Nav.map(navItem => {
            return m('a.nav-item.is-tab', {
              href: navItem.route,
              class: m.route.get() === navItem.route ? 'is-active' : '',
              oncreate: m.route.link
            }, navItem.name);
          })
        ])
      ])
    ];
  }
};

const Layout = {
  view(vnode) {
    return m('.layout', [
      m(Header),
      m('section.section', vnode.children)
    ]);
  }
};

export default Layout;
