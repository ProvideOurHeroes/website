import React from "react";
import "../../styles/MoreInfoCSS.css";
import {our_team_col1, our_team_col2} from "./our-team-people";
import Person from "./Person";

export default function OurTeamComponent() {
    return (<div className="container about-us-page main-layout">
        <h1><strong>Our Team</strong></h1>
        <p>We are a small but growing organization of students, alumni, and engineers to help reduce shortage of Personal Protective Equipment in hospitals for frontline healthcare workers during this pandemic. We’re currently focused on the Greater Houston Area just because most of the manufacturing/production is done there, but we’re looking to branch out and increase our network across the country!</p>
        <p style={{marginBottom: "0px"}}>Thanks to our volunteers for making this project possible:</p>
        <div className="row">
        <div className="col-sm">
            <p>
            {our_team_col1.map((person_name) => <Person name={person_name}/>)}
            </p>
        </div>
        <div class="col-sm">
            <p>
            {our_team_col2.map((person_name) => <Person name={person_name}/>)}
            </p>
        </div>
        </div>
        <p>This project would not be made possible without <a target="_blank" href="https://www.lumikha3d.com/">Lumikha 3D</a>.</p>
    </div>);
}