import React from "react";
import './WhyTurners.css'

function WhyTurners() {
    return (
        <>
            <div className="WhyTurners">
                <span className="WhyTurners__title">Why join Turners Cars Insurance?</span>
                <div className="WhyTurners__content-container">
                    <img src="Why_carboot.png" alt="img" className="WhyTurners__img" />
                    <div className="WhyTurners__right-container">
                        <span className="WhyTurners__right-header">
                            Lorem ipsum, dolor sit amet consectetur adipisicing<br/>
                        elit. Maiores impedit perferendis</span>
                        <div className="WhyTurners__card-container">
                            <div className="WhyTurners__card">
                                <img src="/icons/13.svg" alt="img" className="WhyTurners__card-image"/>
                                <div className="WhyTurners__card-text-container">
                                    <span className="WhyTurners__card-header">Easy qoute</span>
                                    <span className="WhyTurners__card-body">Lorem ipsum, dolor<br/> sit amet<br/> consectetur</span>
                                </div>
                            </div>
                            <div className="WhyTurners__card">
                                <img src="/icons/14.svg" alt="img" className="WhyTurners__card-image"/>
                                <div className="WhyTurners__card-text-container">
                                    <span className="WhyTurners__card-header">Easy qoute</span>
                                    <span className="WhyTurners__card-body">Lorem ipsum, dolor<br/> sit amet<br/> consectetur</span>
                                </div>
                            </div>
                            <div className="WhyTurners__card">
                                <img src="/icons/17.svg" alt="img" className="WhyTurners__card-image"/>
                                <div className="WhyTurners__card-text-container">
                                    <span className="WhyTurners__card-header">Easy qoute</span>
                                    <span className="WhyTurners__card-body">Lorem ipsum, dolor<br/> sit amet<br/> consectetur</span>
                                </div>
                            </div>
                            <div className="WhyTurners__card">
                                <img src="/icons/9.svg" alt="img" className="WhyTurners__card-image"/>
                                <div className="WhyTurners__card-text-container">
                                    <span className="WhyTurners__card-header">Easy qoute</span>
                                    <span className="WhyTurners__card-body">Lorem ipsum, dolor<br/> sit amet<br/> consectetur</span>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default WhyTurners