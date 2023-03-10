import React,{useRef,useState} from "react";
import emailjs from '@emailjs/browser';
import "./ContactForm.css";
import Modal from "./Modal";
const ContactForm = (props) => {
  const [openModal,setOpenModal]=useState(false)
const handleModal=()=>{
  setOpenModal(true)
}
 const form = useRef();
  const sendEmail=(e)=>{
    
e.preventDefault();
emailjs.sendForm('service_29l6eup', 'template_uobpb6d', form.current, '5VMb8ejOaEc4p5gZ7')
.then((result) => {
  handleModal()
    console.log(result);
}, (error) => {
    console.log(error.text);
});
e.target.reset();
  }
  return (
    <div className="form">
      {openModal && <Modal setCloseModal={setOpenModal}/>}
      <form onSubmit={sendEmail} ref={form}>
        <label>Your Name</label>
        <input type="text" required name="user_name"></input>
        <label>Email</label>
        <input type="email" required name="user_email"></input>
        <label>Subject</label>
        <input type="text" required name="subject"></input>
        <label>Message</label>
        <textarea rows="6" placeholder="Type your message here" required name="message"/>
        <button className="btn" type="submit" >Submit</button>
      </form>
    </div>
  );
};

export default ContactForm;
