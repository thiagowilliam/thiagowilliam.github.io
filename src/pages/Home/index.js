import React from 'react';
import { Link } from 'react-scroll';

import * as S from './styles';

export default function Home() {
  return (
    <S.Container id="home">
      <h1 className="typing-animation">
        <span>Olá, me chamo </span>
        Thiago William =)
      </h1>

      <p>
        Sou desenvolvedor um Frontend. Atualmente estou desenvolvendo com a
        stack em
        <strong> JavaScript</strong> , utilizando a biblioteca
        <strong> ReactJS</strong> para desenvolvimento web e
        <strong> React Native</strong> para desenvolvimento mobile. Também me
        aventuro um pouco com<strong> Node.JS</strong>
      </p>

      <Link to="about" spy smooth offset={-70} duration={500}>
        Sobre mim
      </Link>
    </S.Container>
  );
}
