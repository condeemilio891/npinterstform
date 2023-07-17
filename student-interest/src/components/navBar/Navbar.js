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
import { FaFacebook,FaLinkedin,FaTwitter,FaInstagram} from "react-icons/fa"

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
        <h1 href=" https://npusa.org/">nonPareil</h1>
        </LeftContainer>
        <RightContainer>
        <NavbarLinkContainer>
            <NavbarLink to="https://npusa.org/"> Home</NavbarLink>
            <NavbarLink to="https://npusa.org/about/"> About</NavbarLink>
            <NavbarLink to="https://npusa.org/program/"> Program</NavbarLink>
            <NavbarLink to="/about"> Locations</NavbarLink>
            <NavbarLink to="https://npusa.org/contact/"> Contact</NavbarLink>
             <a className="navAnchor" href="https://www.facebook.com/nonPareilInstitute/?ref=br_rs"><FaFacebook/></a>
             <a className="navAnchor" href="https://www.linkedin.com/company/nonpareil-institute/"><FaLinkedin/></a>
             <a className="navAnchor"><FaTwitter/></a>
             <a className="navAnchor"href="https://www.instagram.com/explore/locations/690839484/nonpareil-institute-plano/"><FaInstagram/></a>
            
      
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