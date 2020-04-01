import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  max-width: 1120px;
  width: 100%;
  margin: 0 auto;
  padding: 0 20px 60px 20px;
`;

export const TituloPage = styled.h1`
  text-transform: uppercase;
  font-family: 'Montserrat', sans-serif;
  color: #303030;
  font-weight: 700;
  font-size: 22px;
  width: 100%;
  text-align: center;
  margin: 60px 0;

  span {
    padding: 5px 8px;
    border-bottom: 2px solid #57d131;
    display: inline-block;
  }
`;

export const WrapperCapacity = styled.section`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;
export const Capacity = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #303030;
  width: 22%;
  @media (max-width: 768px) {
    width: 45%;
    margin-bottom: 20px;
  }
  h2 {
    margin: 24px 16px;
    font-size: 18px;
    font-family: 'Montserrat', sans-serif;
    font-weight: 600;
  }

  p {
    font-size: 16px;
    font-family: 'Ubuntu', sans-serif;
    text-align: center;
  }
  img {
    width: 150px;
    height: 150px;
  }
`;

export const BoxSkills = styled.div`
  display: flex;
  margin-top: 60px;
`;
export const PhotoPerfil = styled.section`
  margin-right: 60px;
  @media (max-width: 650px) {
    display: none;
  }
  img {
    width: 300px;
  }
`;
export const WrapperSkills = styled.section`
  position: relative;
`;
export const TitleSkills = styled.h1`
  position: relative;
  font-size: 18px;
  font-family: 'Montserrat', sans-serif;
  font-weight: 400;
  padding-top: 8px;
  margin-bottom: 30px;
  span {
    font-weight: 600;
  }
  &:after {
    content: '';
    display: block;
    width: 30px;
    height: 2px;
    background: #57d131;
    position: absolute;
    top: 0;
  }
`;

export const ListSkill = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

export const ItemSkill = styled.article`
  width: 28%;
  position: relative;
  background: #fff;
  border: 2px solid #57d131;
  border-radius: 5px;
  padding: 8px;
  margin-bottom: 30px;
  @media (max-width: 768px) {
    width: 45%;
  }
  img {
    width: 20px;
    height: 20px;
    position: absolute;
    top: -10px;
    right: -10px;
  }
  p {
    text-align: center;
    font-family: 'Ubuntu', sans-serif;
    font-size: 16px;
  }
`;
export const BoxButtons = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  a {
    border: none;
    font-size: 16px;
    text-transform: uppercase;
    color: #fff;
    padding: 16px 24px;
    border-radius: 5px;
    transition: all 0.2s;
    cursor: pointer;
    text-decoration: none;
    @media (max-width: 768px) {
      width: 100%;
      text-align: center;
    }
  }

  .linkHire {
    background: #57d131;
    margin-right: 30px;
    @media (max-width: 768px) {
      margin-right: 0px;
      margin-bottom: 16px;
    }

    &:hover {
      background: ${darken(0.1, '#57D131')};
    }
  }
`;
export const LinkCV = styled.a`
  background: #707070;
  &:hover {
    background: ${darken(0.1, '#707070')};
  }
`;
