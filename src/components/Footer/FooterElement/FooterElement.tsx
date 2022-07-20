import * as React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

interface FooterElementProps {
  children: React.ReactNode;
  text: string;
}

const StyledFooterElement = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.2rem;
  color: var(--secondarycolor);
  font-size: 0.7rem;
  text-decoration: none;
  cursor: pointer;
`;

const FooterElement: React.FunctionComponent<FooterElementProps> =
  ({ text, children }) => (
    <StyledFooterElement
      to={`/${text.toLowerCase().replace(' ', '')}`}
    >
      {children}
      <span>{text}</span>
    </StyledFooterElement>
  );

export default FooterElement;
