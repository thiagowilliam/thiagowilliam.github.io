import React from 'react';
import { FaGithubAlt, FaLinkedinIn } from 'react-icons/fa';

import { Link } from 'react-scroll';

import * as S from './styles';

export default function Header() {
  return (
    <S.Container>
      <S.Centraliza>
        <S.boxMenu>
          <S.List>
            <S.ItemList>
              <Link
                activeClass="active"
                to="home"
                spy
                smooth
                offset={-70}
                duration={500}
              >
                Home
              </Link>
            </S.ItemList>
            <S.ItemList>
              <Link to="about" spy smooth offset={-70} duration={500}>
                About
              </Link>
            </S.ItemList>
            {/* <S.ItemList>
              <Link to="portfolio" spy smooth offset={-70} duration={500}>
                Portfolio
              </Link>
            </S.ItemList>
            <S.ItemList>
              <Link to="blog" spy smooth offset={-70} duration={500}>
                Blog
              </Link>
            </S.ItemList> */}
            <S.ItemList>
              <Link to="contact" spy smooth offset={-70} duration={500}>
                Contact
              </Link>
            </S.ItemList>
          </S.List>
        </S.boxMenu>

        <S.BoxSocial>
          <S.IconSocial href="https://github.com/thiagowilliam" target="blank">
            <FaGithubAlt size={22} color="#FFFFFF" />
          </S.IconSocial>
          <S.IconSocial
            href="https://www.linkedin.com/in/thiago-william/"
            target="blank"
          >
            <FaLinkedinIn size={22} color="#FFFFFF" />
          </S.IconSocial>
        </S.BoxSocial>
      </S.Centraliza>
    </S.Container>
  );
}
