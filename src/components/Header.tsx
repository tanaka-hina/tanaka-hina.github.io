import styled from "styled-components";
import headerLogo from "@images/NUTMEG-logo_all_horizontal_white.png";

function Header() {
  const HeaderContainer = styled.section` 
    height: 60px;
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 1;
  `
  const Header = styled.header`
    background-color: #9491BE;  
    color: white;
    display: flex;
    align-items: center;
    height: 100%;
  `
  const HeaderLogo = styled.div`
    background-image: url(${headerLogo.src});
    background-size: cover;
    height: 30px;
    width: 142px;
    margin: 0px 50px;
  `

  return (
    <HeaderContainer>
      <Header>
        <HeaderLogo />
      </Header>
    </HeaderContainer>
  );
}

export default Header;