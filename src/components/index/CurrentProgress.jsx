import React from 'react';
import "../../styles/IndexCSS.css";

export default function CurrentProgress() {
    return (<div>
    <section  className="current-progress">
        <div className="container">
            <h2 className="text-center mt-0 responsive-header-text"><strong className="current-progress-header shimmer">Current Progress</strong></h2>
            <div className="row">
                <div className="col-lg-4 text-center">
                    <div className="mt-5">
                        <h1 className="responsive-header-text"><strong>1500+</strong></h1>
                        <p className="mb-0">Face Shields Shipped</p>
                    </div>
                </div>
                <div className="col-lg-4 text-center">
                    <div className="mt-5">
                        <h1 className="responsive-header-text"><strong>15+</strong></h1>
                        <p className="mb-0">Hospitals Provided For</p>
                    </div>
                </div>
                <div className="col-lg-4 text-center">
                    <div className="mt-5">
                        <h1 className="responsive-header-text"><strong>100%</strong></h1>
                        <p className="  mb-0">Of Your Donation Goes Towards PPE Manufacturing</p>
                </div>
                </div>
            </div>
        </div>
    </section></div>);
}