import React from 'react';
import Linkify from 'react-linkify';

const LinkifyComponent = ({ children }) => {
  const componentDecorator = (href, text, key) => (
    <a
      href={href}
      key={key}
      target="_blank"
      style={{
        marginLeft: '3px',
        color: 'inherit !important',
        textDecoration: 'underline',
      }}
    >
      {console.log({ href }, { text }, { key })}
      {text}
    </a>
  );

  return (
    <Linkify
      properties={{ target: '_blank' }}
      componentDecorator={componentDecorator}
    >
      {children}
    </Linkify>
  );
};

export default LinkifyComponent;
