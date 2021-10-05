import React from 'react';

const Message = () => {
    return (
        <div>
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
        </div>
    );
};

export default Message;