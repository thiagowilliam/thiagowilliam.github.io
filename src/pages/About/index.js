import React from 'react';

import { Link } from 'react-scroll';

import * as S from './styles';

import ImgPhotoPerfil from '../../assets/images/logo-tw.svg';

import ImgTeamPLayer from '../../assets/images/team-player.svg';
import ImgResponsive from '../../assets/images/responsive.svg';
import ImgMobile from '../../assets/images/mobile.svg';
import ImgInteractive from '../../assets/images/interactive.svg';

import IconSVG from '../../assets/images/icon-svg.svg';
import iconHTML5 from '../../assets/images/icon-html5.svg';
import iconCSS3 from '../../assets/images/icon-css3.svg';
import iconJavascript from '../../assets/images/icon-javascript.svg';
import iconReactJs from '../../assets/images/icon-reactjs.svg';
import iconGit from '../../assets/images/icon-git.svg';
import IconJest from '../../assets/images/icon-jest.svg';

import MyCV from '../../assets/cv/Thiago-William-CV-pt-br.pdf';

export default function About() {
  return (
    <S.Container id="about">
      <S.TituloPage>
        <span>Sobre mim</span>
      </S.TituloPage>

      <S.WrapperCapacity>
        <S.Capacity>
          <img src={ImgTeamPLayer} alt="Icon Team Player" title="Tem Player" />
          <h2>Trabalho em equipe</h2>
          <p>
            Mais do que amigos, tento me encaixar na equipe em busca de um
            objetivo comum
          </p>
        </S.Capacity>

        <S.Capacity>
          <img src={ImgResponsive} alt="Icon Team Player" title="Tem Player" />
          <h2>Sites Resposivos</h2>
          <p>Crio páginas Web que detectam o tamanho da tela do visitante</p>
        </S.Capacity>

        <S.Capacity>
          <img src={ImgMobile} alt="Icon Team Player" title="Tem Player" />
          <h2>Mobile</h2>
          <p>
            Animado com a ideia de criar aplicativos para facilitar a vida dos
            usuários
          </p>
        </S.Capacity>

        <S.Capacity>
          <img src={ImgInteractive} alt="Icon Team Player" title="Tem Player" />
          <h2>Boas práticas</h2>
          <p>Código limpo e sempre ciente da interatividade do aplicativo</p>
        </S.Capacity>
      </S.WrapperCapacity>

      <S.BoxSkills>
        <S.PhotoPerfil>
          <img
            src={ImgPhotoPerfil}
            alt="Thiago William"
            title="Thiago William"
          />
        </S.PhotoPerfil>

        <S.WrapperSkills>
          <S.TitleSkills>
            Principais <span>Abilidades</span>
          </S.TitleSkills>

          <S.ListSkill>
            <S.ItemSkill>
              <img src={iconHTML5} alt="" />
              <p>HTML</p>
            </S.ItemSkill>

            <S.ItemSkill>
              <img src={iconCSS3} alt="" />
              <p>CSS</p>
            </S.ItemSkill>

            <S.ItemSkill>
              <img src={iconJavascript} alt="" />
              <p>JavaScript</p>
            </S.ItemSkill>

            <S.ItemSkill>
              <img src={iconReactJs} alt="" />
              <p>ReactJS</p>
            </S.ItemSkill>

            <S.ItemSkill>
              <img src={iconReactJs} alt="" />
              <p>React Native</p>
            </S.ItemSkill>

            <S.ItemSkill>
              <img src={iconJavascript} alt="" />
              <p>NodeJS</p>
            </S.ItemSkill>

            <S.ItemSkill>
              <img src={IconSVG} alt="" />
              <p>SVG</p>
            </S.ItemSkill>

            <S.ItemSkill>
              <img src={IconJest} alt="" />
              <p>Jest</p>
            </S.ItemSkill>

            <S.ItemSkill>
              <img src={iconGit} alt="" />
              <p>GIT</p>
            </S.ItemSkill>
          </S.ListSkill>

          <S.BoxButtons>
            <Link
              className="linkHire"
              to="contact"
              spy
              smooth
              offset={-70}
              duration={500}
            >
              Entre em contato
            </Link>

            <S.LinkCV href={MyCV} download>
              Download CV
            </S.LinkCV>
          </S.BoxButtons>
        </S.WrapperSkills>
      </S.BoxSkills>
    </S.Container>
  );
}
