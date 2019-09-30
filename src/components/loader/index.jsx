import React from 'react';
import styled,{ keyframes} from 'styled-components';

const animationLoader = keyframes`
from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const StyledLoader = styled.div`
    width: 200px;
    height: 200px;
    border: 10px solid #a55eea;
    background-color: transparent;
    animation: ${animationLoader} 2s linear infinite;
`;

const StyledLoaderContainer = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background-color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Loader = () => {
    return (
        <StyledLoaderContainer>
            <StyledLoader></StyledLoader>
        </StyledLoaderContainer>
    )
}

export default Loader;