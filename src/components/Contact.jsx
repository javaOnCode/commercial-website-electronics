import React, { Component } from "react";

export default class Contact extends Component {
  constructor() {
    super();
    this.state = {};
    this.submitMessage = (event) => {
      event.preventDefault();
      alert("You message is directed to our office... \nThanks for it...");
      window.location.href = "/contact";
    };
  }
  render() {
    return (
      <div className="contact-container">
        <h2>CONTACT US</h2>
        <div>
          <h3>Contact us with any questions</h3>
          <form className="form" onSubmit={this.submitMessage}>
            <div>
              <input
                className="input"
                type="text"
                placeholder="Name"
                required
              />
              <input
                className="input"
                type="email"
                placeholder="Email"
                required
              />
            </div>
            <div>
              <textarea
                className="input"
                cols="30"
                rows="8"
                placeholder="Type your message here..."
                required
              ></textarea>
            </div>
            <button>Submit</button>
          </form>
        </div>
        <div className="help-container">
          <h3 className="help-h3">WE'RE HERE TO HELP</h3>
          <div>
            <p>
              Address: 500 Terry Francine
              <br />
              Street San Francisco, CA 94158
              <br />
              Phone: 123-456-7890
              <br />
              Email: info@my-domain.com
            </p>
            <p className="working-hours">
              Mon-Fri: 7am - 10pm
              <br />
              Saturday: 8am - 10pm
              <br />
              Sunday: 8am - 11pm
            </p>
          </div>
        </div>
      </div>
    );
  }
}
