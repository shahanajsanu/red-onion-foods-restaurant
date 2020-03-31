import React from 'react';
import './Footer.css';
import logo from '../../Image/logo.png'

const Footer = () => {
    return (
        <div className="footer">
            <div className="container">
            <div className="top-footer">
                <div>
                    <img src={logo} alt=""/>
                </div>
                <div className ="footer-part">
                    <ul>
                        <li><a href="#">About Online Food</a></li>
                        <li><a href="#">Read our Blog</a></li>
                        <li><a href="#">Sign up to Deliver</a></li>
                        <li><a href="#">Add Your Restaurant</a></li>
                    </ul>  
                </div>
                <div className ="footer-part">
                    <ul>
                        <li><a href="#">Get Help</a></li>
                        <li><a href="#">Read FAQs</a></li>
                        <li><a href="#">View all Cities</a></li>
                        <li><a href="#">Restaurants Near me</a></li>
                    </ul>    
                </div>
            </div>
            <div className="bottom-footer">
                <div className="copyright">
                    <p><small>CopyRight © 2020 Online Food</small></p>
                </div>
                <div className ="privacy">
                    <a href="#">Privacy Policy</a>
                    <a href="#">Terms of Use</a>
                    <a href="#">Pricing</a>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Footer;