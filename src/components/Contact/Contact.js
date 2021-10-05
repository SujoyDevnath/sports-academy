import React from 'react';
import './Contact.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faComment, faEnvelope, faPhone, faHome } from '@fortawesome/free-solid-svg-icons'

const Contact = () => {
    const comment = <FontAwesomeIcon icon={faComment} size="3x" />
    const envelope = <FontAwesomeIcon icon={faEnvelope} size="3x" />
    const phone = <FontAwesomeIcon icon={faPhone} size="3x" />
    const home = <FontAwesomeIcon icon={faHome} size="3x" />
    return (
        <div>
            <header>
                <div className="picture" style={{ backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.6)), url(./images/contact.jpeg)" }}>
                    <h1>CONTACT SPORTS ACADEMY</h1>
                    <p>While we're good with smoke signals, there are simpler ways for us to get in touch and answer your questions.</p>
                </div>
            </header>
            <main>
                {/* Get in touch section */}
                <section className="container">
                    <h1 className="py-5 fw-bold">Get In Touch</h1>
                    <div className="row">
                        <div className="col-sm-6 col-lg-3">
                            <div className="card card-style">
                                <div className="card-body">
                                    <h3 className="fw-bold">Chat</h3>
                                    <div className="icon my-3">{comment}</div>
                                    <h5>Chat Specialist Hours:</h5>
                                    <p className="m-0">7am-11pm CT</p>
                                    <p className="m-0">7 days a week</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 col-lg-3">
                            <div className="card card-style">
                                <div className="card-body">
                                    <h3 className="fw-bold">Email</h3>
                                    <div className="icon my-3">{envelope}</div>
                                    <h5>Send us an email</h5>
                                    <p className="m-0">sportsacademy@gmail.com</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 col-lg-3">
                            <div className="card card-style">
                                <div className="card-body">
                                    <h3 className="fw-bold">Phone</h3>
                                    <div className="icon my-3">{phone}</div>
                                    <h5>+11 532 766 4545</h5>
                                    <p className="m-0">7am-11pm CT</p>
                                    <p className="m-0">7 days a week</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 col-lg-3">
                            <div className="card card-style">
                                <div className="card-body">
                                    <h3 className="fw-bold">Address</h3>
                                    <div className="icon my-3">{home}</div>
                                    <h5>Sports Academy House</h5>
                                    <p className="m-0">Gopalganj, Dhaka,</p>
                                    <p className="m-0">Bangladesh.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* message section */}
                <section className="container-fluid py-5 mt-5" style={{ backgroundColor: "#f3e9d6" }}>
                    <h1 className="pb-5 fw-bold" style={{ color: 'tomato' }}>Let's talk about everyting</h1>
                    <div className="row container mx-auto">
                        {/* first column */}
                        <div className="col-lg-6">
                            <img src="./images/contact-svg.jpeg" className="img-fluid" alt="" />
                        </div>
                        {/* second column */}
                        <div className="col-lg-6 d-flex justify-content-center align-items-center flex-column">
                            <input type="text" className="form-control p-3 mb-3" placeholder="Enter your name" />
                            <input type="text" className="form-control p-3 mb-3" placeholder="Enter your email" />
                            <input type="text" className="form-control p-3 mb-3" placeholder="Subject" />
                            <textarea className="form-control" rows="7" placeholder="Write your message"></textarea>
                            <button className="btn btn-success py-2 px-3 w-100 fw-bold">Submit</button>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
};

export default Contact;