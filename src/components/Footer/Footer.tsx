import * as React from 'react';
import styled from 'styled-components';

const StyledFooter = styled.footer`
  position: sticky;
  bottom: 0;
  height: 60px;
  background-color: var(--primarycolor);
  color: var(--txtcolor);
`;

export const Footer: React.FC = () => {
  console.log('12');
  return (
    <StyledFooter>
      Суперкрутой футер
    </StyledFooter>
  );
};
