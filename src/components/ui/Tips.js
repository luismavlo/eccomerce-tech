import React from 'react'

const Tips = () => {
  return (
    <>
        <div className="tip">
          <i className="far fa-hand-paper"></i> 
          <h2 className="tip__title">Satisfaction Guaranteed</h2>
          <p className="tip__txt">Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit</p>
          <a href="/#" className="btn-shop">SHOP NOW</a>
        </div>
        <div className="tip">
         <i className="fas fa-rocket"></i>
          <h2 className="tip__title">Fast Shipping</h2>
          <p className="tip__txt">Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.</p>
          <a href="/#" className="btn-shop">SHOP NOW</a>
        </div>
        <div className="tip">
          <i className="fas fa-cog"></i>
          <h2 className="tip__title">UV Protection</h2>
          <p className="tip__txt">Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.</p>
          <a href="/#" className="btn-shop">SHOP NOW</a>
        </div>
    </>
  )
}

export default Tips