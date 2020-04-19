import React from "react"
import { navigateTo } from "gatsby-link";
import Recaptcha from "react-google-recaptcha";
import Header from "../components/Header";

const RECAPTCHA_KEY = process.env.SITE_RECAPTCHA_KEY;

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
}

class RequestPPE extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleRecaptcha = value => {
    this.setState({ 
      "g-recaptcha-response": value, 
      "sitekey": value,
      ...this.state
    });
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

  render() {
    return (
      <div>
      <Header />
        <h1>Hi request</h1>
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

          <p>
            <label>
              First Name:<br />
              <input type="text" name="first_name" onChange={this.handleChange} />
            </label>
          </p>
          <p>
            <label>
              Last Name:<br />
              <input type="text" name="last_name" onChange={this.handleChange} />
            </label>
          </p>
          <p>
            <label>
              Email:<br />
              <input type="email" name="email" onChange={this.handleChange} />
            </label>
          </p>
          <p>
            <label>
              Organization Name:<br />
              <input type="text" name="organization_name" onChange={this.handleChange} />
            </label>
          </p>
          <p>
            <label>
              Organization Type:<br />
              <select value="Select Type" name="organization_type" onChange={this.handleChange}>
                <option value="Hospital">Hospital</option>
                <option value="School">School</option>
              </select>
            </label>
          </p>
          <Recaptcha
            ref="recaptcha"
            sitekey={RECAPTCHA_KEY}
            onChange={this.handleRecaptcha}
          />
          <p>
            <button type="submit">Submit</button>
          </p>
        </form>
        <p>Welcome to your new Gatsby site.</p>
        <p>Now go build something great.</p>
      </div>
    );
  }
}

export default RequestPPE;