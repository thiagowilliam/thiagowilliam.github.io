import styled from 'styled-components';
import ImgPoligono from '../../assets/images/bg-contato.svg';

export const Container = styled.div`
  background: #252934;
  width: 100%;
  padding: 100px 0px 0 0px;
  position: relative;
`;

export const Poligono = styled.div`
  background: url(${ImgPoligono}) center;
  width: 100%;
  height: 100px;
  position: absolute;
  top: 0;
  left: 0;
  background-size: cover;
`;

export const Centraliza = styled.div`
  max-width: 1120px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 0 20px;
`;

export const TituloContact = styled.h1`
  color: #fff;
  font-family: 'Montserrat', sans-serif;
  width: 100%;
  position: relative;
  text-align: center;
  margin: 60px 0 30px;
  font-size: 22px;
  font-weight: 400;
  padding-bottom: 8px;
  span {
    font-weight: 700;
  }

  &:after {
    content: '';
    display: block;
    width: 100px;
    height: 3px;
    background: #57d131;
    position: absolute;
    bottom: 0;
    transform: translateX(-50%);
    left: 50%;
  }
`;

export const BoxDetails = styled.div`
  color: #fcfcfc;

  h2 {
    font-size: 22px;
    font-family: 'Montserrat', sans-serif;
    margin-bottom: 30px;
  }
`;
export const InfoDetails = styled.article`
  font-family: 'Ubuntu', sans-serif;
  font-size: 18px;
  margin-bottom: 24px;
  h3 {
    font-weight: 600;
    margin-bottom: 8px;
  }
`;

export const Footer = styled.footer`
  background: #1b1e26;
  width: 100%;
  font-size: 12px;
  color: #fcfcfc;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 40px;
  padding: 20px 20px;
`;

export const WrapperHeart = styled.div`
  margin-left: 8px;
  animation: pulse 1s infinite;
`;

export const PulsingHeart = styled.div`
  position: relative;
  width: 20px;
  height: 16px;
  &:after,
  &:before {
    position: absolute;
    content: '';
    left: 9px;
    top: 0;
    width: 10px;
    height: 16px;
    background: #aa0000;
    border-radius: 50px 50px 0 0;
    transform: rotate(-45deg);
    transform-origin: 0 100%;
    animation: pulsecolor 1s infinite;
  }

  &:after {
    left: 0;
    transform: rotate(45deg);
    transform-origin: 100% 100%;
    animation: pulsecolor 1s infinite;
  }

  @keyframes pulse {
    10% {
      transform: scale(1.1);
    }
  }

  @keyframes pulsecolor {
    10% {
      background: #dd0000;
    }
  }
`;
