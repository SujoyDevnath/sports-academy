import React from 'react';
import './Contact.css';
import GetInTouch from './GetInTouch/GetInTouch';
import Message from './Message/Message';

const Contact = () => {

    return (
        <div>
            <header>
                <div className="picture" style={{ backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.6)), url(./images/contact.jpeg)" }}>
                    <h1>CONTACT SPORTS ACADEMY</h1>
                    <p>While we're good with smoke signals, there are simpler ways for us to get in touch and answer your questions.</p>
                </div>
            </header>
            <main>
                <GetInTouch></GetInTouch>
                <Message></Message>
            </main>
        </div>
    );
};

export default Contact;