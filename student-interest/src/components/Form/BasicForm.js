import React, { useState } from 'react';
import "./basicformstyle.css";
import Axios from "axios";
import { SubmitButton } from '../../styles/FormStyle';

function BasicForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [reason, setReason] = useState("");

  const submitReview = () => {
    Axios.post('http://localhost:3001/api/insert', {
      firstName: firstName,
      lastName: lastName,
      phoneNumber: phoneNumber,
      email: email,
      reason: reason
    }).then(() => {
      alert("Successful insert");
    });
  };

  return (
    <div className="interestedForm">
      <div className="name-container">
        <input
          type="text"
          name="firstName"
          placeholder="First Name"
          onChange={(e) => {
            setFirstName(e.target.value);
          }}
        />

        <input
          type="text"
          name="lastName"
          placeholder="Last Name"
          onChange={(e) => {
            setLastName(e.target.value);
          }}
        />
      </div>

      <div className="contact-container">
        <input
          type="text"
          name="phoneNumber"
          placeholder="Phone Number"
          onChange={(e) => {
            setPhoneNumber(e.target.value);
          }}
        />

        <input
          type="text"
          name="email"
          placeholder="Email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
      </div>

      <textarea
     className='commentBox'
        name="reason"
        placeholder="Comment"
        onChange={(e) => {
          setReason(e.target.value);
        }}
      ></textarea>
      <SubmitButton onClick={submitReview}>Submit</SubmitButton>
      {/* <button onClick={submitReview}>Submit</button> */}
    </div>
  );
}

export default BasicForm;