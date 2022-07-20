import * as React from 'react';
import styled, { keyframes } from 'styled-components';

const CardLoading = keyframes`
  0% { transform: translateX(-130%); }
    
  100% { transform: translateX(130%); }
`;

const ShimmerWrapper = styled.div`
  position: absolute;
  top:0;
  left:0;
  width: 100%;
  height: 100%;
  animation: ${CardLoading} 1.5s infinite;
`;

const StyledShimmer = styled.div`
  width: 70%;
  height: 100%;
  background: rgba(255, 255, 255, 0.2);
  transform: skewX(-20deg);
  box-shadow: 0 0 30px 30px rgba(255, 255, 255, 0.1);
`;

const Shimmer: React.FunctionComponent = () => (
  <ShimmerWrapper>
    <StyledShimmer />
  </ShimmerWrapper>
);

export default Shimmer;
