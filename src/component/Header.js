import React from "react";
import styled from "styled-components";
import { FaUserCircle } from "react-icons/fa";

// Styled components
const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #007bff;
  color: #fff;
  padding: 10px 20px;
  font-size: 16px;
`;

const LogoSection = styled.div`
  display: flex;
  align-items: center;
`;

// const Logo = styled.img`
//   height: 40px;
//   margin-right: 10px;
// `;

const Title = styled.h1`
  font-size: 18px;
  margin: 0;
`;

const UserSection = styled.div`
  display: flex;
  align-items: center;
`;

const UserIcon = styled(FaUserCircle)`
  font-size: 20px;
  margin-right: 5px;
`;

const Username = styled.span`
  font-size: 16px;
`;

const Header = () => {
  return (
    <HeaderContainer>
      {/* Logo and Title Section */}
      <LogoSection>
        {/* <Logo src="path_to_logo.png" alt="Logo" />  */}
        <Title>INDA</Title>
      </LogoSection>

      {/* User Info Section */}
      <UserSection>
        <UserIcon />
        <Username>tts_lhd</Username>
      </UserSection>
    </HeaderContainer>
  );
};

export default Header;
