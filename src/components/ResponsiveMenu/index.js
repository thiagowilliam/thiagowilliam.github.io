import React from 'react';

import { Link } from 'react-scroll';

import { slide as Menu } from 'react-burger-menu';

import LinksMenu from '../Header/content';

import * as S from './styles';

export default props => {
  return (
    <S.ResponsiveMenu>
      <Menu>
        {LinksMenu.map((itemLink, i) => (
          <Link
            key={i}
            className="menu-item"
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
        ))}
        <a
          className="menu-item"
          href="https://blog.thiagowilliam.com.br/"
          target="blank"
          title="Meu Blog"
          alt="Meu blog"
        >
          Blog
        </a>
      </Menu>
    </S.ResponsiveMenu>
  );
};
