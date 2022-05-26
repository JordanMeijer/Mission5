import React from "react";
import './MyTurners.css'

function MyTurners() {
    const whiteButton = <div className="CompareCoverage__white-button"><span className="CompareCoverage__blue-text">More information</span></div>;
    const blueButton = <div className="CompareCoverage__blue-button"><span className="CompareCoverage__white-text">Get a quote</span></div>;
    return (
        <>
            <div className="MyTurners">
                <span className="MyTurners__title">My Turners</span>
                <div className="MyTurners__container">
                    <div className="MyTurners__left-container">
                        <div className="MyTurners__icon-object">
                            <img src='claim.png' alt="img" className="MyTurners__icon-img"/>
                            <span className="MyTurners__icon-text">Claim</span>
                        </div>
                        <div className="MyTurners__icon-object">
                            <img src='pay.png' alt="img" className="MyTurners__icon-img"/>
                            <span className="MyTurners__icon-text">Pay</span>
                        </div>
                        <div className="MyTurners__icon-object">
                            <img src='upgrade.png' alt="img" className="MyTurners__icon-img"/>
                            <span className="MyTurners__icon-text">Upgrade</span>
                        </div>
                    </div>
                    <div className="MyTurners__right-container">
                        <div className="MyTurners__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse <br/>
                        quis vulputate libero. Etiam sollicitudin leo nec gravida euismod. <br/>
                        Nullam sed dolor eget risus consectetur volutpat. Nullam sit amet risus <br/>
                        sollicitudin, dignissim nisi sed, egestas eros.</div>
                        <div className="MyTurners__button-container">
                            <div className="MyTurners__white-button"><span className="MyTurners__blue-text">Login</span></div>
                            <div className="MyTurners__blue-button"><span className="MyTurners__white-text">Register</span></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MyTurners