import React from "react";
import "../../styles/MoreInfoCSS.css";

export default function FAQComponent() {
    return (<div className="container about-us-page main-layout">
        <h1><strong>Frequently Asked Questions</strong></h1>
        <p><strong>This page contains Frequently Asked Questions about Provide Our Heroes.</strong> If you still have questions, feel free to email: <a className="email-info" href="mailto:contact@provideourheroes.com">contact@provideourheroes.com</a></p>
        <p>Q: What does PPE stand for?</p>
        <p>A: PPE stands for Personal Protective Equipment. With no cure available for COVID-19 cases. PPE means any device or appliance which is designed to be worn by an individual for protection against one or more health and safety standards. Examples of coronavirus PPE include (but are not limited to) gloves, face shields, surgical face masks, and hospital gowns.</p>
        <p>Q: How safe are your shields? And what scientific data to you have to back up any claims about the safety of the shields?</p>
        <p>A: <a target="_blank" href="https://www.ncbi.nlm.nih.gov/pubmed/24467190">The National Institute of Health (NIH)</a> approved the use of a 3D printed version face shield as a key protectant against COVID-19. It is not your 3D printed part, it is what your 3D-printed part is holding.<strong> The face shield is the clear sheet that prevents exposure to splatter.</strong> Our shields are based off the <a target="_blank" href="https://www.prusa3d.com/covid19/">PRUSA’s 3D-printed design</a> is NIH approved and our design offers the same clear sheet protection — if not better — with a straightforward and more economical method to rapidly donate and save medical workers. Our shields are based on PRUSA’s design and open-sourced designer, <a target="_blank" href="https://3dverkstan.se/protective-visor/">Erik Cederberg / 3DVerkstan</a>. This design has been approved by staff all over the world. However, hospitals may have different regulations regarding medical supplies, please make sure to follow authority guidelines that applies within your region.</p>
        <p>Q: How simple is your mask to assemble and put on?</p>
        <p>A: Our design is easy to put on. It is also fast, economical, and simple to construct, taking on average <strong>30 seconds to assemble</strong>. Many hospitals we’ve delivered to have assembled parts on their own, out-of-the-box, straight from our sterilized equipment.</p>
        <p>Q: Is the manufacturing process sterile?</p>
        <p>A: We take careful preventative measures in accordance with the CDC and the World Health Organization to ensure that we keep you and our front-line safe. We do not allow any staff to report to work with signs of respiratory illness or COVID-19 symptoms and ask that all staff and volunteers follow this protocol. We also recommend frequent hand washing, covering of mouth while coughing, elbow bumps instead of handshakes, wiping and cleaning of common use-surfaces (phones, computers, keyboards, office door handles, desks), and the avoidance of touching your face or eyes with your hands to decrease the spread of germs. These are all practices that are prevention methods in general, not just the COVID-19 virus, which we should always follow in a communal workspace.</p>
    </div>);
}