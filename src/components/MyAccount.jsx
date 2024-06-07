import React, { Component } from "react";
import { loginUser, registerUser } from "./redux/Actions";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class MyAccount extends Component {
  constructor() {
    super();
    this.state = {};

    this.activateRegister = () => {
      document.querySelector(".container").classList.add("active");
    };
    this.deActivateRegister = () => {
      document.querySelector(".container").classList.remove("active");
    };

    this.handleRegisterForm = (event) => {
      event.preventDefault();
      const register_username = document.getElementById(
        "register_username_input"
      ).value;
      const register_password = document.getElementById(
        "register_password_input"
      ).value;
      const password_confirm = document.getElementById(
        "register_password_confirmation"
      ).value;

      if (register_password.length < 8) {
        alert("Password should container 8 characters minimum...");
      } else {
        if (register_password === password_confirm) {
          this.props.registerUser(
            register_username,
            register_password,
            password_confirm
          );
          alert("You succesfully created an account!");
          register_form.reset();
        } else {
          alert("Password mismatch...");
        }
      }
    };

    this.handleLoginForm = (event) => {
      event.preventDefault();
      const login_username = document.getElementById(
        "login_username_input"
      ).value;
      const login_password = document.getElementById(
        "login_password_input"
      ).value;

      if (login_password.length < 8) {
        alert("Invalid Password");
        login_form.reset();
      } else {
        this.props.loginUser(login_username, login_password);
        login_form.reset();
      }
    };

    this.changeView = () => {
      if (
        document.getElementById("eye_closed").classList.contains("fa-eye-slash")
      ) {
        document.getElementById("eye_closed").classList.remove("fa-eye-slash");
        document.getElementById("eye_closed").classList.add("fa-eye");
        document.getElementById("login_password_input").type = "text";
      } else {
        document.getElementById("eye_closed").classList.remove("fa-eye");
        document.getElementById("eye_closed").classList.add("fa-eye-slash");
        document.getElementById("login_password_input").type = "password";
      }
    };
    this.changeRegView = () => {
      if (
        document
          .getElementById("reg_eye_closed")
          .classList.contains("fa-eye-slash")
      ) {
        document
          .getElementById("reg_eye_closed")
          .classList.remove("fa-eye-slash");
        document.getElementById("reg_eye_closed").classList.add("fa-eye");
        document.getElementById("register_password_input").type = "text";
      } else {
        document.getElementById("reg_eye_closed").classList.remove("fa-eye");
        document.getElementById("reg_eye_closed").classList.add("fa-eye-slash");
        document.getElementById("register_password_input").type = "password";
      }
    };
    this.changeConfirmView = () => {
      if (
        document
          .getElementById("confirm_eye_closed")
          .classList.contains("fa-eye-slash")
      ) {
        document
          .getElementById("confirm_eye_closed")
          .classList.remove("fa-eye-slash");
        document.getElementById("confirm_eye_closed").classList.add("fa-eye");
        document.getElementById("register_password_confirmation").type = "text";
      } else {
        document
          .getElementById("confirm_eye_closed")
          .classList.remove("fa-eye");
        document
          .getElementById("confirm_eye_closed")
          .classList.add("fa-eye-slash");
        document.getElementById("register_password_confirmation").type =
          "password";
      }
    };
  }
  render() {
    return (
      <div className="my-account-container">
        <div className="container" id="container">
          <div className="form-container sign-up">
            <form onSubmit={this.handleRegisterForm} id="register_form">
              <h1>Create Account</h1>
              <div className="social-icons">
                <a href="#" class="icon">
                  <i class="fa-brands fa-google-plus-g"></i>
                </a>
                <a href="#" class="icon">
                  <i class="fa-brands fa-facebook-f"></i>
                </a>
                <a href="#" class="icon">
                  <i class="fa-brands fa-github"></i>
                </a>
                <a href="#" class="icon">
                  <i class="fa-brands fa-linkedin-in"></i>
                </a>
              </div>
              <span>or use your username for registration</span>
              <input
                type="text"
                placeholder="Username"
                id="register_username_input"
                required
              />
              <input
                type="password"
                id="register_password_input"
                placeholder="Password"
                required
              />
              <i
                onClick={this.changeRegView}
                id="reg_eye_closed"
                class="fa-solid fa-eye-slash eye-icon-closed-reg"
              ></i>
              <input
                type="password"
                id="register_password_confirmation"
                required
                placeholder="Confirm your password"
              />
              <i
                onClick={this.changeConfirmView}
                id="confirm_eye_closed"
                class="fa-solid fa-eye-slash eye-icon-closed-confirm"
              ></i>
              <button>Sign Up</button>
            </form>
          </div>
          <div className="form-container sign-in">
            <form onSubmit={this.handleLoginForm} id="login_form">
              <h1>Sign In</h1>
              <div className="social-icons">
                <a href="#" class="icon">
                  <i class="fa-brands fa-google-plus-g"></i>
                </a>
                <a href="#" class="icon">
                  <i class="fa-brands fa-facebook-f"></i>
                </a>
                <a href="#" class="icon">
                  <i class="fa-brands fa-github"></i>
                </a>
                <a href="#" class="icon">
                  <i class="fa-brands fa-linkedin-in"></i>
                </a>
              </div>
              <span>or use your username and password</span>
              <input
                type="text"
                placeholder="Username"
                id="login_username_input"
                required
              />
              <input
                type="password"
                id="login_password_input"
                placeholder="Password"
                required
              />
              <i
                onClick={this.changeView}
                id="eye_closed"
                class="fa-solid fa-eye-slash eye-icon-closed"
              ></i>
              <a href="#">Forgot your password?</a>
              <button>Sign In</button>
            </form>
          </div>
          <div className="toggle-container">
            <div className="toggle">
              <div className="toggle-panel toggle-right">
                <h1>Hello, new User!</h1>
                <p>
                  Register with your personal details to use all of site
                  features
                </p>
                <button
                  className="hidden"
                  id="register_btn"
                  onClick={this.activateRegister}
                >
                  Sign Up
                </button>
              </div>
              <div className="toggle-panel toggle-left">
                <h1>Welcome Back!</h1>
                <p>Enter your personal details to use all of site features</p>
                <button
                  className="hidden"
                  id="login_btn"
                  onClick={this.deActivateRegister}
                >
                  Sign In
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    loginUser: (username, password) => dispatch(loginUser(username, password)),
    registerUser: (username, password, confirmPassword) =>
      dispatch(registerUser(username, password, confirmPassword)),
  };
};

export default connect(null, mapDispatchToProps)(MyAccount);
