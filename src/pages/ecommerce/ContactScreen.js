import React from 'react';
import ContactInfo from '../../components/ecommerce/Contact/ContactInfo';
import ContactForm from '../../components/ecommerce/Contact/ContactForm';
import ContactMap from '../../components/ecommerce/Contact/ContactMap';

const ContactScreen = () => {
    return (
        <section>
            <ContactInfo />
            <ContactForm />
            <ContactMap />
        </section>
    );
}
export default ContactScreen;