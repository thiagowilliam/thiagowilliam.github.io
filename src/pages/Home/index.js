import React from 'react';
import { Link } from 'react-scroll';

import * as S from './styles';

export default function Home() {
  return (
    <S.Container id="home">
      <h1>
        Hey, meu nome é <span>Thiago William</span>
      </h1>

      <p>
        Sou desenvolvedor Frontend e adoro codificar e proporcionar uma ótima
        experiência para usuários. Atualmente estou desenvolvendo com
        <strong>JavaScript</strong> ,<strong>ReactJS</strong>,
        <strong>React Native</strong> e<strong> Node.JS</strong>
      </p>

      <Link to="about" spy smooth offset={-70} duration={500}>
        Sobre mim
      </Link>
    </S.Container>
  );
}
