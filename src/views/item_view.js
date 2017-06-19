import m from 'mithril';

import NewsModel from '../models/news_model';
import CommentItem from '../components/comment_item';
import LoadingIcon from '../components/loading_icon';

const comments = comments => {
  return (comments.length > 0)
    ? comments.map(comment => m(CommentItem, { comment }))
    : m('div.no-comments', 'No comments yet');
};

const ItemView = {
  oninit(vnode) {
    NewsModel.load({ id: vnode.attrs.id });
  },

  view(vnode) {
    const story = NewsModel.current;
    const loading = NewsModel.loading.current;

    return loading
      ? m(LoadingIcon)
      : m('article.article', [
          m('a', {
            href: story.url
          }, story.title),
          m('div.detail', [
            m('span', `${story.points} point by `),
            m('a', {
              href: `/user/${story.user}`,
              oncreate: m.route.link
            }, story.user),
            m('span', ` ${story.time_ago} | `),
            m('span', `${story.comments_count} comments`)
          ]),
          m('div.comment', story.comments && comments(story.comments))
        ]);
  }
};

export default ItemView;
