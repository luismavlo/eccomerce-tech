import React from 'react';

const ContactInfo = () => {
    return (
        <section className="container_contact_info">
            <h3>Contact</h3>
            <p className="paraghrap">WE LOVE TO DISCUSS YOUR IDEA</p>
                <div className="contact_info_details">
                    <div className="contact_details">
                        <i class="fa-solid fa-map"></i> 
                        <div className="contact_date">
                            <h6>Address</h6>
                            <p>Colombia</p>
                        </div>
                    </div>
                    <div className="contact_details">
                        <i class="fa-solid fa-envelope"></i>
                        <div className="contact_date">
                            <h6>Email</h6>
                            <p>Email: mail@example.com</p>
                        </div>
                    </div>
                    <div className="contact_details">
                        <i class="fa-solid fa-mobile-screen"></i>
                        <div className="contact_date">
                            <h6>Phone</h6>
                            <p>+57 1234567890</p>
                        </div>
                    </div>
                </div>
        </section>
    );
};

export default ContactInfo;