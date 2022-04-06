import React from 'react';

const PopUp = ({ popUp, setPopUp }) => {
    return (
        <section className="container_popup_home" style={ popUp ? { visibility: 'visible' } : { visibility: 'hidden' }}>
            <div className="popup_information">
                <i className="fa-solid fa-x" onClick={ () => setPopUp(false)}></i>
                <h6>Join our newsletter and get</h6>
                <h3>50% Off for your first Pair of Eye wear</h3>
                <form>
                    <label htmlFor="">Email Address</label>
                    <input type="email" />
                    <button>Get 50% Off</button>
                </form>
                <a href="/">No thanks I want to pay full Price</a>
            </div>
        </section>
    );
};

export default PopUp;