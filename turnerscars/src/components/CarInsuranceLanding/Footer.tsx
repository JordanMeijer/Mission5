import React from "react";
import './Footer.css'

function Footer() {
    return (
        <>
            <div className="Footer">
                <div className="Footer__container-top">
                    <img src="Logo_PNG_horizontal.png" alt="img" className="Footer__Logo"/>
                    <div className="Footer__content-container">
                        <div className="Footer__content-column">
                            <span className="Footer__header">Community</span>
                            <span className="Footer__sub-header">About us</span>
                            <span className="Footer__sub-header">Guidelines and how to</span>
                            <span className="Footer__sub-header">Qoute from the best</span>
                            <span className="Footer__sub-header">How to start a blog</span>
                        </div>
                        <div className="Footer__content-column">
                            <span className="Footer__header">Getting Started</span>
                            <span className="Footer__sub-header">About us</span>
                            <span className="Footer__sub-header">Guidelines and how to</span>
                            <span className="Footer__sub-header">Qoute from the best</span>
                            <span className="Footer__sub-header">How to start a blog</span>
                            <span className="Footer__sub-header">Qoute from the best</span>
                            <span className="Footer__sub-header">Guidelines and how to</span>
                        </div>
                        <div className="Footer__content-column">
                            <span className="Footer__header">Reasources</span>
                            <span className="Footer__sub-header">About us</span>
                            <span className="Footer__sub-header">Guidelines</span>
                            <span className="Footer__sub-header">Qoute from the best</span>
                            <span className="Footer__sub-header">How to start a blog</span>
                        </div>
                    </div>
                </div>
                <div className="Footer__container-bottom">
                    <span className="Footer__text">2022 Turrners Cars. All rights Reserved</span>
                    <div className="Footer__container-bottom-menu">
                        <span className="Footer__text">Terms of Service</span>
                        <span className="Footer__text">Privacy Policy</span>
                        <span className="Footer__text">Security</span>
                        <span className="Footer__text">Sitemap</span>
                    </div>
                    <div className="Footer__container-bottom-icons">
                    <img src="twitter.png" alt="img" className="Footer__icon-img"/>
                    <img src="facebook.png" alt="img" className="Footer__icon-img"/>
                </div>
                </div>
              
            </div>
        </>
    )
}

export default Footer