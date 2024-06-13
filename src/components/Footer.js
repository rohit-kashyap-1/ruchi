import React from 'react'

export default function Footer() {
  return (
    <div>
<footer className="pt-5">
        <div className="custom_container pt-5 pb-5">
          <div className="row">
            <div className="col-md-4">
              <p className="mb-4 font_h">GlamVogueBeauty.com</p>
              <div className="option">
                <a href="">Contact Us</a>
                <a href="">Shipping & Delivery</a>
                <a href="">Cancellation & Return</a>
                <a href="">Help</a>
                <a href="">Sell on Glam</a>
              </div>
            </div>
            <div className="col-md-4">
              <p className="mb-4 font_h mx-auto">Follow Us</p>
              <div className="ftr_logo">
                <img src="images/facebook.png" className="img_fb" />
                <a href="https://www.facebook.com/">Facebook</a>
              </div>
              <div className="ftr_logo">
                <img src="images/instagram.png" className="img_fb" />
                <a href="https://www.instagram.com/">Instagram</a>
              </div>
              <div className="ftr_logo">
                <img src="images/twitter.png" className="img_fb" />
                <a href="https://www.twitter.com/">Twitter</a>
              </div>
              <div className="ftr_logo">
                <img src="images/youtube.png" className="img_fb" />
                <a href="https://www.youtube.com/">Youtube</a>
              </div>
            </div>
            <div className="col-md-4">
              <p className="mb-4 font_h mx-auto">Newsletter</p>
              <input type="text" placeholder="email address" className="box" />
            </div>
          </div>
        </div>
        <div className="pt-md-5">
          <div className="bg-brand">
            <div className="custom-container">
              <div className="pt-5 pt-md-4 pb-md-4 custom_1">
                <a href="">Terms & Conditions</a>
                <p className="px-2"></p>
                <a href="">Shipping Policy</a>
                <p className="px-2"></p>
                <a href="">Cancellation Policy</a>
              </div>
              <div className="custom_1">
                <a href="">©  GlamVogueBeauty All Rights Reversed.</a>
              </div>
            </div>
          </div>
        </div>
      </footer >
    </div>
  )
}

