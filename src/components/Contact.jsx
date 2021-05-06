import React, { useState } from "react";
import axios from "axios";

function Contact(){

    var [userName, setUserName] = useState("");
    var [userEmail, setUserEmail] = useState("");
    var [contactNo, setContactNo] = useState("");
    var [userMessage, setUserMessage] = useState("");
    var [status, setStatus] = useState("");

    function handleClick(){
            // axios.post("http://192.168.0.107:5000/contact", {
            axios.post("https://adroitbackend.herokuapp.com/contact", {
                userName: userName,
                userEmail: userEmail,
                contactNo: contactNo,
                userMessage: userMessage
            })
            .then(function (response) {
                // handle success
                // console.log(JSON.parse(response));
                console.log(response.statusText);
                if(response.statusText==="OK"){
                    setStatus("Message Successfully sent!");
                    setUserName("");
                    setUserEmail("");
                    setContactNo("");
                    setUserMessage("");
                }
                else{
                    setStatus("Something went wrong");
                }
                console.log("Sucessfully Executed");
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .then(function () {
                // always executed
                console.log("Executed");
                window.scrollTo(500, 0);
            });
    }

    return(
        <div className="contactFormDiv">
            <h1>Contact Form</h1>
            <h2 color="#59a101">{status}</h2>
            <div className="contactForm">
                <label>Name</label><br />
                <input type="text" onChange={(e)=>setUserName(e.target.value)} placeholder="Your name" name="userName" className="form-control inputArea" value={userName} />
                <label>Email Address</label>
                <input type="email" onChange={(e)=>setUserEmail(e.target.value)} placeholder="Email Address" name="userEmail" className="form-control inputArea" value={userEmail} />
                <label>Contact Number</label>
                <input type="tel" onChange={(e)=>setContactNo(e.target.value)} placeholder="Contact Number" className="form-control inputArea" value={contactNo}/>
                <label>Message</label>
                <textarea name="userMessage" onChange={(e)=>setUserMessage(e.target.value)} cols="30" rows="6" placeholder="Your message..." className="form-control inputArea" value={userMessage} />
                <button onClick={handleClick} >Send Message</button>
            </div>
        </div>
    );
}

export default Contact;