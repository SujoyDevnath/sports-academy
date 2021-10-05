import React from 'react';
import { Carousel } from 'react-bootstrap';

const Slider = () => {
    return (
        <Carousel>
            <Carousel.Item>
                <img
                    className="d-block w-100 img-style"
                    src="./images/carousel-img-1.jpeg"
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
                    src="./images/carousel-img-2.jpeg"
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
                    src="./images/carousel-img-3.jpeg"
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