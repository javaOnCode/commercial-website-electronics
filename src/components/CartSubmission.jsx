import { renderHook } from "@testing-library/react";
import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { submitShopping } from "./redux/Actions";

class CartSubmission extends Component {
  constructor() {
    super();
    this.state = {};
    this.proceedToCheckout = (event) => {
      event.preventDefault();
      this.openModal();
    };
    // this.submitShopping = () => {
    //   alert("Your order has been succesfully placed on the list");
    // };

    this.openModal = () => {
      const modal = document.getElementById("payment_modal");
      if (modal) {
        modal.classList.add("show");
        modal.style.display = "block";
      }
    };
    this.closeModal = () => {
      const modal = document.getElementById("payment_modal");
      modal.classList.remove("show");
    };
  }
  render() {
    return (
      <React.Fragment>
        <div className="cart-submission-container">
          <div className="cart-submission-inner-container">
            <form onSubmit={this.proceedToCheckout}>
              <h2>Personal Information</h2>
              <div>
                <input
                  type="text"
                  placeholder="Fullname"
                  required
                  id="fullname_input"
                />
              </div>
              <div>
                <input type="email" placeholder="Email" id="email_input" />
              </div>
              <div>
                <select id="address1_input" required>
                  <option hidden>Select the City</option>
                  <option value="Baku">Baku</option>
                  <option value="Sumgayit">Sumgayit</option>
                  <option value="Ganja">Ganja</option>
                  <option value="Ucar">Ucar</option>
                  <option value="Kurdamir">Kurdamir</option>
                  <option value="Kelbecer">Kelbecer</option>
                  <option value="Shusha">Shusha</option>
                  <option value="Quba">Quba</option>
                  <option value="Qusar">Qusar</option>
                  <option value="Qabala">Qabala</option>
                  <option value="Masallli">Masallli</option>
                </select>
              </div>
              <div>
                <input
                  type="text"
                  required
                  placeholder="Address line 2"
                  id="address2_input"
                />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Postal Code"
                  required
                  id="postalCode_input"
                />
              </div>
              <button>Proceed To Checkout</button>
            </form>
          </div>
          <div className="submit-cart-submission-container">
            <div className="checkbox-container">
              <input type="checkbox" id="checkbox_input" required />
              <label htmlFor="checkbox_input">
                I read and agree to the Rules and Regulations
              </label>
            </div>
            <div className="total-summary">
              <h3>
                <i class="fa-solid fa-money-bills"></i> Cart Summary
              </h3>
              <p>
                Item Total: ${this.props.cartTotalAmount} <br /> Kargo price: $
                {this.props.kargoPrice}
              </p>

              <hr />
              <p>Total Amount: ${this.props.cartFinalAmount}</p>
            </div>
          </div>
        </div>
        <div className="modal fade" id="payment_modal">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h2>Payment Information</h2>
                <button
                  type="button"
                  className="close"
                  onClick={this.closeModal}
                >
                  &times;
                </button>
              </div>
              <div className="modal-body">
                <p> Cart Information</p>
                <div className="cart-number-div">
                  <div>
                    <input placeholder="1" required type="text" maxLength={1} />
                    <input placeholder="2" required type="text" maxLength={1} />
                    <input placeholder="3" required type="text" maxLength={1} />
                    <input placeholder="4" required type="text" maxLength={1} />
                  </div>
                  <p>-</p>
                  <div>
                    <input placeholder="5" required type="text" maxLength={1} />
                    <input placeholder="6" required type="text" maxLength={1} />
                    <input placeholder="7" required type="text" maxLength={1} />
                    <input placeholder="8" required type="text" maxLength={1} />
                  </div>
                  <p>-</p>
                  <div>
                    <input placeholder="9" required type="text" maxLength={1} />
                    <input placeholder="0" required type="text" maxLength={1} />
                    <input placeholder="1" required type="text" maxLength={1} />
                    <input placeholder="2" required type="text" maxLength={1} />
                  </div>
                  <p>-</p>
                  <div>
                    <input placeholder="3" required type="text" maxLength={1} />
                    <input placeholder="4" required type="text" maxLength={1} />
                    <input placeholder="5" required type="text" maxLength={1} />
                    <input placeholder="6" required type="text" maxLength={1} />
                  </div>
                </div>
                <div className="cart-exp-date-container">
                  <input placeholder="mm" required type="text" maxLength={2} />
                  <>/</>
                  <input placeholder="yy" required type="text" maxLength={2} />
                </div>
                <p className="modal-total-amount">
                  Total Amount: ${this.props.cartFinalAmount}
                </p>
              </div>
              <div className="modal-footer">
                <button
                  data-dismiss="modal"
                  className="btn btn-dark"
                  onClick={this.props.submitShopping}
                >
                  SUBMIT
                </button>
                <Link to="/">
                  <button className="btn btn-primary" onClick={this.closeModal}>
                    Close
                  </button>
                </Link>
              </div>
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
    submitShopping: () => dispatch(submitShopping()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CartSubmission);
