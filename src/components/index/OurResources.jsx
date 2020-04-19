import React from "react";
import "../../styles/IndexCSS.css";

export default function OurResources() {
    return ( <section style={{marginTop: "calc(2px + 2vw)"}}>
    <div className="container-fluid p-0">
      <div className="row no-gutters">
        <div className="col-lg-6 bgd-gif text-center">
            <img className="img-responsive" src="https://provideourheroes.files.wordpress.com/2020/04/vid-20200405-031709.gif?w=640&zoom=2"></img>
        </div>
        <div className="col-lg-6">
        <div className="text-center resources">
        <h2 className="text-center mt-0 responsive-header-text"><strong>Our Resources</strong></h2>
        <p className="responsive-body-text resources-body-padding">We have multiple locations of 3D Printers working <strong className="text-grow">24/7</strong> in order to meet the national need for PPE.</p>
        </div>
        </div>
      </div>

    </div>
  </section>);
}