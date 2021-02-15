import React from 'react';

const Link = ({ to, children, className }) => {
  const onLinkClicked = (e) => {
    if (e.metaKey || e.ctrlKey) {
      return;
    }

    e.preventDefault();

    window.history.pushState({}, '', to);
    const navEvent = new PopStateEvent('popstate');

    window.dispatchEvent(navEvent);
  };
  return (
    <a href={to} onClick={onLinkClicked} className={className}>
      {children}
    </a>
  );
};

export default Link;
