import m from 'mithril';

const NewsItem = {
  view(vnode) {
    const story = vnode.attrs.story;
    const idx = vnode.attrs.idx;

    return m('div.box', [
      m('.media', [
        m('.media-left', [
          m('.index', idx + 1)
        ]),
        m('.media-content', [
          m('.story', { story }, [
            m(`a[href=${story.url}]`, story.title),
            m('.detail', [
              m('span', `${story.points} points by `),
              m('a', {
                href: `/user/${story.user}`,
                oncreate: m.route.link
              }, story.user),
              m('span', ` ${story.time_ago} | `),
              m('a', {
                href: `/item/${story.id}`,
                oncreate: m.route.link
              }, `${story.comments_count} comments`)
            ])
          ])
        ])
      ])

    ]);
  }
};

export default NewsItem;
