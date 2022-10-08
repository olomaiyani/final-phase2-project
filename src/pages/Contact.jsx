import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "../pages/contact.css"

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_lz4hg69",
        "template_5vh6jir",
        "replace with service id",
        "replace with template id",
        form.current,
        "bUjjVX4rv7P5RZBPR"
        
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    
      <form ref={form} onSubmit={sendEmail}>
        <label>Name</label>
        <input type="text" name="user_name" placeholder="Olomaiyani" />
        <label>Email</label>
        <input type="email" name="user_email" placeholder="example@olomaiyani" />
        <label>Message</label>
        <textarea name="message" />
        <input type="submit" value="Send" />
      </form>
    
  );
};
export default Contact;