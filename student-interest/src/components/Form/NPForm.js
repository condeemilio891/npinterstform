import React from 'react'
import { BlueText,FormContainer } from '../../styles/FormStyle'
import NPDropdownForm from '../DropDownForm/NPDropdownForm'
import BasicForm from './BasicForm'

const NPForm = () => {
  return (
    <FormContainer>
      <BlueText>If the individual applying meets these requirements, please fill out and submit this form. 
        We will contact you about your interest in nonPareil.</BlueText>
        <BlueText>
            Site You're Interested In Attending
        </BlueText>
        <NPDropdownForm/>
       
        <BlueText>Contact Information</BlueText>
        <BasicForm/>
    </FormContainer>
  )
}

export default NPForm