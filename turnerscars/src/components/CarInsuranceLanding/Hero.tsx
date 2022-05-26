import React from "react";
import './Hero.css'

function Hero() {
    return (
        <>
            <div className="Hero__container">
                <div className="Hero__text-container">
                    <div className="Hero__text-title">We are on your side of<br/> the road</div>
                    <div className="Hero__text-body">The next big thing starts here. Start building with Prodify<br/>
                         and be the first to market with a product that is ready to take<br/>
                         on the competition and delight your customers</div>
                    <div className="Hero__qoute-button">
                        <span className="Hero__qoute-button-text">Get a qoute</span>
                    </div>

                </div>
                <div className="Hero__image-container">
                    {/* <img src="whitedots.png" alt="img" /> */}
                    <img src="driver.png" alt="img" className="Hero__driver-image"/>
                </div>
                
            </div>
        </>
    )
}

export default Hero