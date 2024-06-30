import React from 'react';
import Logoo from '../../assets/logoo.png'
import './Footer.css';

const title = "Company";
const Resources = "Resources";
const Product = "Product";
const Support = "Contact";

const addressList = [
    { text: 'About Us' },
    { text: 'Careers' },
    { text: 'Press' },
    { text: 'Ambassadors' },
];

const quickList = [
    { text: 'All Products', link: '/shop' },
    { text: 'Shop', link: '/shop' },
    { text: 'Embed API', link: '/about' },
    { text: 'Content Creators', link: '#' },
    { text: 'Got a suggestion?', link: '/about' },
];

const tweetList = [
    { text: 'FAQ', link: '#' },
    { text: 'hire@micdee.com', link: '#' },
    { text: 'WhatsApp ↗', link: '#' },
];

const Footer = () => {
    return (
        <footer className='footer'>
            <div className='footer-container'>
            <img src={Logoo} alt="Footer Image" className="footer-image" />

                <div className="footer-item">
                    <div className="footer-content">
                        <h4 className="footer-title">{title}</h4>
                        <ul>
                            {addressList.map((val, i) => (
                                <li key={i}>{val.text}</li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="footer-item">
                    <div className="footer-content">
                        <h4 className="footer-title">{Product}</h4>
                        <ul>
                            {quickList.map((val, i) => (
                                <li key={i}>
                                    <a href={val.link}>{val.text}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="footer-item">
                    <div className="footer-content">
                        <h4 className="footer-title">{Support}</h4>
                        <ul>
                            {tweetList.map((val, i) => (
                                <li key={i}>
                                    <a href={val.link}>{val.text}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
