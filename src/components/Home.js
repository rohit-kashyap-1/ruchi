import React from 'react'
import Header from './Header'
import Footer from './Footer'

import Carousel from './Carousel'

export default function Home() {
  return (
    <>
      <div>
        <Header />
        <Carousel />
        {/* <div className="">
          <div className="image-sliderfade fade height_">
            <img src="images/hero1.jpg" style={{ width: '100%' }} />
            <div className="overlay_text">
              <span className="heading"> Best Mini Mascara On Rs. 300</span>
              <h6 className="heading_2">
                GET 2 MINIS ON RS. 500
              </h6>
              <button type="button" className="btn btn-outline-light btn-lg  ">Shop now</button>
            </div>

          </div>
          <div className="image-sliderfade fade height_">
            <img src="images/hero2.jpg" style={{ width: '100%' }} />
            <div className="overlay_text">
              <span className="heading">Up To 5O%Off Kajal On Rs. 499</span>
              <h6 className="heading_2">
                EYESHADOW ON RS. 799
              </h6>
              <button type="button" className="btn btn-outline-light btn-lg  ">Shop now</button>
            </div>
          </div>

          <div className="image-sliderfade fade height_">
            <img src="images/hero3.jpg" style={{ width: '100%' }} />
            <div className="overlay_text">
              <span className="heading">Body Care Starting At Rs. 799</span>
              <h6 className="heading_2">
                TRAVEL MINIS AT FLAT RS. 399
              </h6>
              <button type="button" className="btn btn-outline-light btn-lg  ">Shop now</button>
            </div>
          </div>
        </div>
        <br />
        <div style={{ textAlign: 'center' }}>
          <span className="dot"></span>
          <span className="dot"></span>
          <span className="dot"></span>
        </div> */}
        <div className="hero2 p-5 ">
          <p className="font-size-display1 mt-5 text-center mx-auto" style={{ maxWidth: '53rem' }}>MOISTURE IS THE ESSENCE OF
            WETNESS, AND WETNESS IS THE ESSENCE OF BEAUTY.</p>
          <div className="d-flex align-items-center justify-content-center mt-3 mb-5">
            <a className="find_" href="">
              <p className="me-3">Find out more</p>
              <div className="right_arrow">
                <img src="/images/right-arrow.png" />
              </div>
            </a>
          </div>
        </div>
        <div className="hero3 py-4">
          <div className="container p-5">
            <p className="my-4 py-4 cate">Categories</p>
            <div className="row">
              <div className="col-12 col-md-4 collection-item mb-5">
                <div className="effect_">
                  <div className="mb-4 w-100 collection-image"></div>
                  <p className="mb-2 product">Facial Products</p>
                </div>
              </div>
              <div className="col-12 col-md-4 collection-item mb-5">
                <div className="effect_">
                  <div className="mb-4 w-100 collection-image2"></div>
                  <p className="mb-2 product">Hair Products</p>
                </div>
              </div>
              <div className="col-12 col-md-4 collection-item mb-5">
                <div className="effect_">
                  <div className="mb-4 w-100 collection-image3"></div>
                  <p className="mb-2 product">Body Products</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container py-5 my-5 ">
          <div className="d-flex flex-column align-items-center mb-5 pb-4">
            <p className="mb-4 latest">Introducing Our Latest Products</p>
            <p className="mb-3 limit">Limited reservations on upcoming <br /> products and restocks.</p>
            <div className="d-flex align-items-center justify-content-center mt-3 mb-5">
              <a className="find_" href="">
                <p className="me-3">See more products</p>
                <div className="right_arrow">
                  <img src="/images/right-arrow.png" />
                </div>
              </a>
            </div>
          </div>
          <div className="row mb-5">
            <div className="col-6 col-sm-6 col-lg-3 main">
              <div className="mb-3 row_img"></div>
              <p className="mb-2 head_">Lip Fantastic</p>
              <p className="mb-2 sub_head">A limited-edition, nourishing lip gel to top off your look and feel fantastic.
              </p>
              <p className="pb-2 price">$24.00</p>
            </div>
            <div className="col-6 col-sm-6 col-lg-3 main">
              <div className="mb-3 row_img2"></div>
              <p className="mb-2 head_">Eye Purity Gels</p>
              <p className="mb-2 sub_head">Treat your skin with active pore enzymes that replenish sun damaged skin.</p>
              <p className="pb-2 price">$18.00</p>
            </div>
            <div className="col-6 col-sm-6 col-lg-3 main">
              <div className="mb-3 row_img3"></div>
              <p className="mb-2 head_">Complexion Cream</p>
              <p className="mb-2 sub_head">Nourish your face with a natural vitamin burst for that perfectly balanced
                glow.</p>
              <p className="pb-2 price">$32.00</p>
            </div>
            <div className="col-6 col-sm-6 col-lg-3 main">
              <div className="mb-3 row_img4"></div>
              <p className="mb-2 head_">Hair, Beauty & Bath</p>
              <p className="mb-2 sub_head">Made for your hair, a bath foam that brings your hair back to life.</p>
              <p className="pb-2 price">$28.00</p>
            </div>
          </div>
        </div>

        <div className="py-5 mb-5 hero4">
          <div className="hero_cont">
            <div className="new_img">
            </div>
            <div className="hero_text">
              <p className="mb-4 new_">A new shopping experience</p>
              <a className="find_1" href="">
                <p className="me-3">Explore products</p>
                <div className="right_arrow">
                  <img src="/images/right-arrow.png" />
                </div>
              </a>
            </div>
          </div>
        </div>
        <div className="custom">
          <div className="footer_title">
            <p className="flw_text mb-3 ">Follow us on Instagram for more updates</p>
            <div className="d-flex">
              <a className="find_" href="">
                <p className="me-3">Follow us</p>
                <div className="right_arrow">
                  <img src="/images/right-arrow.png" />
                </div>
              </a>
            </div>
          </div>
          <div className="d-flex footer_img">
            <div className="img_1">
              <div className="ftr_img1"></div>
            </div>
            <div className="img_1">
              <div className="ftr_img2"></div >
            </div>
            <div className="img_1">
              <div className="ftr_img3"></div>
            </div>
            <div className="img_1">
              <div className="ftr_img4"></div>
            </div>
            <div className="img_1">
              <div className="ftr_img5"></div>
            </div>

          </div>
        </div>

        <Footer />


      </div>
    </>
  )
}
