import React from 'react';
import "../../styles/IndexCSS.css";

export default function Sponsors() {
    return (
    <section className="sponsors">
        <div className="container">
            <h2 className="text-left mt-0 responsive-header-text"><strong>Thank You to Our Sponsors</strong></h2>
            <div className="sponsors-info">
            <p>Provide Our Heroes is supported by: </p> 
            <ul>
                <li><a target="_blank" href="https://lumikha3d.com/">Lumikha 3D</a></li>
                <li><a target="_blank" href="http://www.lsiclass.com/">Life Support Industries, INC.</a></li>
            </ul>
            </div>

        </div>
    </section>);
}