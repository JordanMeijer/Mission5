import React from "react";
import './car-insurance-landing.css'

//components
import HeaderOne from "../components/CarInsuranceLanding/HeaderOne";
import HeaderTwo from "../components/CarInsuranceLanding/HeaderTwo";
import Hero from "../components/CarInsuranceLanding/Hero";
import WhyTurners from "../components/CarInsuranceLanding/WhyTurners";
import CompareCoverage from "../components/CarInsuranceLanding/CompareCoverage";
import FAQ from "../components/CarInsuranceLanding/FAQ";
import MyTurners from "../components/CarInsuranceLanding/MyTurners";
import Footer from "../components/CarInsuranceLanding/Footer";


function CarInsuranceLanding() {
    return (
        <div className="CarInsuranceLanding">
            <HeaderOne />
            <div className="CarInsuranceLanding_HeaderOne-fake" />
            <HeaderTwo />
            <Hero />
            <div className="CarInsuranceLanding__break"/>
            <WhyTurners />
            <CompareCoverage />
            <FAQ />
            <img src="/tinaAwards.png" alt="img" className="Landing--TinaAwardsImg" />
            <MyTurners />
            <Footer />        
        </div>
    )
}

export default CarInsuranceLanding