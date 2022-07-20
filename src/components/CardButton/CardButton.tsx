/* eslint-disable react/require-default-props */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import * as React from 'react';
import styled from 'styled-components';

interface CardButtonProps {
  children: React.ReactNode | null;
  isSecond: boolean;
  clickHandler?: (e: React.MouseEvent<HTMLElement>) => void;
}

const StyledCardButton = styled.div`
  margin-left: ${(props : CardButtonProps) => (props.isSecond ? 'auto' : '0.3rem')};
  margin-right: ${(props : CardButtonProps) => (props.isSecond ? '0.3rem' : '0')};
  display: grid;
  place-items: center;
  width: 30px;
  height: 30px;
  background-color: var(--buttonbg);
  border-radius: 50%;
  cursor: pointer;
`;

const CardButton: React.FunctionComponent<CardButtonProps> = ({
  children,
  isSecond,
  clickHandler
}) => (
  <StyledCardButton
    onClick={clickHandler}
    isSecond={isSecond}
  >
    {children}
  </StyledCardButton>
);

export default CardButton;
