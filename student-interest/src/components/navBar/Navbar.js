import React, { useState } from "react";
import "./style.css"
import {
  NavbarContainer,
  LeftContainer,
  RightContainer,
  NavbarExtendedContainer,
  NavbarInnerContainer,
  NavbarLinkContainer,
  NavbarLink,
  Logo,
  OpenLinksButton,
  NavbarLinkExtended,
} from "../../styles/NavBarStyle";
import LogoImg from "../../assets/pictures/NPLogo.png";
import { FaFacebookSquare,FaLinkedin,FaTwitter,FaInstagram} from "react-icons/fa"

function NavBar() {
  const [extendNavbar, setExtendNavbar] = useState(false);

  return (
    <NavbarContainer extendNavbar={extendNavbar}>
      <NavbarInnerContainer>
        <LeftContainer>
        <OpenLinksButton
          onClick={() => {
            setExtendNavbar((curr) => !curr);
          }}
        >
          {extendNavbar ? <>&#10005;</> : <> &#8801;</>}
            </OpenLinksButton>
        <Logo src={LogoImg}></Logo>
        <h1>nonPareil</h1>
        </LeftContainer>
        <RightContainer>
        <NavbarLinkContainer>
            <NavbarLink to="/"> Home</NavbarLink>
            <NavbarLink to="/portfolio"> About</NavbarLink>
            <NavbarLink to="/contact"> Program</NavbarLink>
            <NavbarLink to="/about"> Locations</NavbarLink>
            <NavbarLink to="/about"> Contact</NavbarLink>
             <a className="navAnchor"><FaFacebookSquare/></a>
             <a className="navAnchor"><FaLinkedin/></a>
             <a className="navAnchor"><FaTwitter/></a>
             <a className="navAnchor"><FaInstagram/></a>
            
      
          </NavbarLinkContainer>
       
        </RightContainer>
      </NavbarInnerContainer>
      {extendNavbar && (
  <NavbarExtendedContainer>
    <NavbarLinkExtended to="/"> Home</NavbarLinkExtended>
    <NavbarLinkExtended to="/portfolio"> Portfolio</NavbarLinkExtended>
    <NavbarLinkExtended to="/contact"> Contact Us</NavbarLinkExtended>
    <NavbarLinkExtended to="/about"> About Us</NavbarLinkExtended>
  </NavbarExtendedContainer>
)}
    </NavbarContainer>
  );
}

export default NavBar;