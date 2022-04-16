import React from 'react';
import { Link } from 'react-router-dom';
import { aboutUs } from '../../../images';

const AboutUs = () => {
    return (
        <div className="about_us">
            <img src={aboutUs} alt="About Us" />
            <div className="about_container_info">
                <h3 className="about_title">About Us</h3>
                <p className="about_paragraph">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                <Link to="/" className="btn-shop">SHOP NOW</Link>
            </div>
        </div>
    );
};

export default AboutUs;