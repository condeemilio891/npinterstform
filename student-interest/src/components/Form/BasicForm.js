import React, {useState,useEffect} from 'react'
import "./basicformstyle.css"
import Axios from "axios"

// import 'bootstrap/dist/css/bootstrap.min.css';


function BasicForm() {
  const [firstName,setFirstName]=useState("")
  const [lastName,setLastName]=useState("")
  const [phoneNumber,setPhoneNumber]=useState("")
  const [email,setEmail]=useState("")
  const [reason,setReason]=useState("")

  const submitReview=()=>{
    Axios.post('http://localhost:3001/api/insert',
    {firstName:firstName,
      lastName:lastName,
      phoneNumber:phoneNumber,
      email:email,
      reason:reason,}).then(()=>{
        alert("successful insert")
      })
  }
    return (
      <div className="interestedForm">

        <label>First Name</label>
     <input 
     type="text" 
     name="firstName"
     onChange={(e)=>{
      setFirstName(e.target.value);
     }}/>

     <label>Last Name</label>
     <input 
     type="text" 
     name="lastName"
     onChange={(e)=>{
      setLastName(e.target.value)
     }}/>
     <label>Phone Number</label>
     <input type="text" 
     name="phoneNumber"
     onChange={(e)=>{
      setPhoneNumber(e.target.value)
     }}
     />
     <label>Email</label>
     <input 
     type="text" 
     name="email"
     onChange={(e)=>{
      setEmail(e.target.value)
     }}/>
     <label>Reason</label>
     <input 
     type="text" 
     name="reason"
     onChange={(e)=>{
      setReason(e.target.value)
     }}/>
     <button onClick={submitReview}>Submit</button>
     </div>
    );
  }
  
  export default BasicForm;