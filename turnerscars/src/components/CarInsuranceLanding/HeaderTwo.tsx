import React from "react";
import "./HeaderTwo.css"

function HeaderTwo() {
    return (
        <>
            <div className="HeaderTwo__parent-container">
                <div className="HeaderTwo__menu-container">
                    <div className="HeaderTwo__menu-button"><span className="HeaderTwo__menu-button-text">Sell a car</span></div>
                    <div className="HeaderTwo__menu-button"><span className="HeaderTwo__menu-button-text">Buy a car</span>r</div>
                    <div className="HeaderTwo__menu-button"><span className="HeaderTwo__menu-button-text">Hire a car</span></div>
                    <div className="HeaderTwo__menu-button"><span className="HeaderTwo__menu-button-text">Finance</span></div>
                    <div className="HeaderTwo__menu-button"><span className="HeaderTwo__menu-button-text-bold">Insurance</span></div>
                </div>
                <div className="HeaderTwo__button-green">
                    <span className="HeaderTwo__button-green-text">Find a car</span>
                    <img src="searchicon.png" alt="img"></img>
                </div>
            </div>
        </>
    )
}

export default HeaderTwo