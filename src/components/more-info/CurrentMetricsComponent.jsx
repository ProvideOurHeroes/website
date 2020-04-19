import React from "react";
import "../../styles/MoreInfoCSS.css";
import current_metrics_image from "../../images/current-metrics/ppe-distribution.png";

export default function CurrentMetricsComponent() {
    return (<div><div className="container about-us-page main-layout">
        <h1><strong>Current Metrics</strong></h1>
        <img className="img-responsive" src={current_metrics_image}></img>
        </div>
        <section className="current-metrics-page">
        <div className="container">
            <h2 className="text-left mt-0"><strong>This page was last updated on April 5th, 2020</strong></h2>
            <p className="current-metrics-info">All metrics on this page is connected to our record-keeping sheets and will be updated.</p>
        </div>
    </section>
    </div>);
}