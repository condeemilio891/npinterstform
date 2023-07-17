import React from 'react'
import { BlueText, MainContainer } from '../../styles/CriterionStyle'

const Criterion = () => {
  return (
    <>
   <MainContainer>
    <BlueText>If you are interested in attending nonPariel</BlueText>
    <ol>
      <li>Applicant must be at least 18 or older to attend nonPareil</li>
      <li>Applicant must be at least 15 years of age to apply and/or tour</li>
      <li>Applicant must be out of high school to attend nonPareil (we do not require a diploma or GED)</li>
      <li>Official diagnosis of Autism Spectrum Disorder – ASD (includes Asperger’s Syndrome & PDD-NOS)</li>
      <li>Fundamental communication skills – expressive and receptive language</li>
      <li>Does not require one-on-one intervention and/or prompting for safety, behavioral support, or comprehension</li>
    </ol>
    {/* <BlueText>If the individual applying meets these requirements, please fill out and submit this form. We will contact you about your interest in nonPareil.</BlueText> */}
  
   </MainContainer>
   
   </>
  )
}

export default Criterion