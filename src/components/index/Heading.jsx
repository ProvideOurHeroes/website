import React from 'react';
import {Button} from "react-bootstrap";
import "../../styles/IndexCSS.css";
import heading_image_1 from "../../images/index/heading_image_1.jpg";
import heading_image_2 from "../../images/index/heading_image_2.jpg";
import heading_image_3 from "../../images/index/heading_image_3.jpg";

export default function Heading() {
  return (<section className="heading" id="heading">
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-lg-15 text-center">
          <h2 className="text-white mt-0 responsive-header-text"><strong>U.S Healthcare Workers are in Dire Need of Medical Supplies</strong></h2>
          <hr className="divider dark my-10" />
          <div className="adjust-margins">
          <div className="row">
            <div className="col-lg-4">
              <img src={heading_image_1} alt="" /></div>
            <div className="col-lg-4">
              <img src={heading_image_2} alt="" /></div>
            <div className="col-lg-4">
              <img src={heading_image_3} alt="" /></div>
          </div>
          </div>
          <p className="text-white mb-4 responsive-body-text">Healthcare workers are at the front lines of the pandemic. To help reduce the shortage of Personal Protective Equipment (PPE), we began producing low-cost equipment to frontline healthcare workers.</p>
          <Button size="md" href="/request-ppe" className="change-btn"><strong>REQUEST PPE</strong></Button>
        </div>
      </div>
    </div>
  </section>);
}