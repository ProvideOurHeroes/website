import React from 'react';
import {Button} from "react-bootstrap";
import "../../styles/MainCSS.css";

export default function Heading() {
  return (<section class="heading" id="heading">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-15 text-center">
          <h2 class="text-white mt-0 responsive-header-text"><strong>U.S Healthcare Workers are in Dire Need of Medical Supplies</strong></h2>
          <hr class="divider dark my-10" />
          <div class="adjust-margins">
          <div class="row">
            <div class="col-lg-4">
              <img class="img-responsive" src="https://provideourheroes.files.wordpress.com/2020/04/img_07981.jpg?w=768" alt="" /></div>
            <div class="col-lg-4">
              <img class="img-responsive" src="https://provideourheroes.files.wordpress.com/2020/04/img_07981.jpg?w=768" alt="" /></div>
            <div class="col-lg-4">
              <img class="img-responsive" src="https://provideourheroes.files.wordpress.com/2020/04/img_07981.jpg?w=768" alt="" /></div>
          </div>
          </div>
          <p class="text-white mb-4 responsive-body-text">Healthcare workers are at the front lines of the pandemic. To help reduce the shortage of Personal Protective Equipment (PPE), we began producing low-cost equipment to frontline healthcare workers.</p>
          <Button size="md" href="/request-ppe" className="change-btn"><strong>REQUEST PPE</strong></Button>
        </div>
      </div>
    </div>
  </section>);
}