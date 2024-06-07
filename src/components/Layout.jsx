import React, { Component } from "react";
import { Link } from "react-router-dom";
import { loginUser, registerUser } from "./redux/Actions";
import { connect } from "react-redux";

class Layout extends Component {
  constructor() {
    super();
    this.state = {};

    this.makeHomeBlue = () => {
      if (
        document.getElementById("layout_navbar").classList.contains("darkMode")
      ) {
        document.getElementById("my_account_btn").style.backgroundColor =
          "transparent";
        document.getElementById("my_account_btn").style.color = "white";
        document.getElementById("home").style.color = "#1e68cb";
        document.getElementById("all").style.color = "white";
        document.getElementById("drones").style.color = "white";
        document.getElementById("cameras").style.color = "white";
        document.getElementById("accessories").style.color = "white";
        document.getElementById("sale").style.color = "white";
        document.getElementById("about").style.color = "white";
        document.getElementById("contact").style.color = "white";
        document.getElementById("cart_btn").style.backgroundColor =
          "transparent";
        document.getElementById("cart_btn").style.color = "white";
      } else {
        document.getElementById("my_account_btn").style.backgroundColor =
          "transparent";
        document.getElementById("my_account_btn").style.color = "black";
        document.getElementById("home").style.color = "#1e68cb";
        document.getElementById("all").style.color = "black";
        document.getElementById("drones").style.color = "black";
        document.getElementById("cameras").style.color = "black";
        document.getElementById("accessories").style.color = "black";
        document.getElementById("sale").style.color = "black";
        document.getElementById("about").style.color = "black";
        document.getElementById("contact").style.color = "black";
        document.getElementById("cart_btn").style.backgroundColor =
          "transparent";
        document.getElementById("cart_btn").style.color = "black";
      }

      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    };
    this.makeAllBlue = () => {
      if (
        document.getElementById("layout_navbar").classList.contains("darkMode")
      ) {
        document.getElementById("my_account_btn").style.backgroundColor =
          "transparent";
        document.getElementById("my_account_btn").style.color = "white";
        document.getElementById("all").style.color = "#1e68cb";
        document.getElementById("home").style.color = "white";
        document.getElementById("drones").style.color = "white";
        document.getElementById("cameras").style.color = "white";
        document.getElementById("accessories").style.color = "white";
        document.getElementById("sale").style.color = "white";
        document.getElementById("about").style.color = "white";
        document.getElementById("contact").style.color = "white";
        document.getElementById("cart_btn").style.backgroundColor =
          "transparent";
        document.getElementById("cart_btn").style.color = "white";
      } else {
        document.getElementById("my_account_btn").style.backgroundColor =
          "transparent";
        document.getElementById("my_account_btn").style.color = "black";
        document.getElementById("all").style.color = "#1e68cb";
        document.getElementById("home").style.color = "black";
        document.getElementById("drones").style.color = "black";
        document.getElementById("cameras").style.color = "black";
        document.getElementById("accessories").style.color = "black";
        document.getElementById("sale").style.color = "black";
        document.getElementById("about").style.color = "black";
        document.getElementById("contact").style.color = "black";
        document.getElementById("cart_btn").style.backgroundColor =
          "transparent";
        document.getElementById("cart_btn").style.color = "black";
      }

      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    };
    this.makeDronesBlue = () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });

      if (
        document.getElementById("layout_navbar").classList.contains("darkMode")
      ) {
        document.getElementById("my_account_btn").style.backgroundColor =
          "transparent";
        document.getElementById("my_account_btn").style.color = "white";
        document.getElementById("drones").style.color = "#1e68cb";
        document.getElementById("home").style.color = "white";
        document.getElementById("all").style.color = "white";
        document.getElementById("cameras").style.color = "white";
        document.getElementById("accessories").style.color = "white";
        document.getElementById("sale").style.color = "white";
        document.getElementById("about").style.color = "white";
        document.getElementById("contact").style.color = "white";
        document.getElementById("cart_btn").style.backgroundColor =
          "transparent";
        document.getElementById("cart_btn").style.color = "white";
      } else {
        document.getElementById("my_account_btn").style.backgroundColor =
          "transparent";
        document.getElementById("my_account_btn").style.color = "black";
        document.getElementById("drones").style.color = "#1e68cb";
        document.getElementById("home").style.color = "black";
        document.getElementById("all").style.color = "black";
        document.getElementById("cameras").style.color = "black";
        document.getElementById("accessories").style.color = "black";
        document.getElementById("sale").style.color = "black";
        document.getElementById("about").style.color = "black";
        document.getElementById("contact").style.color = "black";
        document.getElementById("cart_btn").style.backgroundColor =
          "transparent";
        document.getElementById("cart_btn").style.color = "black";
      }
    };
    this.makeCamerasBlue = () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
      if (
        document.getElementById("layout_navbar").classList.contains("darkMode")
      ) {
        document.getElementById("my_account_btn").style.backgroundColor =
          "transparent";
        document.getElementById("my_account_btn").style.color = "white";
        document.getElementById("cameras").style.color = "#1e68cb";
        document.getElementById("home").style.color = "white";
        document.getElementById("all").style.color = "white";
        document.getElementById("drones").style.color = "white";
        document.getElementById("accessories").style.color = "white";
        document.getElementById("sale").style.color = "white";
        document.getElementById("about").style.color = "white";
        document.getElementById("contact").style.color = "white";
      } else {
        document.getElementById("my_account_btn").style.backgroundColor =
          "transparent";
        document.getElementById("my_account_btn").style.color = "black";
        document.getElementById("cameras").style.color = "#1e68cb";
        document.getElementById("home").style.color = "black";
        document.getElementById("all").style.color = "black";
        document.getElementById("drones").style.color = "black";
        document.getElementById("accessories").style.color = "black";
        document.getElementById("sale").style.color = "black";
        document.getElementById("about").style.color = "black";
        document.getElementById("contact").style.color = "black";
      }
    };
    this.makeAccessoriesBlue = () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });

      if (
        document.getElementById("layout_navbar").classList.contains("darkMode")
      ) {
        document.getElementById("my_account_btn").style.backgroundColor =
          "transparent";
        document.getElementById("my_account_btn").style.color = "white";
        document.getElementById("accessories").style.color = "#1e68cb";
        document.getElementById("home").style.color = "white";
        document.getElementById("all").style.color = "white";
        document.getElementById("cameras").style.color = "white";
        document.getElementById("drones").style.color = "white";
        document.getElementById("sale").style.color = "white";
        document.getElementById("about").style.color = "white";
        document.getElementById("contact").style.color = "white";
        document.getElementById("cart_btn").style.backgroundColor =
          "transparent";
        document.getElementById("cart_btn").style.color = "white";
      } else {
        document.getElementById("my_account_btn").style.backgroundColor =
          "transparent";
        document.getElementById("my_account_btn").style.color = "black";
        document.getElementById("accessories").style.color = "#1e68cb";
        document.getElementById("home").style.color = "black";
        document.getElementById("all").style.color = "black";
        document.getElementById("cameras").style.color = "black";
        document.getElementById("drones").style.color = "black";
        document.getElementById("sale").style.color = "black";
        document.getElementById("about").style.color = "black";
        document.getElementById("contact").style.color = "black";
        document.getElementById("cart_btn").style.backgroundColor =
          "transparent";
        document.getElementById("cart_btn").style.color = "black";
      }
    };
    this.makeSaleBlue = () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });

      if (
        document.getElementById("layout_navbar").classList.contains("darkMode")
      ) {
        document.getElementById("my_account_btn").style.backgroundColor =
          "transparent";
        document.getElementById("my_account_btn").style.color = "white";
        document.getElementById("sale").style.color = "#1e68cb";
        document.getElementById("home").style.color = "white";
        document.getElementById("all").style.color = "white";
        document.getElementById("cameras").style.color = "white";
        document.getElementById("drones").style.color = "white";
        document.getElementById("accessories").style.color = "white";
        document.getElementById("about").style.color = "white";
        document.getElementById("contact").style.color = "white";
        document.getElementById("cart_btn").style.backgroundColor =
          "transparent";
        document.getElementById("cart_btn").style.color = "white";
      } else {
        document.getElementById("my_account_btn").style.backgroundColor =
          "transparent";
        document.getElementById("my_account_btn").style.color = "black";
        document.getElementById("sale").style.color = "#1e68cb";
        document.getElementById("home").style.color = "black";
        document.getElementById("all").style.color = "black";
        document.getElementById("cameras").style.color = "black";
        document.getElementById("drones").style.color = "black";
        document.getElementById("accessories").style.color = "black";
        document.getElementById("about").style.color = "black";
        document.getElementById("contact").style.color = "black";
        document.getElementById("cart_btn").style.backgroundColor =
          "transparent";
        document.getElementById("cart_btn").style.color = "black";
      }
    };
    this.makeAboutBlue = () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });

      if (
        document.getElementById("layout_navbar").classList.contains("darkMode")
      ) {
        document.getElementById("my_account_btn").style.backgroundColor =
          "transparent";
        document.getElementById("my_account_btn").style.color = "white";
        document.getElementById("about").style.color = "#1e68cb";
        document.getElementById("home").style.color = "white";
        document.getElementById("all").style.color = "white";
        document.getElementById("cameras").style.color = "white";
        document.getElementById("drones").style.color = "white";
        document.getElementById("accessories").style.color = "white";
        document.getElementById("sale").style.color = "white";
        document.getElementById("contact").style.color = "white";
        document.getElementById("cart_btn").style.backgroundColor =
          "transparent";
        document.getElementById("cart_btn").style.color = "white";
      } else {
        document.getElementById("my_account_btn").style.backgroundColor =
          "transparent";
        document.getElementById("my_account_btn").style.color = "black";
        document.getElementById("about").style.color = "#1e68cb";
        document.getElementById("home").style.color = "black";
        document.getElementById("all").style.color = "black";
        document.getElementById("cameras").style.color = "black";
        document.getElementById("drones").style.color = "black";
        document.getElementById("accessories").style.color = "black";
        document.getElementById("sale").style.color = "black";
        document.getElementById("contact").style.color = "black";
        document.getElementById("cart_btn").style.backgroundColor =
          "transparent";
        document.getElementById("cart_btn").style.color = "black";
      }
    };
    this.makeContactBlue = () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });

      if (
        document.getElementById("layout_navbar").classList.contains("darkMode")
      ) {
        document.getElementById("my_account_btn").style.backgroundColor =
          "transparent";
        document.getElementById("my_account_btn").style.color = "white";
        document.getElementById("contact").style.color = "#1e68cb";
        document.getElementById("home").style.color = "white";
        document.getElementById("all").style.color = "white";
        document.getElementById("cameras").style.color = "white";
        document.getElementById("drones").style.color = "white";
        document.getElementById("accessories").style.color = "white";
        document.getElementById("about").style.color = "white";
        document.getElementById("sale").style.color = "white";
        document.getElementById("cart_btn").style.backgroundColor =
          "transparent";
        document.getElementById("cart_btn").style.color = "white";
      } else {
        document.getElementById("my_account_btn").style.backgroundColor =
          "transparent";
        document.getElementById("my_account_btn").style.color = "black";
        document.getElementById("contact").style.color = "#1e68cb";
        document.getElementById("home").style.color = "black";
        document.getElementById("all").style.color = "black";
        document.getElementById("cameras").style.color = "black";
        document.getElementById("drones").style.color = "black";
        document.getElementById("accessories").style.color = "black";
        document.getElementById("about").style.color = "black";
        document.getElementById("sale").style.color = "black";
        document.getElementById("cart_btn").style.backgroundColor =
          "transparent";
        document.getElementById("cart_btn").style.color = "black";
      }
    };
    this.makeBtnBlue = () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
      if (
        document.getElementById("layout_navbar").classList.contains("darkMode")
      ) {
        document.getElementById("my_account_btn").style.color = "#1e68cb";
        document.getElementById("contact").style.color = "white";
        document.getElementById("home").style.color = "white";
        document.getElementById("all").style.color = "white";
        document.getElementById("cameras").style.color = "white";
        document.getElementById("drones").style.color = "white";
        document.getElementById("accessories").style.color = "white";
        document.getElementById("about").style.color = "white";
        document.getElementById("sale").style.color = "white";
        document.getElementById("cart_btn").style.backgroundColor =
          "transparent";
        document.getElementById("cart_btn").style.color = "white";
      } else {
        document.getElementById("my_account_btn").style.color = "#1e68cb";
        document.getElementById("contact").style.color = "black";
        document.getElementById("home").style.color = "black";
        document.getElementById("all").style.color = "black";
        document.getElementById("cameras").style.color = "black";
        document.getElementById("drones").style.color = "black";
        document.getElementById("accessories").style.color = "black";
        document.getElementById("about").style.color = "black";
        document.getElementById("sale").style.color = "black";
        document.getElementById("cart_btn").style.backgroundColor =
          "transparent";
        document.getElementById("cart_btn").style.color = "black";
      }
    };
    this.makeCartBlue = () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
      if (
        document.getElementById("layout_navbar").classList.contains("darkMode")
      ) {
        document.getElementById("cart_btn").style.color = "#1e68cb";
        document.getElementById("my_account_btn").style.backgroundColor =
          "transparent";
        document.getElementById("my_account_btn").style.color = "white";
        document.getElementById("contact").style.color = "white";
        document.getElementById("home").style.color = "white";
        document.getElementById("all").style.color = "white";
        document.getElementById("cameras").style.color = "white";
        document.getElementById("drones").style.color = "white";
        document.getElementById("accessories").style.color = "white";
        document.getElementById("about").style.color = "white";
        document.getElementById("sale").style.color = "white";
      } else {
        document.getElementById("cart_btn").style.color = "#1e68cb";
        document.getElementById("my_account_btn").style.backgroundColor =
          "transparent";
        document.getElementById("my_account_btn").style.color = "black";
        document.getElementById("contact").style.color = "black";
        document.getElementById("home").style.color = "black";
        document.getElementById("all").style.color = "black";
        document.getElementById("cameras").style.color = "black";
        document.getElementById("drones").style.color = "black";
        document.getElementById("accessories").style.color = "black";
        document.getElementById("about").style.color = "black";
        document.getElementById("sale").style.color = "black";
      }
    };
    this.handleToggleMode = () => {
      const toggleBtn = document.getElementById("toggleBtn");
      const body = document.getElementById("body");
      const layout = document.getElementById("layout");
      const layout_navbar = document.getElementById("layout_navbar");
      if (toggleBtn.classList.contains("fa-toggle-off")) {
        toggleBtn.classList.remove("fa-toggle-off");
        toggleBtn.classList.add("fa-toggle-on");
        body.classList.remove("lightMode");
        body.classList.add("darkMode");
        layout.classList.remove("lightMode");
        layout.classList.add("darkMode");
        layout_navbar.classList.remove("lightMode");
        layout_navbar.classList.add("darkMode");

        document.getElementById("my_account_btn").style.backgroundColor =
          "transparent";
        document.getElementById("my_account_btn").style.color = "white";
        document.getElementById("home").style.color = "#1e68cb";
        document.getElementById("all").style.color = "white";
        document.getElementById("drones").style.color = "white";
        document.getElementById("cameras").style.color = "white";
        document.getElementById("accessories").style.color = "white";
        document.getElementById("sale").style.color = "white";
        document.getElementById("about").style.color = "white";
        document.getElementById("contact").style.color = "white";
        document.getElementById("cart_btn").style.backgroundColor =
          "transparent";
        document.getElementById("cart_btn").style.color = "white";
      } else {
        toggleBtn.classList.remove("fa-toggle-on");
        toggleBtn.classList.add("fa-toggle-off");
        body.classList.remove("darkMode");
        body.classList.add("lightMode");
        layout.classList.remove("darkMode");
        layout.classList.add("lightMode");
        layout_navbar.classList.remove("darkMode");
        layout_navbar.classList.add("lightMode");

        document.getElementById("my_account_btn").style.backgroundColor =
          "transparent";
        document.getElementById("my_account_btn").style.color = "black";
        document.getElementById("home").style.color = "#1e68cb";
        document.getElementById("all").style.color = "black";
        document.getElementById("drones").style.color = "black";
        document.getElementById("cameras").style.color = "black";
        document.getElementById("accessories").style.color = "black";
        document.getElementById("sale").style.color = "black";
        document.getElementById("about").style.color = "black";
        document.getElementById("contact").style.color = "black";
        document.getElementById("cart_btn").style.backgroundColor =
          "transparent";
        document.getElementById("cart_btn").style.color = "black";
      }
    };
  }
  render() {
    return (
      <React.Fragment>
        <div className="layout-container" id="layout">
          <div className="logo-layout">
            <img
              src="https://1000logos.net/wp-content/uploads/2022/07/Logo-ATT.png"
              alt=""
            />
            <h3>GAMMA.</h3>
            <div className="drones-div">Drones and Action Cameras</div>
          </div>
          <div className="get-new-updates">
            <form class="form" id="form">
              <input
                type="email"
                id="email"
                placeholder="Enter your email here*"
                required
              />
              <button type="submit">Get News and Updates</button>
            </form>
          </div>
          <div className="layout-navbar" id="layout_navbar">
            <ul>
              <li onClick={this.makeHomeBlue}>
                <Link id="home" to="/">
                  HOME
                </Link>
              </li>
              <li onClick={this.makeAllBlue}>
                <Link id="all" to="/all">
                  ALL PRODUCTS
                </Link>
              </li>
              <li onClick={this.makeDronesBlue}>
                <Link id="drones" to="/drones">
                  DRONES
                </Link>
              </li>
              <li onClick={this.makeCamerasBlue}>
                <Link id="cameras" to="/cameras">
                  CAMERAS
                </Link>
              </li>
              <li onClick={this.makeAccessoriesBlue}>
                <Link id="accessories" to="/accessories">
                  ACCESSORIES
                </Link>
              </li>
              <li onClick={this.makeSaleBlue}>
                <Link id="sale" to="/sale">
                  SALE
                </Link>
              </li>
              <li onClick={this.makeAboutBlue}>
                <Link id="about" to="/about">
                  ABOUT
                </Link>
              </li>
              <li onClick={this.makeContactBlue}>
                <Link id="contact" to="/contact">
                  CONTACT
                </Link>
              </li>
            </ul>
            <div className="navbar-login">
              <ul>
                <li onClick={this.makeBtnBlue}>
                  <Link
                    to="/myAccount"
                    id="my_account_btn"
                    className="cart-account-link"
                  >
                    <i class="fa-regular fa-user mr-1"></i> My Account
                  </Link>
                </li>
                <li onClick={this.makeCartBlue}>
                  <Link
                    to="/cart"
                    id="cart_btn"
                    className="cart-account-link ml-1"
                  >
                    <i class="fa-solid fa-cart-shopping mr-1"></i> Cart (
                    {this.props.cartQuantity})
                  </Link>
                </li>
                <div className="toggle-mode-container">
                  <i
                    onClick={this.handleToggleMode}
                    id="toggleBtn"
                    class="fa-solid fa-toggle-off"
                  ></i>
                </div>
              </ul>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return state;
};

const mapDispatchToProps = (dispatch) => {
  return {
    loginUser: (userData) => {
      dispatch(loginUser(userData));
    },
    registerUser: (username, password, email) => {
      dispatch(registerUser(username, password, email));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Layout);
