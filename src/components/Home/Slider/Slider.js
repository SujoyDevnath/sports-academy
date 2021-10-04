import React from 'react';
import { Carousel } from 'react-bootstrap';

const Slider = () => {
    return (
        <Carousel>
            <Carousel.Item>
                <img
                    className="d-block w-100 img-style"
                    src="https://images.unsplash.com/photo-1559579313-021b6ec9f6d6?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c3RhZGl1bXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80"
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>Good environment for practice</h3>
                    <p>Here you can get proper space to practice</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100 img-style"
                    src="https://img1.hscicdn.com/image/upload/f_auto/lsci/db/PICTURES/CMS/321700/321733.6.jpg"
                    alt="Second slide"
                />

                <Carousel.Caption>
                    <h3>International oppertunity</h3>
                    <p>After completing a course from here you can get a chance to play in international level</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100 img-style"
                    src="https://www.cricketbetindia.com/wp-content/uploads/2020/07/Buttler-Stokes-football-min.jpg"
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h3>24/7 support</h3>
                    <p>Here you can get 100% support anytime. Our trainers are always ready to help you</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default Slider;