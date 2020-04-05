import React from 'react';

import Links from './content';

import * as S from './styles';

export default function Social() {
  return (
    <S.BoxSocial>
      {Links.map((link, i) => {
        return (
          <S.IconSocial
            key={i}
            href={link.url}
            target="blank"
            title={link.label}
          >
            {link.icon}
          </S.IconSocial>
        );
      })}
    </S.BoxSocial>
  );
}
