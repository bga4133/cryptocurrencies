import React from 'react';
import styled from 'styled-components';

const StyledHeader = styled.div`
    width:100%;
    heiht:10vh;
    position:fixed;
    top:0;
    left:0;
    display:flex;
    justify-content:center;
    alignt-items:center;
    background:#3930d8;
    color:white;
`;
const Header = () => {
    return <StyledHeader>CryptoCurrencies</StyledHeader>;
};

export default Header;