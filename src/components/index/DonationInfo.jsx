import React from "react";
import {Button} from "react-bootstrap";
import "../../styles/IndexCSS.css";

export default function DonationInfo() {
    return (<section class="page-section blue-font">
        <div class="container">
        <h2 class="text-center mt-0 responsive-header-text">We Need Your Help</h2>
        <p class="responsive-body-text">Right now, we can make <strong class="text-grow">150 face shields/day</strong>. In addition to face shields, we have the supply chain<br/> in place to produce other PPE Equipment such as <strong class="text-grow">Intubation/Aerosol Boxes</strong>. With your help we can <strong class="text-grow">accelerate</strong> this effort considerably.</p>
        <Button size="lg" href="https://www.gofundme.com/f/provide-our-heroes-ppe-for-hospitals?utm_source=customer&utm_medium=copy_link-tip&utm_campaign=p_cp+share-sheet" className="change-btn-inverse"><strong>DONATE THROUGH GOFUNDME</strong></Button>
        <p class="responsive-body-text">Just a <strong class="text-grow">$1.50 donation</strong> goes towards making another face shield that will be delivered to a healthcare worker on the frontlines.</p>
       
        </div>
    </section>);
}