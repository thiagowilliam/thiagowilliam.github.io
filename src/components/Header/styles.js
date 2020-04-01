import styled from 'styled-components';

export const Container = styled.div`
  position: fixed;
  top: 0;
  z-index: 9;
  width: 100%;
  background: rgba(27, 30, 38, 1);
`;

export const LineMenu = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  background: #57d131;
  width: 40px;
  height: 2px;
`;

export const Centraliza = styled.header`
  max-width: 1120px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  padding: 10px 0;
`;

export const boxMenu = styled.nav`
  position: relative;
`;
export const List = styled.ul`
  position: relative;
  display: flex;
`;
export const ItemList = styled.li`
  display: block;
  a {
    text-decoration: none;
    color: #fcfcfc;
    font-size: 20px;
    padding-bottom: 4px;
    margin: 0 20px;
    border-bottom: 0px solid transparent;
    transition: all 0.2s;
    cursor: pointer;
    &:hover {
      border-bottom: 2px solid #57d131;
    }
  }
  .active {
    border-bottom: 2px solid #57d131;
  }
`;

export const LinkList = styled.a``;

export const BoxSocial = styled.div`
  position: relative;
  margin-left: auto;
  display: flex;
`;

export const IconSocial = styled.a`
  text-decoration: none;
  margin: 0 4px;
  padding: 8px 10px;
  border-radius: 5px;
  background: #0d0d0d;
  display: block;
  opacity: 0.7;
  transition: all 0.2s;
  &:hover {
    opacity: 1;
  }
`;
