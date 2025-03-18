import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <>
      <h1 className="header">Contact Us</h1>
      <form className="contact-section">
        <div className="contact-details">
          <div className="username">
            <label htmlFor="fname">First_Name </label><br /><br />
            <input type="fname" name="fname" id="fname" placeholder="FirstName.."/>
          </div>
          <div>
            <label htmlFor="lname">Last_Name </label><br /><br />
            <input type="lname" name="lname" id="lname" placeholder="LastName.."/>
          </div>
          <div>
            <label htmlFor="email">Email_Ads </label><br /><br />
            <input type="email" name="email" id="email" placeholder="Email.."/>
          </div>
          <div>
            <label htmlFor="mobileNo">Contact_No </label><br /><br />
            <input type="number" name="mobileNo" id="mobileNo" placeholder="contact-no"/>
          </div>

          <input type="button" name="Submit" value='Submit'/>
        </div>
      </form>
    </>
  );
};

export default Contact;
