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

class RequestPPE extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      "first_name": "",
      "last_name": "",
      "email": "",
      "organization_name": "",
      "organization_type": "",
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
        <h1>Request PPE</h1>
        <form 
          name="request-ppe"
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
            <label for="organization_name" class="col-sm-2 col-form-label">Organization Name</label>
            <div class="col-sm-10">
              <input type="text" name="organization_name" class="form-control" onChange={this.handleChange} required />
            </div>
          </div>
          <div class="form-group row">
            <label for="organization_type" class="col-sm-2 col-form-label">Organization Type</label>
            <div class="col-sm-10">
              <select name="organization_type" class="custom-select" onChange={this.handleChange} required>
                <option value="" hidden>Select Here</option>
                <option value="hospital">Hospital</option>
                <option value="home_health_assisted_living">Home Health/Assisted Living</option>
                <option value="private_practice">Private Practice</option>
                <option value="government">Government</option>
                <option value="other">Other</option>
              </select>
            </div>
          </div>
          <div class="form-group row">
            <label for="organization_type" class="col-sm-2 col-form-label">If Selected Other</label>
            <div class="col-sm-10">
              <input type="text" name="organization_type" class="form-control" onChange={this.handleChange} />
            </div>
          </div>
          <div class="form-group row">
            <label for="hospital_department" class="col-sm-2 col-form-label">If Hospital, Which Department?</label>
            <div class="col-sm-10">
              <input type="text" name="hospital_department" class="form-control" onChange={this.handleChange} />
            </div>
          </div>
          <div class="form-group row">
            <label for="num_faceshields" class="col-sm-2 col-form-label">Number of Face Shields Needed</label>
            <div class="col-sm-10">
              <input type="number" min="20" max="150" name="num_faceshields" class="form-control" onChange={this.handleChange} />
              <small id="num_faceshield_helpblock" class="form-text text-muted">Minimum Requests of 20. Maximum Requests of 150. We can only provide each hospital/healthcare organization with up to 150 free face shields. After that, we will have to sell each face shield for $1.50/piece. Due to high demand, we may only be able to provide each organization with an initial order 50.</small>
            </div>
          </div>
          <h2>Shipping Information</h2>
          <div class="form-group">
            <label for="inputAddress">Address</label>
            <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St" required />
          </div>
          <div class="form-group">
            <label for="inputAddress2">Address 2</label>
            <input type="text" class="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor" />
          </div>
          <div class="form-row">
            <div class="form-group col-md-6">
              <label for="inputCity">City</label>
              <input type="text" class="form-control" id="inputCity" required />
            </div>
            <div class="form-group col-md-4">
              <label for="inputState">State</label>
              <select id="inputState" class="custom-select" required>
                <option selected hidden>Choose...</option>
                <option value="AL">Alabama</option>
	              <option value="AK">Alaska</option>
	              <option value="AZ">Arizona</option>
	              <option value="AR">Arkansas</option>
	              <option value="CA">California</option>
	              <option value="CO">Colorado</option>
	              <option value="CT">Connecticut</option>
	              <option value="DE">Delaware</option>
	              <option value="DC">District Of Columbia</option>
	              <option value="FL">Florida</option>
	              <option value="GA">Georgia</option>
	              <option value="HI">Hawaii</option>
	              <option value="ID">Idaho</option>
	              <option value="IL">Illinois</option>
	              <option value="IN">Indiana</option>
	              <option value="IA">Iowa</option>
	              <option value="KS">Kansas</option>
	              <option value="KY">Kentucky</option>
	              <option value="LA">Louisiana</option>
	              <option value="ME">Maine</option>
	              <option value="MD">Maryland</option>
	              <option value="MA">Massachusetts</option>
	              <option value="MI">Michigan</option>
	              <option value="MN">Minnesota</option>
	              <option value="MS">Mississippi</option>
	              <option value="MO">Missouri</option>
	              <option value="MT">Montana</option>
	              <option value="NE">Nebraska</option>
	              <option value="NV">Nevada</option>
	              <option value="NH">New Hampshire</option>
	              <option value="NJ">New Jersey</option>
	              <option value="NM">New Mexico</option>
	              <option value="NY">New York</option>
	              <option value="NC">North Carolina</option>
	              <option value="ND">North Dakota</option>
	              <option value="OH">Ohio</option>
	              <option value="OK">Oklahoma</option>
	              <option value="OR">Oregon</option>
	              <option value="PA">Pennsylvania</option>
	              <option value="RI">Rhode Island</option>
	              <option value="SC">South Carolina</option>
	              <option value="SD">South Dakota</option>
	              <option value="TN">Tennessee</option>
	              <option value="TX">Texas</option>
	              <option value="UT">Utah</option>
	              <option value="VT">Vermont</option>
	              <option value="VA">Virginia</option>
	              <option value="WA">Washington</option>
	              <option value="WV">West Virginia</option>
	              <option value="WI">Wisconsin</option>
	              <option value="WY">Wyoming</option>
              </select>
            </div>
            <div class="form-group col-md-2">
              <label for="inputZip">Zip</label>
              <input type="text" class="form-control" id="inputZip" required />
            </div>
          </div>
          <div class="form-group">
            <label for="canPickUpGen">If you are in the Houston, TX area can you pick up from our location in Pearland?</label>
            <div name="canPickUpGen" class="form-check">
              <input class="form-check-input" type="radio" name="canPickUp" id="canPickUp1" value="option1" checked />
              <label class="form-check-label" for="canPickUp1">
                Yes
              </label>
            </div>
            <div class="form-check">
              <input class="form-check-input" type="radio" name="canPickUp" id="canPickUp2" value="option2" />
              <label class="form-check-label" for="canPickUp2">
                No, please ship to specified address.
              </label>
            </div>
          </div>
          <div class="form-group row">
            <label for="num_faceshields_extra" class="col-sm-2 col-form-label">Number of Extra Face Shields Needed</label>
            <div class="col-sm-10">
              <input type="number" min="0" max="50" name="num_faceshields_extra" class="form-control" onChange={this.handleChange} />
              <small id="num_faceshield_extra_helpblock" class="form-text text-muted">These are currently on back order, so we may not be able to meet this request.</small>
            </div>
          </div>
          <div class="form-group row">
            <label for="extra_info" class="col-sm-2 col-form-label">Anything else we should know?</label>
            <div class="col-sm-10">
              <input type="text" name="extra_info" class="form-control" onChange={this.handleChange} />
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

export default RequestPPE;