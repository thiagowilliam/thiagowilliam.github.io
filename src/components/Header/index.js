import React from 'react';

import { Link } from 'react-scroll';

import BoxSocial from '../Social';
import LinksMenu from './content';

import * as S from './styles';

export default function Header() {
  return (
    <S.Container>
      <S.Centraliza>
        <S.boxMenu>
          <S.List>
            {LinksMenu.map((itemLink, i) => (
              <S.ItemList key={i}>
                <Link
                  activeClass="active"
                  to={itemLink.to}
                  spy
                  smooth
                  offset={-70}
                  duration={500}
                  alt={itemLink.alt}
                  title={itemLink.alt}
                >
                  {itemLink.label}
                </Link>
              </S.ItemList>
            ))}
          </S.List>
        </S.boxMenu>

        <BoxSocial />
      </S.Centraliza>
    </S.Container>
  );
}
