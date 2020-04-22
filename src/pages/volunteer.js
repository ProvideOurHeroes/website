import React from "react"
import { navigateTo } from "gatsby-link";
import Recaptcha from "react-google-recaptcha";
import Header from "../components/Header";
import Footer from "../components/Footer";

const RECAPTCHA_KEY = process.env.SITE_RECAPTCHA_KEY;

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
}

class Volunteer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      "first_name": "",
      "last_name": "",
      "email": "",
      "organization_name": "",
      "volunteer_type": "",
      "hospital_department": ""
    };
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleRecaptcha = value => {
    this.setState({ "g-recaptcha-response": value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": form.getAttribute("name"),
        ...this.state
      })
    })
    .then(() => navigateTo(form.getAttribute("action")))
    .catch(error => alert(error));
  };

  otherOrg = e => {

  };

  render() {
    return (
      <div>
        <Header />
        <div className="container">
          <div class="jumbotron">
            <h1 class="display-4">Volunteer</h1>
            <p class="lead">
              We are currently focusing on three fronts:<br />(1) If you are in the Greater Houston area,
              you can help us on 3D printing or manufacturing.<br />(2) We will gladly accept help for
              hospital outreach, regardless of area.<br />(3) We are a new initiative and will need help
              in promoting our group through social media.
              <br /> <br />
              For more information or questions, please email us at  
              <a href="mailto:contact@provideourheroes.com"> contact@provideourheroes.com</a>
            </p>
          </div>
          <form 
            name="volunteer"
            method="POST"
            action="/confirmed/"
            netlify-honeypot="true"
            data-netlify="true"
            data-netlify-recaptcha="true"
            onSubmit={this.handleSubmit}
          >
            <input type="hidden" name="bot-field" />
            <input type="hidden" name="form-name" value="contact" />

            <div class="form-group row">
              <label for="first_name" class="col-sm-2 col-form-label">First Name</label>
              <div class="col-sm-10">
                <input type="text" name="first_name" class="form-control" onChange={this.handleChange} required />
              </div>
            </div>
            <div class="form-group row">
              <label for="last_name" class="col-sm-2 col-form-label">Last Name</label>
              <div class="col-sm-10">
                <input type="text" name="last_name" class="form-control" onChange={this.handleChange} required />
              </div>
            </div>
            <div class="form-group row">
              <label for="email" class="col-sm-2 col-form-label">Email</label>
              <div class="col-sm-10">
                <input type="email" name="email" class="form-control" onChange={this.handleChange} required />
              </div>
            </div>
            <div class="form-group row">
              <label for="volunteer_type" class="col-sm-2 col-form-label">I am a</label>
              <div class="col-sm-10">
                <select name="volunteer_type" class="custom-select" onChange={this.handleChange} required>
                  <option value="" hidden>Select Here</option>
                  <option value="student">Student</option>
                  <option value="engineer">Engineer</option>
                  <option value="healthcare_worker">Healthcare Worker</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>
            <div class="form-group row">
              <label for="volunteer_type" class="col-sm-2 col-form-label">If Selected Other</label>
              <div class="col-sm-10">
                <input type="text" name="volunteer_type" class="form-control" onChange={this.handleChange} />
              </div>
            </div>
            <div class="form-group row">
              <label for="background" class="col-sm-2 col-form-label">My Background is in</label>
              <div class="col-sm-10">
                <input type="text" name="background" class="form-control" required onChange={this.handleChange} />
              </div>
            </div>
            <div class="form-group row">
              <label for="phone_number" class="col-sm-2 col-form-label">Phone Number</label>
              <div class="col-sm-10">
                <input type="text" name="phone_number" class="form-control" required onChange={this.handleChange} />
              </div>
            </div>
            <div class="form-group">
              <label for="canPickUpGen">I can help with</label>
              <div name="canPickUpGen" class="form-check">
                <input class="form-check-input" type="checkbox" name="helping_abilities" id="canPickUp1" value="manufacturing" />
                <label class="form-check-label" for="canPickUp1">
                  Manufacturing PPE Equipment (3D Printers, CNC, Laser Cutter, Waterjet, Injection Molding Assistance)
                </label>
              </div>
              <div class="form-check">
                <input class="form-check-input" type="checkbox" name="helping_abilities" id="canPickUp2" value="outreach" />
                <label class="form-check-label" for="canPickUp2">
                  Hospital Outreach (Primary liasion to coordinate with hospitals in need of PPE equipment)
                </label>
              </div>
              <div class="form-check">
                <input class="form-check-input" type="checkbox" name="helping_abilities" id="canPickUp3" value="media" />
                <label class="form-check-label" for="canPickUp3">
                  Promoting through Social Media Content (photos, fliers, posts, videos)
                </label>
              </div>
              <div class="form-check">
                <input class="form-check-input" type="checkbox" name="helping_abilities" id="other" value="other" />
                <label class="form-check-label" for="other">
                  Other
                </label>
              </div>
            </div>
            <div class="form-group row">
              <label for="helping_abilities" class="col-sm-2 col-form-label">If selected other</label>
              <div class="col-sm-10">
                <input type="text" name="helping_abilities" class="form-control" onChange={this.handleChange} />
              </div>
            </div>
            <div class="form-group row">
              <label for="has_equipment" class="col-sm-2 col-form-label">Do you have access to manufacturing equipment? If yes, please specify.</label>
              <div class="col-sm-10">
                <input type="text" name="has_equipment" class="form-control" required onChange={this.handleChange} />
              </div>
            </div>
            <div class="form-group row">
              <label for="linkedin_url" class="col-sm-2 col-form-label">URL to your LinkedIn? We can add to the website when we list you as a volunteer.</label>
              <div class="col-sm-10">
                <input type="text" name="linkedin_url" class="form-control" onChange={this.handleChange} />
              </div>
            </div>
            <div class="form-group">
              <label for="canPickUpGen">Provide Our Heroes is happy to support volunteers in reaching their goals. Why do you want to volunteer for Provide Our Heroes? (Check all that apply)</label>
              <div name="canPickUpGen" class="form-check">
                <input class="form-check-input" type="checkbox" name="volunteer_reasons" id="canPickUp1" value="manufacturing" />
                <label class="form-check-label" for="canPickUp1">
                  Assist healthcare workers against the pandemic
                </label>
              </div>
              <div class="form-check">
                <input class="form-check-input" type="checkbox" name="volunteer_reasons" id="canPickUp2" value="outreach" />
                <label class="form-check-label" for="canPickUp2">
                  Gain volunteer experience (We can provide documentation if needed!)
                </label>
              </div>
              <div class="form-check">
                <input class="form-check-input" type="checkbox" name="volunteer_reasons" id="canPickUp3" value="media" />
                <label class="form-check-label" for="canPickUp3">
                  Learn more about 3D manufacturing
                </label>
              </div>
              <div class="form-check">
                <input class="form-check-input" type="checkbox" name="volunteer_reasons" id="canPickUp4" value="media" />
                <label class="form-check-label" for="canPickUp4">
                  Strengthen communication skills
                </label>
              </div>
              <div class="form-check">
                <input class="form-check-input" type="checkbox" name="volunteer_reasons" id="canPickUp5" value="media" />
                <label class="form-check-label" for="canPickUp5">
                  Work with hospitals and engineers
                </label>
              </div>
              <div class="form-check">
                <input class="form-check-input" type="checkbox" name="volunteer_reasons" id="other" value="other" />
                <label class="form-check-label" for="other">
                  Other
                </label>
              </div>
            </div>
            <div class="form-group row">
              <label for="volunteer_reasons" class="col-sm-2 col-form-label">If selected other</label>
              <div class="col-sm-10">
                <input type="text" name="volunteer_reasons" class="form-control" onChange={this.handleChange} />
              </div>
            </div>
            <Recaptcha
              ref="recaptcha"
              sitekey={RECAPTCHA_KEY}
              onChange={this.handleRecaptcha}
            />
            <div class="form-group row">
              <button type="submit" class="btn btn-primary">Submit</button>
            </div>
          </form>
          </div>
        <Footer />
      </div>
    );
  }
}

export default Volunteer;