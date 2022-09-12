import './contact.css'
import Phone from '../img/phone.png'
import Email from '../img/email.png'
import Address from '../img/address.png'
import { useContext, useRef, useState } from 'react'
import { ThemeContext } from '../context'
import emailjs from '@emailjs/browser';

const Contact = () => {
    const formRef = useRef();
    const[done, setDone] = useState(false);

    const theme = useContext(ThemeContext);
    const darkMode = theme.state.darkMode;

    const handleSubmit = (e) => {
        e.preventDefault();
        emailjs.sendForm(
            'service_ymkm9sm', 
            'template_blfe1pq',
             formRef.current, 
             'xRFFe4bGiubMQDw3x')
      .then(
          (result) => {
          console.log(result.text);
          setDone(true);
      }, (error) => {
          console.log(error.text);
      });
    }

    return (
        <div className="con">
            <div className="c-bg"></div>
            <div className="c-wrapper">
                <div className="c-left">
                    <h1 className='c-title'>Contact Me</h1>
                    <div className="c-info">
                        <div className="c-info-item">
                            <img 
                                src={Phone} 
                                alt="" 
                                className='c-icon'/>
                                +123456789
                        </div>
                        <div className="c-info-item">
                            <img 
                                src={Email} 
                                alt="" 
                                className='c-icon'/>
                                contact@gmai.com
                        </div>
                        <div className="c-info-item">
                            <img 
                                src={Address} 
                                alt="" 
                                className='c-icon'/>
                                214 Sarswati Marga,Balkumari-8,Lalitpur
                        </div>
                    </div>
                </div>
                <div className="c-right">
                    <p className="c-desc">
                        <b>What's your story?</b><br/>
                        Get in touch.Always do react developer job well.
                        Work hard and get the right result using different 
                        features provided by react.
                    </p>
                    <form ref={formRef} onSubmit={handleSubmit}>
                        <input 
                            style={{backgroundColor: darkMode && "#333"}}
                            type="text" 
                            placeholder='Name'
                            name='user_name'/>
                        <input 
                            style={{backgroundColor: darkMode && "#333"}}
                            type="text" 
                            placeholder='Subject'
                            name='user_subject'/>
                        <input 
                            style={{backgroundColor: darkMode && "#333"}}
                            type="text" 
                            placeholder='email'
                            name='user_email'/>
                        <textarea 
                            style={{backgroundColor: darkMode && "#333"}}
                            rows="5" placeholder='Message' name='message'/>
                        <button type="submit">Submit</button>
                        <br />
                        {done && "Thank You...."}
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact;