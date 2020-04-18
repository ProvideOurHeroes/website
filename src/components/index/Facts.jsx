import React from 'react';
import {Button} from "react-bootstrap";
import "../../styles/MainCSS.css";

export default function Facts() {
  return (        <section class="page-section facts" id="facts">
  <div class="container">
      <h2 class="text-center mt-0">The Facts</h2>
      <hr class="divider my-4" />
      <div class="row">
          <div class="col-lg-4 col-md-8 text-center">
              <div class="mt-5">
                  <i class="fas fa-4x fa-gem text-primary mb-4"></i>
                  <h3 class="h4 mb-2">1200+ <br></br>Face Shields Shipped</h3>
                  <p class="text-muted mb-0">And even more requests than that!</p>
              </div>
          </div>
          <div class="col-lg-4 col-md-8 text-center">
              <div class="mt-4">
              <Button href="https://www.gofundme.com/f/provide-our-heroes-ppe-for-hospitals?utm_source=customer&utm_medium=copy_link-tip&utm_campaign=p_cp+share-sheet" bsPrefix="btn btn-light btn-xl change-btn">Donate Through GoFundMe</Button>
                  <h3 class="h4 mb-2">Ready For More</h3>
                  <p class="text-muted mb-0">You can use this design as is, or you can make changes!</p>
              </div>
          </div>
          <div class="col-lg-4 col-md-8 text-center">
              <div class="mt-5">
                  <i class="fas fa-4x fa-laptop-code text-primary mb-4"></i>
                  <h3 class="h4 mb-2">150 <br></br>Face Shields Produced Daily</h3>
                  <p class="text-muted mb-0">All dependencies are kept current to keep things fresh.</p>
              </div>
          </div>
      </div>
  </div>
</section>);
}