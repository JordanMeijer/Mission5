import React from "react";
import './CompareCoverage.css'

function CompareCoverage() {
    const tick = <div className="CompareCoverage__column"><img src="tick.png" alt="img" className="CompareCoverage__tick-icon" /></div>;
    const cross = <div className="CompareCoverage__column"><img src="cross.png" alt="img" className="CompareCoverage__cross-icon" /></div>;
    const download = <div className="CompareCoverage__column"><img src="download.png" alt="img" className="CompareCoverage__download-icon" /></div>;
    const whiteButton = <div className="CompareCoverage__white-button"><span className="CompareCoverage__blue-text">More information</span></div>;
    const blueButton = <div className="CompareCoverage__blue-button"><span className="CompareCoverage__white-text">Get a quote</span></div>;
    return (
        <>
            <div className='CompareCoverage'>
                <span className="CompareCoverage__title">Compare our car insurance CompareCoverage</span>
                <div className="CompareCoverage__table">
                    <div className="CompareCoverage__table-header">
                        <div className="CompareCoverage__column-starter"></div>
                        <div className="CompareCoverage__column"><span className="CompareCoverage__policy-header">Comprehensive</span></div>
                        <div className="CompareCoverage__column"><span className="CompareCoverage__policy-header">Third party, theft, fire</span></div>
                        <div className="CompareCoverage__column"><span className="CompareCoverage__policy-header">Motor breakdown<br/> insurance (MBI)</span></div>
                    </div>
                    <div className="CompareCoverage__table-row">
                        <div className="CompareCoverage__column-starter"><span className="CompareCoverage__policy-text">Accidental Loss or damage to your care</span></div>
                        {tick}{cross}{cross}
                    </div>
                    <div className="CompareCoverage__table-row">
                        <div className="CompareCoverage__column-starter"><span className="CompareCoverage__policy-text">Fire damage</span></div>
                        {tick}{tick}{cross}
                    </div>
                    <div className="CompareCoverage__table-row">
                        <div className="CompareCoverage__column-starter"><span className="CompareCoverage__policy-text">Theft or illegal convertion</span></div>
                        {tick}{tick}{cross}
                    </div>
                    <div className="CompareCoverage__table-row">
                        <div className="CompareCoverage__column-starter"><span className="CompareCoverage__policy-text">Vehicle removal</span></div>
                        {tick}{tick}{tick}
                    </div>
                    <div className="CompareCoverage__table-row">
                        <div className="CompareCoverage__column-starter"><span className="CompareCoverage__policy-text">Policy document</span></div>
                        {download}{download}{download}
                    </div>
                    <div className='CompareCoverage__table-footer'>
                        <div className="CompareCoverage__image-container"><img src='./Untitled design (2)/2.png' alt='img' className="CompareCoverage__table-footer-image"/></div>
                        <div className="CompareCoverage__button-container">
                            {whiteButton}
                            {blueButton}
                        </div>
                        <div className="CompareCoverage__button-container">
                            {whiteButton}
                            {blueButton}
                        </div>
                        <div className="CompareCoverage__button-container">
                            {whiteButton}
                            {blueButton}
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default CompareCoverage