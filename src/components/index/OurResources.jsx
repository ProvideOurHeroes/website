import React from "react";
import {Button} from "react-bootstrap";
import "../../styles/IndexCSS.css";

export default function OurResources() {
    return ( <section>
    <div class="container-fluid p-0">
      <div class="row no-gutters">
        <div class="col-lg-6 bgd-gif">
            <img class="img-responsive" src="https://provideourheroes.files.wordpress.com/2020/04/vid-20200405-031709.gif?w=640&zoom=2"></img>
        </div>
        <div class="col-lg-6">
        <div class="text-center resources">
        <h2 class="text-center mt-0 responsive-header-text"><strong>Our Resources</strong></h2>
        <p class="responsive-body-text resources-body-padding">We have multiple locations of 3D Printers working <strong class="text-grow">24/7</strong> in order to meet the national need for PPE.</p>
        </div>
        </div>
      </div>

    </div>
  </section>);
}