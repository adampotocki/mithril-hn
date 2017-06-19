import m from 'mithril';

const childComments = (comments, onclick) => {
  if (comments.length > 0) {
    return m('div.hide', [
      m('span.hide', { onclick }, '[-]'),
      m('ul.comment-list', [
        comments.map(comment => {
          return m(CommentItem, {
            comment: comment,
            isChild: true
          });
        })
      ])
    ])
  }
};

const showMore = (comment, onclick) => {
  return m('span.show-more', {
    onclick
  }, `[+] ${comment.comments.length} replies`);
};

const CommentItem = {
  showComments: true,

  toggleShowComments() {
    this.showComments = !this.showComments;
  },

  view(vnode) {
    const comment = vnode.attrs.comment;
    const isChild = vnode.attrs.isChild;

    return m('section.section', [
      m('header', [
        m('a', {
          href: `/user/${comment.user}`,
          oncreate: m.route.link
        }, comment.user),
        m('span', ` ${comment.time_ago}`)
      ]),
      m('div.content', m.trust(comment.content)),
      this.showComments
        ? childComments(comment.comments, () => this.toggleShowComments())
        : showMore(comment, () => this.toggleShowComments())
    ]);
  }
};

export default CommentItem;
