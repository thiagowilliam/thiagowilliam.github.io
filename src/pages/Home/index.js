import React from 'react';

import * as S from './styles';

export default function Home() {
  return (
    <S.Container id="home">
      <h1>
        Hi, I'm <span>Thiago William</span>
      </h1>

      <p>
        I'm Frontend developer and I love to code and provide a great experience
        for users. I'm currently developing with <strong>JavaScript</strong> ,
        <strong>ReactJS</strong> , <strong>React Native</strong> and
        <strong> Node.JS</strong>
      </p>

      <button>More an me</button>
    </S.Container>
  );
}
