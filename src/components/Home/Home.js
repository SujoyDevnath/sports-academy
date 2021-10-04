import React from 'react';
import './Home.css'
import Slider from './Slider/Slider';
import TopCourses from './TopCourses/TopCourses';

const Home = () => {
    return (
        <div className="pb-5">
            <Slider></Slider>
            <TopCourses></TopCourses>
        </div>
    );
};

export default Home;