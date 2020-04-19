import React from 'react';
import { Button } from "react-bootstrap";
import "../../styles/IndexCSS.css";
import { ArrowRight } from "react-bootstrap-icons";
import Favicon from "react-favicon";

export default function CurrentProgress() {
    return (<div>
    <section  class="current-progress">
        <div class="container">
            <h2 class="text-left mt-0 responsive-header-text"><strong class="current-progress-header shimmer">Current Progress</strong></h2>
            <div class="row">
                <div class="col-lg-4 text-left">
                    <div class="mt-5">
                        <h1 class="responsive-header-text"><strong>1500+</strong></h1>
                        <p class="mb-0">Face Shields Shipped</p>
                    </div>
                </div>
                <div class="col-lg-4 text-left">
                    <div class="mt-5">
                        <h1 class="responsive-header-text"><strong>15+</strong></h1>
                        <p class="mb-0">Hospitals Provided For</p>
                    </div>
                </div>
                <div class="col-lg-4 text-left">
                    <div class="mt-5">
                        <h1 class="responsive-header-text"><strong>100%</strong></h1>
                        <p class="  mb-0">Of Your Donation Goes Towards PPE Manufacturing</p>
                </div>
                </div>
            </div>
        </div>
    </section></div>);
}