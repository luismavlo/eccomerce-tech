import React from 'react';
import GoogleMaps from 'simple-react-google-maps';

const ContactMap = () => {
    return (
        <section style={{ marginBottom: '20px', marginTop: '20px'}}>
            <GoogleMaps 
                apiKey={"AIzaSyD8KKJcb22k5Dhh8JBus8SvzGft6rrmuJ0"}
                style={{ height: "400px", width: "auto" }}
                zoom={12}
                center={{
                    lat: 4.701542685284096,
                    lng: -74.12086366314976
                }}
                markers={[
                    { lat: 4.701542685284096, lng: -74.12086366314976 }
                ]}
            />
        </section>
    );
};

export default ContactMap;