import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import './contact.css'

export default function Contact() {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_3lhowbx', 'template_1mi728n', e.target, 'vt8UIL0-0l991bY6u')
      .then((result) => {
          console.log(result.text);
          form.current.reset();
          // Handle success (e.g., show a success message)
      }, (error) => {
          console.log(error.text);
          // Handle errors (e.g., show an error message)
      });
  };

  return (
    <div className='contact'>
      
      <form className='form_body' ref={form}  onSubmit={sendEmail}>
        <h3>Contact me</h3>
      <div className='firstRow'>
              <input type='text' name='name' placeholder='Enter Your Name' required />
              <input type='number' name='phone' placeholder='Enter Your Phone' required />
            </div>
            <input type='email' name='email' placeholder='Enter Your Email' required />

            <br />
            <div className='checkbox'>
            <lable className='label_a'>Business</lable>
            <input type="checkbox" id="business" name="type" value="business" />
            <lable className='label_a'>Academic</lable>
            <input type="checkbox" id="academic" name="type" value="academic" />
            </div>

            <br />
            <input type='text' name='subject' placeholder='Enter Your Subject' required />

            <br />
            <textarea type='text' name='message' placeholder='Enter Your Message' required />
            <br />
            <button type='submit'>Submit</button>
      </form>
    </div>
  )
}
