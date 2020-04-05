import styled from 'styled-components';

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
