import styled from "styled-components";

export const FormContainer= styled.div`
  width: 100%;
  height: 20rem;
  /* background-color: black; */
  display: flex;
  flex-direction: column;
  justify-content: center;
 margin-left: 20%;



`


export const BlueText= styled.h1`
 color: #0091ff;
 font-size: 18px;
`

export const SubmitButton= styled.button`
    height: 3rem;
    width: 10rem;
    color: black;
    
    top:50%;
    border-radius:  50px 50px  50px  50px;
    color:black;
    background-color: #2B7DE1;
    font-size: 22px;
    margin: 10px;
    border-color: transparent;
    cursor: pointer;
    transition: transform 0.5s;
    &:hover {
      transform: translateY(-5px);
  }
`
