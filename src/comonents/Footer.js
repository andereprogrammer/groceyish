import React from 'react';
import './Footer.scss'

function Footer() {
  return (
    <>
    <div className="footer_main_div">
        <div className="footer_upper_section">
            <div className="footer_main_contact">
                <div className="footer_logo">
                    <img src="/images/Logo.svg" alt="" />
                </div>
                <div className="footer_address common_class">
                    <img src="/images/loc.svg" alt="" />
                    <span>Address: 1762 School Garden Raod</span>
                </div>
                <div className="footer_call_us common_class">
                    <img src="/images/mobile.svg" alt="" />
                    <span>Call Us: 1234 45667</span>
                </div>
                <div className="footer_email common_class">
                    <img src="/images/mail.svg" alt="" />
                    <span>Email: groceyish@yahoo.com</span>
                </div>
                <div className="footer_wfh common_class">
                    <img src="/images/clock.svg" alt="" />
                    <span>Work hours: 0:00 - 20:00,Sunday - Thursday</span>
                </div>
            </div>
            <div className="footer_account">
                <div><h4>
                    Account 
                    </h4></div>
                <div>WishList</div>
                <div>Cart</div>
                <div>Track Order</div>
                <div>Shopping Details</div>
            </div>
            <div className="footer_usefull_links">
                <div><h4>
                    UseFull Links
                    </h4></div>
                <div>About Us</div>
                <div>Contact</div>
                <div>Hot Deals</div>
                <div>Promotions</div>
                <div>New Products</div>
            </div>
            <div className="footer_help">
                <div><h4>
                    Help Center
                    </h4></div>
                <div>Payments</div>
                <div>Refund</div>
                <div>Checkout</div>
                <div>Shipping</div>
                <div>Q/A</div>
                <div>Privacy Policy</div>
            </div>
        </div>
       
    </div>
    <div className="footer_below_section">
            <div>Copyright . All rights reserved</div>
            <div><img src="/images/Payment.svg" alt="" /></div>
            <div><img src="/images/Socialmedia.svg" alt="" /></div>
    </div>

    </>
  )
}

export default Footer