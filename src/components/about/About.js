import './about.css'
import coder1 from '../../img/coder5.jpg'

const About = () => {
    return (
        <div className="about">
            <div className="a-left">
                <div className="a-card bg"></div>
                <div className="a-card">
                        <img
                            src={coder1}
                            alt=''
                            className='a-img'
                        />
                    </div>
            </div>
           
            <div className="a-right">
                <h1 className='a-title'>About Me</h1>
                <p className="a-sub">
                    As a Programmer,I write code for computer programs and 
                    mobile applications. They also are involved in maintaining,
                    debugging and troubleshooting systems and software to ensure
                    that everything is running smoothly.
                </p>
                <p className="a-desc">
                    React Developer Tools is a Chrome DevTools extension for the 
                    open-source React JavaScript library. It allows you to inspect
                    the React component hierarchies in the Chrome Developer Tools.
                    We will get two new tabs in your Chrome DevTools: "⚛️ Components"
                    and "⚛️ Profiler".
                    React makes it painless to create interactive UIs. Design simple 
                    views for each state in your application, and React will efficiently
                    update and render just the right components when your data changes.
                </p>
            </div>
        </div>
    )
}

export default About