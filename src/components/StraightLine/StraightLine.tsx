import * as React from 'react';
import styled from 'styled-components';

const Line = styled.div`
  width: 100%;
  height: 3px;
  background-color: #797979;
  margin-top: 5px;
  max-width: 50%;
  border-radius: 1.5px;

  @media screen and (min-width: 1000px) {
    max-width: 25%;
  }
`;

const StraightLine:React.FC = () => (
  <Line />
);

export default StraightLine;
