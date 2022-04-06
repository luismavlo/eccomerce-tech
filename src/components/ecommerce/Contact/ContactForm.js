import React from 'react';

const ContactForm = () => {
    return (
        <section className="container_contact_form">
            <form>
                <div className="contact_form_one">
                    <label htmlFor="name">NAME</label>
                    <input type="text" />
                    <label htmlFor="email">EMAIL</label>
                    <input type="email" />
                    <label htmlFor="subject">SUBJECT</label>
                    <input type="text" />
                </div>
                <div className="contact_form_two">
                    <label htmlFor="message">MESSAGE</label>
                    <textarea cols="40" rows="10"></textarea>
                    <button>SUBMIT</button>
                </div>
            </form>
        </section>
    );
};

export default ContactForm;