import React from 'react';
import {Button} from "react-bootstrap";
import "../../styles/MainCSS.css";

export default function Heading() {
  return (<section class="page-section heading" id="heading">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-15 text-center">
          <h2 class="text-white mt-0">U.S Healthcare Workers are in Dire Need of Medical Supplies</h2>
          <hr class="divider dark my-10" />
          <div class="row">
            <div class="col-lg-4 col-md-4">
              <img class="img-responsive" src="https://provideourheroes.files.wordpress.com/2020/04/img_07981.jpg?w=768" alt="" /></div>
            <div class="col-lg-4 col-md-4">
              <img class="img-responsive" src="https://provideourheroes.files.wordpress.com/2020/04/img_07981.jpg?w=768" alt="" /></div>
            <div class="col-lg-4 col-md-4 thumb">
              <img class="img-responsive" src="https://provideourheroes.files.wordpress.com/2020/04/img_07981.jpg?w=768" alt="" /></div>
          </div>
          <p class="text-white mb-4">Healthcare workers are at the front lines of the pandemic. To help reduce the shortage of Personal Protective Equipment (PPE), we began producing low-cost equipment to frontline healthcare workers.</p>
          <Button href="/request-ppe" bsPrefix="btn btn-light btn-xl change-btn">REQUEST PPE</Button>
        </div>
      </div>
    </div>
  </section>);
}