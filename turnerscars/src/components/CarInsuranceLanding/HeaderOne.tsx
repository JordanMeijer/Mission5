import React from "react";
import "./HeaderOne.css"
import "./../../App.css"


function HeaderOne() {
    return (
        <>
            <div className="HeaderOne__Parent-Container">
                <div className="HeaderOne__Child-Container-Left">
                    <img src="Logo_PNG_horizontal.png" alt="img" className="HeaderOne__Logo"/>
                </div>
                <div className="HeaderOne__Child-Container-Right">
                    <div className="HeaderOne__button">Call us</div>
                    <div className="HeaderOne__button">My Turners</div>
                    <div className="HeaderOne__button-white">Login</div>
                    <div className="HeaderOne__button-blue">Register</div>
                </div>
            </div>
        </>
    )
}

export default HeaderOne