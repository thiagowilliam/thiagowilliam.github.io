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

  @media (max-width: 490px) {
    display: none;
  }
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
    margin: 0 8px;
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
