import React from "react";
import "../styles/FooterCSS.css";
import {FaFacebook, FaTwitter} from 'react-icons/fa';
import {Button} from "react-bootstrap";

export default function Footer(props) {

    function shareFB(e) {
        window.open("https://www.facebook.com/sharer/sharer.php?s=100&p[url]=http://www.provideourheroes.com&p[images][0]=&p[title]=Title%20Goes%20Here&p[summary]=Description%20goes%20here!",'targetWindow','toolbar=no,location=0,status=no,menubar=no,scrollbars=yes,resizable=yes,width=600,height=250');
    }

    function shareTwitter(e) {
        window.open("https://twitter.com/intent/tweet?text=Request%20PPE%20at%20http://www.provideourheroes.com",'targetWindow','toolbar=no,location=0,status=no,menubar=no,scrollbars=yes,resizable=yes,width=600,height=250');
    }

    return (<section>
    <div className="container-fluid footer bg-light">
    <div className="text-center"><h3><strong>Provide Our Heroes </strong></h3></div>
    <div className="socials text-center">
    <Button onClick={shareFB} target="_blank" className="btn btn-social btn-facebook"><FaFacebook/> <div>Share On Facebook</div></Button>
    <Button onClick={shareTwitter}  target="_blank" className="btn btn-social btn-twitter"><FaTwitter/> <div>Share On Twitter</div></Button>
    </div>

    {/* <button type="button" class="btn btn-social btn-facebook btn-md" href="https://www.facebook.com/sharer/sharer.php?s=100&p[url]=http://provideourheroes.com&p[images][0]=&p[title]=Title%20Goes%20Here&p[summary]=Description%20goes%20here!" onclick={shareFacebook}><FaFacebook size="25"/> Share on Facebook</button> */}
      </div>
  </section>
    );
}