import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class LastPart extends Component {
  constructor() {
    super();
    this.state = {};
    this.openDrones = () => {
      window.scrollTo({
        behavior: "smooth",
        top: 0,
      });
    };
    this.openCameras = () => {
      window.scrollTo({
        behavior: "smooth",
        top: 0,
      });
    };
    this.openSale = () => {
      window.scrollTo({
        behavior: "smooth",
        top: 0,
      });
    };
    this.openAccessories = () => {
      window.scrollTo({
        behavior: "smooth",
        top: 0,
      });
    };
    this.openAbout = () => {
      window.scrollTo({
        behavior: "smooth",
        top: 0,
      });
    };
    this.openContact = () => {
      window.scrollTo({
        behavior: "smooth",
        top: 0,
      });
    };
  }
  render() {
    return (
      <div className="last-layout-container" id="last_layout">
        <div className="logo-div-layout">
          <img
            src="https://1000logos.net/wp-content/uploads/2022/07/Logo-ATT.png"
            alt=""
          />
          <h3>GAMMA.</h3>
          <p>Drones and Action Cameras</p>
        </div>
        <div className="logo-secondary-div-layout">
          <div>
            <h3>Shop</h3>
            <Link to="/drones" onClick={this.openDrones} id="drones">
              Drones
            </Link>
            <br />
            <Link to="/cameras" onClick={this.openCameras} id="cameras">
              Cameras
            </Link>
            <br />
            <Link
              to="/accessories"
              onClick={this.openAccessories}
              id="accessories"
            >
              Accessories
            </Link>
            <br />
            <Link to="/sale" onClick={this.openSale} id="sale">
              Sale
            </Link>
          </div>
          <div>
            <h3>Info</h3>
            <Link to="/about" onClick={this.openAbout} id="about">
              About
            </Link>
            <br />
            <Link to="/contact" onClick={this.openContact} id="contact">
              Contact
            </Link>
          </div>
          <div>
            <h3>Support</h3>
            <a href="/FAQ">FAQ</a>
            <br />
            <a href="/shipping&returns">Shipping & Returns</a>
            <br />
            <a href="/policy">Store Policy</a>
            <br />
            <a href="/payment">Payment Methods</a>
          </div>
          <div>
            <h3>Contact</h3>
            <p>
              Customer Service: <br /> 123-456-7890 <br />
              <a href="mailto:info@my-domain.com">info@my-domain.com</a>
            </p>
            <div className="icons">
              <i class="fa-brands fa-facebook-f"></i>
              <i class="fa-brands fa-instagram"></i>
              <i class="fa-brands fa-x-twitter"></i>
              <i class="fa-brands fa-youtube"></i>
            </div>
          </div>
        </div>
        <div className="copyright">
          © 2035 by Gamma. Powered and secured by Gamma
        </div>
      </div>
    );
  }
}
