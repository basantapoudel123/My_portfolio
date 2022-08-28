import React from 'react'
import './Intro.css'
import smile from '../img/happyface2.png';

const Intro = () => {
    return (
    <div className='intro'>
        <div className='i-left'>
            <div className='i-left-wrapper'>
                <h2 className='i-intro'>Hello, My name is</h2>
                <h1 className='i-name'>Basanta Poudel</h1>
                <div className="i-title">
                    <div className="i-title-wrapper">
                        <div className="i-item-title">Web Developer</div>
                        <div className="i-item-title">UI UX Designer</div>
                        <div className="i-item-title">System Analyst</div>
                        <div className="i-item-title">Mobile Developer</div>
                    </div>
                </div>
                <p className="i-desc">
                    I design and develop all types of WebApp.
                    I can style, manage,animate,etc the web using
                    different types of web services available.
                </p>
            </div>
        </div>
        <div className='i-right'>
            <div className="i-bg"></div>
            <img src={smile} alt="" className="i-img" />
        </div>
    </div>
    )
}

export default Intro;