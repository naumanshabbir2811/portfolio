import React,{useRef,useState} from 'react';
import './Contact.css';
import contactImg from "./img/nauman.png"
import emailjs from '@emailjs/browser';
// import { useState } from 'react/cjs/react.production.min';
const Result = ()=>{
    return(
        <p>Message has been sent Succcesfully, We will talk to you shortly</p>
    )
}
function Contact(props) {
    const [result,showResult]=useState(false);
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_jwso37c', 'template_gg6tvo4', e.target, 'bokrzXWumHolMiA85')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset();
          showResult(true);
        };
        setTimeout(()=>{
            showResult(false);
        },5000)
      
    return (
        <form ref={form} onSubmit={sendEmail}> 
        <div className="contact component__space" id="Contact">
            <div className="row">
                <div className="col__2">
                    <div className="contact__box">
                        <div className="contact__meta">
                            <h1 className="hire__text">Hire Me.</h1>
                            <p className="hire__text white">I am available for freelance work. Connect with me via phone:</p>
                           <p className="hire__text white"><strong>{props.number}</strong> or email <strong>{props.email}</strong></p>
                        </div>
                        <div className="input__box">
                           <input type="text" className="contact name" placeholder="Your name *" />
                           <input type="text" className="contact email" placeholder="Your Email *" />
                           <input type="text" className="contact subject" placeholder="Write a Subject" />
                           <textarea name="message" id="message" placeholder="Write Your message"></textarea>
                           <button className="btn contact pointer" type="submit" >Submit</button>
                           <div className="row">{result ?<Result/> : null}</div>
                        </div>
                    </div>
                </div>
                <div className="col__2">
                    <img src={contactImg} alt="" className="contact__img" width="600px" height="600px"/>
                </div>
            </div>
        </div>
        </form>
    )
}

export default Contact
