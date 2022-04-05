import React from 'react';
import AboutUs from '../../components/ecommerce/About/AboutUs';
import AboutPartners from '../../components/ecommerce/About/AboutPartners';
import AboutDescription from '../../components/ecommerce/About/AboutDescription';
import Testimonials from '../../components/ui/Testimonials';
import AboutEditor from '../../components/ecommerce/About/AboutEditor';
import AboutTestions from '../../components/ecommerce/About/AboutTestions';

const AboutScreen = () => {
    return (
        <section>
            <article className="container_about">
                <AboutUs />
                <AboutPartners />
                <AboutDescription />
                <div className='ovh'>
                    <Testimonials />
                </div>
                
                <AboutEditor />
                <AboutTestions />
            </article>
        </section>
    );
};

export default AboutScreen;