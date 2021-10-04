import React from 'react';

const Contact = () => {
    return (
        <div className="container py-5">
            <div className="row">
                {/* first column */}
                <div className="col-lg-6">
                    <h2>Let's talk about everyting</h2>
                    <img src="./images/contact.png" className="img-fluid" alt="" />
                </div>
                {/* second column */}
                <div className="col-lg-6 d-flex justify-content-center align-items-center flex-column">
                    <input type="text" className="form-control p-3 mb-3" placeholder="Your name" />
                    <input type="text" className="form-control p-3 mb-3" placeholder="Your name" />
                    <input type="text" className="form-control p-3 mb-3" placeholder="Your name" />
                    <textarea class="form-control" rows="7" placeholder="Write your message"></textarea>                    </div>
            </div>
        </div>
    );
};

export default Contact;