import React from 'react';

import * as S from './styles';

import BoxSocial from '../../components/Social';

export default function Contact() {
  return (
    <S.Container id="contact">
      <S.Poligono />
      <S.Centraliza>
        <S.TituloContact>
          Gostaria de <span>contar comigo</span> em sua equipe?
        </S.TituloContact>

        <S.BoxDetails>
          <h2>Detalhes para contato</h2>

          <S.InfoDetails>
            <h3>Email</h3>
            <p>Thiago.will.silva@gmail.com</p>
          </S.InfoDetails>

          <S.InfoDetails>
            <h3>Telefone</h3>
            <p>+55 61 993834848</p>
          </S.InfoDetails>

          <BoxSocial />
        </S.BoxDetails>
      </S.Centraliza>

      <S.Footer>
        <p>ReactJS © Copyright 2020</p>
        <S.WrapperHeart>
          <S.PulsingHeart />
        </S.WrapperHeart>
      </S.Footer>
    </S.Container>
  );
}
