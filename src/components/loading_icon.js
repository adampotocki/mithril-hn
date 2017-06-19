import m from 'mithril';

const LoadingIcon = {
  view(vnode) {
    return m('.loading-icon.has-text-centered', [
      m('img.loading', { src: '/images/loading.svg' })
    ]);
  }
};

export default LoadingIcon;
