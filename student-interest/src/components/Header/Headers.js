import React from 'react'
import { DonateButton, HeaderContainer, HeaderText, InterestFormButton } from '../../styles/HeaderStyle'


const Header = () => {
  return (
    <HeaderContainer>
        <HeaderText>BUILDING BETTER FUTURES FOR ADULTS WITH AUTISM</HeaderText>
        <InterestFormButton>INTEREST FORM</InterestFormButton>
        <DonateButton> DONATE TODAY!</DonateButton>
    </HeaderContainer>
  )
}

export default Header