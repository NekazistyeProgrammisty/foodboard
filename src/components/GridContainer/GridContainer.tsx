import * as React from 'react';
import styled from 'styled-components';

interface IGridContainer {
  children?: React.ReactChildren;
}

const StyledGridContainer = styled.div`
  display: grid;
  gap: 15px;
  place-items: center;
  grid-template-columns: repeat(2, 1fr);

  @media screen and (min-width: 630px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media screen and (min-width: 1280px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

const StyledTestDiv = styled.div`
  width: 100%;
  min-width: 150px;
  max-width: 480px;
  height: 300px;
  display: grid;
  place-items: center;
  border-radius: 15px;
  background-color: var(--primarycolor);
  filter: drop-shadow(2px 4px 4px rgba(0, 0, 0, 0.25));
`;

export const GridContainer: React.FC<IGridContainer> = ({ children }) => {
  return (
    <StyledGridContainer>
      {[...Array(20).keys()].map((elem) => {
        return <StyledTestDiv>Карточка товара</StyledTestDiv>;
      })}
    </StyledGridContainer>
  );
};
