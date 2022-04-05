import React from 'react'

const Footer = () => {
  return (
    <footer className="main-footer">
    <div className="footer__section">
      <h2 className="footer__title">About Us</h2>
      <p className="footer__txt">Curabitur non nulla sit amet nislinit tempus convallis quis ac lectus. lac inia eget consectetur sed, convallis at tellus. Nulla porttitor accumsana tincidunt.</p>
    </div>
    <div className="footer__section">
      <h2 className="footer__title">Location :</h2>
      <p className="footer__txt">0926k 4th block building, king Avenue, New York City</p>
      <h2 className="footer__title">Contact</h2>
      <p className="footer__txt">Phone : +121 098 8907 9987</p>
      <p className="footer__txt">Email : info@example.com</p>
    </div>
    <div className="footer__section">
      <h2 className="footer__title">Quick Links</h2>
      <a href="/#" className="footer__link">Home</a>
      <a href="/#" className="footer__link">About</a>
      <a href="/#" className="footer__link">Error</a>
      <a href="/#" className="footer__link">Shop</a>
      <a href="/#" className="footer__link">Contact Us</a>
    </div>
    <div className="footer__section">
      <h2 className="footer__title">Sign up for your offers</h2>
      <p className="footer__txt">By subscribing to our mailing list you will always get latest news and updates from us.</p>
      <input type="email" className="footer__input" placeholder="Enter your email" />
    </div>
    <p className="copy">© 2022 Tecnotech. All Rights Reserved | Design by W3Layouts</p>
  </footer>
  )
}

export default Footer